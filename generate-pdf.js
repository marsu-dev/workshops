#!/usr/bin/env node

/**
 * Script to generate PDFs from markdown files
 * Uses Pandoc to convert markdown to PDF with custom styling
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const PRESENTATIONS_DIR = path.join(__dirname, 'presentations');
const OUTPUT_DIR = path.join(__dirname, 'pdf');
const CSS_TEMPLATE = path.join(__dirname, 'pdf-template.css');
const CSS_TEMPLATE_HANDOUT = path.join(__dirname, 'pdf-template-handout.css');

// Console colors
const colors = {
    reset: '\x1b[0m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    red: '\x1b[31m',
    blue: '\x1b[34m',
};

function log(message, color = 'reset') {
    console.log(`${colors[color]}${message}${colors.reset}`);
}

function checkPandoc() {
    try {
        execSync('pandoc --version', { stdio: 'ignore' });
        return true;
    } catch (error) {
        return false;
    }
}

function checkDependencies() {
    const missing = [];

    if (!checkPandoc()) {
        missing.push('pandoc');
    }

    // Check if a PDF engine is available
    let pdfEngineFound = false;
    try {
        execSync('weasyprint --version', { stdio: 'ignore' });
        pdfEngineFound = true;
    } catch (error) {
        try {
            execSync('prince --version', { stdio: 'ignore' });
            pdfEngineFound = true;
        } catch (error2) {
            try {
                // Vérifier si puppeteer est installé
                require.resolve('puppeteer');
                pdfEngineFound = true;
            } catch (error3) {
                try {
                    execSync('pdflatex --version', { stdio: 'ignore' });
                    pdfEngineFound = true;
                } catch (error4) {
                    try {
                        execSync('xelatex --version', { stdio: 'ignore' });
                        pdfEngineFound = true;
                    } catch (error5) {
                        log('⚠️  No PDF engine found (weasyprint, prince, puppeteer, pdflatex, xelatex)', 'yellow');
                        log('   Recommended installation: pip install weasyprint', 'yellow');
                        log('   or: brew install weasyprint (on macOS)', 'yellow');
                    }
                }
            }
        }
    }

    if (missing.length > 0) {
        log(`❌ Missing dependencies: ${missing.join(', ')}`, 'red');
        log('\n📦 Installation:', 'yellow');
        log('   macOS: brew install pandoc', 'blue');
        log('   Ubuntu/Debian: sudo apt-get install pandoc', 'blue');
        log('   Windows: https://pandoc.org/installing.html', 'blue');
        return false;
    }

    return true;
}

function getMarkdownFiles() {
    const files = fs.readdirSync(PRESENTATIONS_DIR);
    return files.filter(file => file.endsWith('.md'));
}

function extractTitle(markdown) {
    const match = markdown.match(/^#\s+(.+)$/m);
    return match ? match[1] : 'Presentation';
}

function splitIntoSlides(markdown) {
    // Split by --- or ***
    const slides = markdown.split(/\n---\n|\n\*\*\*\n/);
    // Filter empty slides
    return slides.filter(slide => slide.trim().length > 0);
}

function applyInlineFormatting(text) {
    // Apply inline transformations (bold, code, links)
    return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
}

function markdownToHTML(markdown) {
    // Simple markdown to HTML conversion
    let lines = markdown.split('\n');
    let html = '';
    let inTable = false;
    let tableRows = [];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        // Detect markdown tables (lines with |)
        if (line.includes('|') && line.split('|').length > 2) {
            if (!inTable) {
                inTable = true;
                tableRows = [];
            }
            // Ignore separator line (---)
            if (!line.match(/^\|[\s\-\|:]+\|$/)) {
                tableRows.push(line);
            }
            continue;
        } else {
            // End of table
            if (inTable && tableRows.length > 0) {
                html += '<table>\n';
                tableRows.forEach((row, idx) => {
                    const cells = row.split('|').map(c => c.trim()).filter(c => c);
                    if (idx === 0) {
                        // Header
                        html += '<thead><tr>';
                        cells.forEach(cell => {
                            const formattedCell = applyInlineFormatting(cell);
                            html += `<th>${formattedCell}</th>`;
                        });
                        html += '</tr></thead>\n<tbody>\n';
                    } else {
                        html += '<tr>';
                        cells.forEach(cell => {
                            const formattedCell = applyInlineFormatting(cell);
                            html += `<td>${formattedCell}</td>`;
                        });
                        html += '</tr>\n';
                    }
                });
                html += '</tbody></table>\n';
                tableRows = [];
                inTable = false;
            }
        }

        if (!line) {
            html += '\n';
            continue;
        }

        // Headers
        if (line.match(/^### /)) {
            let content = line.replace(/^### (.*)$/, '$1');
            content = applyInlineFormatting(content);
            html += `<h3>${content}</h3>\n`;
        } else if (line.match(/^## /)) {
            let content = line.replace(/^## (.*)$/, '$1');
            content = applyInlineFormatting(content);
            html += `<h2>${content}</h2>\n`;
        } else if (line.match(/^# /)) {
            let content = line.replace(/^# (.*)$/, '$1');
            content = applyInlineFormatting(content);
            html += `<h1>${content}</h1>\n`;
        }
        // Lists
        else if (line.match(/^[\-\*] /)) {
            let content = line.replace(/^[\-\*] (.*)$/, '$1');
            content = applyInlineFormatting(content);
            html += `<li>${content}</li>\n`;
        }
        // Code blocks
        else if (line.startsWith('```')) {
            // Handle multi-line code blocks
            const codeMatch = markdown.match(/```(\w+)?\n([\s\S]*?)```/);
            if (codeMatch) {
                html += `<pre><code>${codeMatch[2]}</code></pre>\n`;
                // Advance index to skip code block lines
                const codeLines = codeMatch[0].split('\n').length - 1;
                i += codeLines;
                continue;
            }
        }
        // Paragraphs (normal lines)
        else if (!line.startsWith('<')) {
            // Apply inline transformations
            let processedLine = applyInlineFormatting(line);
            html += `<p>${processedLine}</p>\n`;
        } else {
            html += line + '\n';
        }
    }

    // Close table if still open
    if (inTable && tableRows.length > 0) {
        html += '<table>\n';
        tableRows.forEach((row, idx) => {
            const cells = row.split('|').map(c => c.trim()).filter(c => c);
            if (idx === 0) {
                html += '<thead><tr>';
                cells.forEach(cell => {
                    const formattedCell = applyInlineFormatting(cell);
                    html += `<th>${formattedCell}</th>`;
                });
                html += '</tr></thead>\n<tbody>\n';
            } else {
                html += '<tr>';
                cells.forEach(cell => {
                    const formattedCell = applyInlineFormatting(cell);
                    html += `<td>${formattedCell}</td>`;
                });
                html += '</tr>\n';
            }
        });
        html += '</tbody></table>\n';
    }

    // Wrap consecutive lists
    html = html.replace(/(<li>.*?<\/li>\n)+/g, (match) => {
        return '<ul>\n' + match + '</ul>\n';
    });

    return html;
}

function getSecondaryLogo(filePath) {
    if (!filePath) return null;

    // Determine secondary logo based on file
    if (filePath.includes('be-bop')) {
        return { src: 'themes/logo-be-bop.svg', alt: 'be-BOP' };
    } else if (filePath.includes('sparrow') || filePath.includes('multisig')) {
        return { src: 'themes/logo-sparrow.png', alt: 'Sparrow Wallet' };
    } else if (filePath.includes('12-hardware-wallets-sparrow')) {
        return { src: 'themes/logo-sparrow.png', alt: 'Sparrow Wallet' };
    } else if (filePath.includes('05-git-basics') || filePath.includes('06-git-advanced')) {
        return { type: 'github', alt: 'Git' };
    } else if (filePath.includes('07-liana-basics') || filePath.includes('08-liana-advanced')) {
        return { src: 'themes/logo-liana.svg', alt: 'Liana' };
    } else if (filePath.includes('09-installer-umbrel')) {
        return { src: 'themes/logo-umbrel.png', alt: 'Umbrel' };
    } else if (filePath.includes('10-presentation-soroban')) {
        return { src: 'themes/logo-tsuba.png', alt: 'Soroban' };
    } else if (filePath.includes('11-satochip')) {
        return { src: 'themes/logo-satoship.png', alt: 'Satochip' };
    }

    return null;
}

function generateHTML(markdown, title, filePath, mode = 'normal') {
    const slides = splitIntoSlides(markdown);
    const totalSlides = slides.length;

    // Debug: verify that slides are properly separated
    if (mode === 'handout' && slides.length > 0) {
        console.log(`Total slides: ${totalSlides}`);
        console.log(`First slide preview: ${slides[0].substring(0, 50)}...`);
    }

    // Choose CSS template based on mode
    const cssTemplate = mode === 'handout' ? CSS_TEMPLATE_HANDOUT : CSS_TEMPLATE;
    const cssContent = fs.readFileSync(cssTemplate, 'utf-8');

    // Determine secondary logo
    const secondaryLogo = getSecondaryLogo(filePath);
    let logoData = '';
    let logoHTML = '';
    if (secondaryLogo) {
        if (secondaryLogo.type === 'github') {
            logoData = 'github';
            logoHTML = '<div class="secondary-logo github-logo">Git</div>';
        } else {
            // Convert relative path to absolute path for PDF
            const logoPath = path.resolve(__dirname, secondaryLogo.src);
            logoData = `file://${logoPath}`;
            logoHTML = `<img src="file://${logoPath}" alt="${secondaryLogo.alt}" class="secondary-logo" />`;
        }
    }

    let html = `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>${title}</title>
    <style>
${cssContent}
    </style>
</head>
<body>
`;

    if (mode === 'handout') {
        // Handout mode: 6 slides per page (3 rows × 2 columns) with space for notes
        const SLIDES_PER_PAGE = 6;
        for (let i = 0; i < slides.length; i += SLIDES_PER_PAGE) {
            const pageSlides = slides.slice(i, i + SLIDES_PER_PAGE);
            const pageNumber = Math.floor(i / SLIDES_PER_PAGE) + 1;
            const totalPages = Math.ceil(slides.length / SLIDES_PER_PAGE);

            html += `    <div class="page" data-title="${title}" data-page="${pageNumber} / ${totalPages}">\n`;
            // Logo in absolute position (like footer, but for header)
            if (logoData) {
                if (logoData === 'github') {
                    html += `        <div class="page-logo github-logo"></div>\n`;
                } else {
                    html += `        <div class="page-logo"><img src="${logoData}" alt="Logo" /></div>\n`;
                }
            }

            // Slides container with its own grid
            html += `        <div class="page-slides">\n`;
            // Add exactly 6 slides per page (3 rows × 2 columns)
            // Use slides from current page, not all slides
            for (let slideIndex = 0; slideIndex < SLIDES_PER_PAGE; slideIndex++) {
                const globalIndex = i + slideIndex;
                if (globalIndex < slides.length) {
                    // Slide with content - use global index to get the correct slide
                    const slide = slides[globalIndex];
                    const slideHTML = markdownToHTML(slide.trim());
                    html += `        <div class="slide" data-slide-number="${globalIndex + 1} / ${totalSlides}">\n`;
                    html += `            <div class="slide-content">\n`;
                    html += `                ${slideHTML}\n`;
                    html += `            </div>\n`;
                    html += `            <div class="slide-notes">\n`;
                    // Generate horizontal lines for note-taking (about 8-10 lines)
                    for (let lineIndex = 0; lineIndex < 10; lineIndex++) {
                        html += `                <div class="slide-notes-line" style="margin-top: ${lineIndex === 0 ? '0' : '1.5em'};"></div>\n`;
                    }
                    html += `            </div>\n`;
                    html += `        </div>\n`;
                } else {
                    // Empty slide to complete the page
                    html += `        <div class="slide" data-slide-number="">\n`;
                    html += `            <div class="slide-content"></div>\n`;
                    html += `            <div class="slide-notes">\n`;
                    // Generate horizontal lines for note-taking
                    for (let lineIndex = 0; lineIndex < 10; lineIndex++) {
                        html += `                <div class="slide-notes-line" style="margin-top: ${lineIndex === 0 ? '0' : '1.5em'};"></div>\n`;
                    }
                    html += `            </div>\n`;
                    html += `        </div>\n`;
                }
            }
            html += `        </div>\n`; // Close page-slides

            html += `    </div>\n`;
        }
    } else {
        // Normal mode: 3 slides per page
        const SLIDES_PER_PAGE = 3;
        for (let i = 0; i < slides.length; i += SLIDES_PER_PAGE) {
            const pageSlides = slides.slice(i, i + SLIDES_PER_PAGE);
            const pageNumber = Math.floor(i / SLIDES_PER_PAGE) + 1;
            const totalPages = Math.ceil(slides.length / SLIDES_PER_PAGE);

            html += `    <div class="page" data-title="${title}" data-page="${pageNumber} / ${totalPages}">\n`;
            // Add logo to each page
            if (logoHTML) {
                html += `        ${logoHTML}\n`;
            }

            // Add exactly 3 slides per page
            for (let slideIndex = 0; slideIndex < SLIDES_PER_PAGE; slideIndex++) {
                const globalIndex = i + slideIndex;
                if (slideIndex < pageSlides.length) {
                    // Slide with content
                    const slide = pageSlides[slideIndex];
                    const slideHTML = markdownToHTML(slide.trim());
                    html += `        <div class="slide" data-slide-number="${globalIndex + 1} / ${totalSlides}">\n`;
                    html += `            ${slideHTML}\n`;
                    html += `        </div>\n`;
                } else {
                    // Empty slide to complete the page (also takes 1/3 of the height)
                    html += `        <div class="slide" data-slide-number=""></div>\n`;
                }
            }

            html += `    </div>\n`;
        }
    }

    html += `</body>
</html>`;

    return html;
}

function convertMarkdownToPDF(markdownFile, outputFile, mode = 'normal') {
    const inputPath = path.join(PRESENTATIONS_DIR, markdownFile);
    const outputPath = path.join(OUTPUT_DIR, outputFile);

    // Read markdown content
    const markdown = fs.readFileSync(inputPath, 'utf-8');
    const title = extractTitle(markdown);

    const modeLabel = mode === 'handout' ? ' (handout)' : '';
    log(`📄 Generating ${outputFile}${modeLabel}...`, 'blue');

    try {
        // Create temporary HTML file
        const tempHtml = path.join(OUTPUT_DIR, `${path.basename(outputFile, '.pdf')}.html`);
        const html = generateHTML(markdown, title, markdownFile, mode);
        fs.writeFileSync(tempHtml, html, 'utf-8');

        // Convert HTML to PDF
        // Try different PDF engines in order of preference
        let success = false;

        // Option 1: WeasyPrint (recommended - free and maintained)
        try {
            execSync(`which weasyprint`, { stdio: 'ignore' });
            // CSS is embedded in HTML, no need for --stylesheet
            const cmd = `weasyprint "${tempHtml}" "${outputPath}"`;
            execSync(cmd, { stdio: 'pipe', cwd: OUTPUT_DIR });
            success = true;
            log(`   (used WeasyPrint)`, 'blue');
        } catch (error) {
            // Option 2: Pandoc avec WeasyPrint
            try {
                execSync(`which weasyprint`, { stdio: 'ignore' });
                const cmd = [
                    'pandoc',
                    `"${tempHtml}"`,
                    '-o', `"${outputPath}"`,
                    '--pdf-engine=weasyprint',
                    '--standalone'
                ].join(' ');
                execSync(cmd, { stdio: 'pipe', cwd: OUTPUT_DIR });
                success = true;
                log(`   (used Pandoc + WeasyPrint)`, 'blue');
            } catch (error2) {
                // Option 3: Prince XML (if available)
                try {
                    execSync(`which prince`, { stdio: 'ignore' });
                    const cmd = `prince "${tempHtml}" -o "${outputPath}"`;
                    execSync(cmd, { stdio: 'pipe', cwd: OUTPUT_DIR });
                    success = true;
                    log(`   (used Prince XML)`, 'blue');
                } catch (error3) {
                    // Option 4: Pandoc avec Prince
                    try {
                        execSync(`which prince`, { stdio: 'ignore' });
                        const cmd = [
                            'pandoc',
                            `"${tempHtml}"`,
                            '-o', `"${outputPath}"`,
                            '--pdf-engine=prince',
                            '--standalone'
                        ].join(' ');
                        execSync(cmd, { stdio: 'pipe', cwd: OUTPUT_DIR });
                        success = true;
                        log(`   (used Pandoc + Prince)`, 'blue');
                    } catch (error4) {
                        // Option 5: Puppeteer (if available via npm)
                        try {
                            require.resolve('puppeteer');
                            // Cannot use await here, so run synchronously
                            // with a wrapper
                            const { spawnSync } = require('child_process');
                            const absTempHtml = path.resolve(tempHtml);
                            const absOutputPath = path.resolve(outputPath);
                            const nodeScript = `
                                const puppeteer = require('puppeteer');
                                const path = require('path');
                                (async () => {
                                    const browser = await puppeteer.launch();
                                    const page = await browser.newPage();
                                    await page.goto('file://' + path.resolve('${absTempHtml}'), { waitUntil: 'networkidle0' });
                                    await page.pdf({
                                        path: path.resolve('${absOutputPath}'),
                                        format: 'A4',
                                        landscape: false,
                                        printBackground: true,
                                        margin: { top: '0', right: '0', bottom: '0', left: '0' }
                                    });
                                    await browser.close();
                                })();
                            `;
                            const result = spawnSync('node', ['-e', nodeScript], {
                                cwd: __dirname,
                                stdio: 'pipe'
                            });
                            if (result.status === 0) {
                                success = true;
                                log(`   (used Puppeteer)`, 'blue');
                            } else {
                                const errorMsg = result.stderr.toString() || 'Puppeteer failed';
                                throw new Error(errorMsg);
                            }
                        } catch (error5) {
                            // Option 6: Try Pandoc without specifying engine
                            try {
                                // CSS is embedded in HTML, no need for --css
                                const simpleCmd = [
                                    'pandoc',
                                    `"${tempHtml}"`,
                                    '-o', `"${outputPath}"`,
                                    '--standalone'
                                ].join(' ');
                                execSync(simpleCmd, { stdio: 'pipe', cwd: OUTPUT_DIR });
                                success = true;
                                log(`   (used Pandoc with default engine)`, 'blue');
                            } catch (error6) {
                                throw new Error(`Unable to generate PDF. Install WeasyPrint: pip install weasyprint (or brew install weasyprint on macOS)`);
                            }
                        }
                    }
                }
            }
        }

        if (!success) {
            // If we get here, all attempts have failed
            throw new Error(`Unable to generate PDF. Install WeasyPrint: pip install weasyprint`);
        }

        // Delete temporary HTML file
        if (fs.existsSync(tempHtml)) {
            fs.unlinkSync(tempHtml);
        }

        log(`   ✅ ${outputFile} generated successfully`, 'green');
        return true;
    } catch (error) {
        log(`   ❌ Error: ${error.message}`, 'red');
        return false;
    }
}

function main() {
    log('🚀 Generating PDFs from markdown files\n', 'green');

    // Check dependencies
    if (!checkDependencies()) {
        process.exit(1);
    }

    // Create output directory
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
        log(`📁 Directory created: ${OUTPUT_DIR}\n`, 'yellow');
    }

    // Verify CSS template exists
    if (!fs.existsSync(CSS_TEMPLATE)) {
        log(`❌ CSS template not found: ${CSS_TEMPLATE}`, 'red');
        process.exit(1);
    }

    // Get command line arguments
    const args = process.argv.slice(2);
    let filesToProcess = [];
    let mode = 'normal';

    // Parse arguments to detect mode
    const modeIndex = args.findIndex(arg => arg === '--handout' || arg === '--mode=handout' || arg.startsWith('--mode='));
    if (modeIndex !== -1) {
        const modeArg = args[modeIndex];
        if (modeArg === '--handout' || modeArg === '--mode=handout') {
            mode = 'handout';
        } else if (modeArg.startsWith('--mode=')) {
            mode = modeArg.split('=')[1];
        }
        args.splice(modeIndex, 1); // Remove mode argument
    }

    if (args.length > 0) {
        // Process specified files
        filesToProcess = args.map(arg => {
            if (arg.endsWith('.md')) {
                return arg;
            } else {
                // Find matching file
                const markdownFiles = getMarkdownFiles();
                return markdownFiles.find(f => f.includes(arg));
            }
        }).filter(Boolean);
    } else {
        // Process all files
        filesToProcess = getMarkdownFiles();
    }

    if (filesToProcess.length === 0) {
        log('❌ No markdown files found', 'red');
        process.exit(1);
    }

    const modeLabel = mode === 'handout' ? ' (handout mode)' : '';
    log(`📚 ${filesToProcess.length} file(s) to process${modeLabel}\n`, 'blue');

    let successCount = 0;
    let failCount = 0;

    filesToProcess.forEach(file => {
        const outputFile = mode === 'handout'
            ? file.replace('.md', '-handout.pdf')
            : file.replace('.md', '.pdf');
        if (convertMarkdownToPDF(file, outputFile, mode)) {
            successCount++;
        } else {
            failCount++;
        }
    });

    log(`\n📊 Summary:`, 'green');
    log(`   ✅ ${successCount} PDF(s) generated`, 'green');
    if (failCount > 0) {
        log(`   ❌ ${failCount} error(s)`, 'red');
    }
    log(`\n📁 PDFs available in: ${OUTPUT_DIR}`, 'blue');
}

// Run the script
if (require.main === module) {
    main();
}

module.exports = { convertMarkdownToPDF, checkDependencies };

