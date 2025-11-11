# PDF Generation from Markdown Files

This guide explains how to generate PDFs from presentation markdown files, without using reveal.js, but with an equivalent layout.

## Prerequisites

### Installing Pandoc

**macOS:**
```bash
brew install pandoc
```

**Ubuntu/Debian:**
```bash
sudo apt-get install pandoc
```

**Windows:**
Download from [pandoc.org/installing.html](https://pandoc.org/installing.html)

### Installing a PDF Engine (required)

The script will automatically try several engines in this order:

#### Option 1: WeasyPrint (Recommended - free and maintained)

**macOS:**
```bash
# Via pip (recommended)
pip3 install weasyprint

# Or via Homebrew
brew install weasyprint
```

**Ubuntu/Debian:**
```bash
sudo apt-get install weasyprint
# or
pip3 install weasyprint
```

**Windows:**
```bash
pip install weasyprint
```

#### Option 2: Puppeteer (via npm)

If you prefer to use a headless browser:

```bash
npm install puppeteer
```

#### Option 3: Prince XML (paid, but excellent rendering)

Download from [princexml.com](https://www.princexml.com/)

**Note:** `wkhtmltopdf` has been discontinued and is no longer recommended.

## Usage

### Normal Mode (3 slides per page)

#### Generate all PDFs in normal mode

```bash
npm run generate-pdf
```

or directly:

```bash
node generate-pdf.js
```

#### Generate a specific PDF in normal mode

```bash
npm run generate-pdf 01-sparrow.fr.md
```

or directly:

```bash
node generate-pdf.js 01-sparrow.fr.md
```

or with a pattern:

```bash
node generate-pdf.js sparrow
```

#### Generate multiple PDFs in normal mode

```bash
node generate-pdf.js 01-sparrow.fr.md 02-multisig.fr.md
```

### Handout Mode (6 slides per page, 3 rows × 2 columns, with space for notes)

#### Generate all PDFs in handout mode

```bash
npm run generate-pdf:handout
```

or directly:

```bash
node generate-pdf.js --handout
```

#### Generate a specific PDF in handout mode

```bash
npm run generate-pdf:handout 01-sparrow.fr.md
```

or directly:

```bash
node generate-pdf.js --handout 01-sparrow.fr.md
```

or with a pattern:

```bash
node generate-pdf.js --handout sparrow
```

#### Generate multiple PDFs in handout mode

```bash
node generate-pdf.js --handout 01-sparrow.fr.md 02-multisig.fr.md
```

## Result

PDFs are generated in the `pdf/` directory at the project root.

### Normal Mode

PDFs in normal mode:
- Contain **3 slides per page** in portrait mode
- Use the same style as reveal.js (dark background, Bitcoin colors)
- A4 portrait format
- Include presentation title in header (once per page)
- Include Creative Commons watermark in footer (once per page)
- Filename: `filename.pdf`

### Handout Mode

PDFs in handout mode:
- Contain **6 slides per page** in portrait mode (3 rows × 2 columns layout)
- Optimized for printing (white background, black text, no background image)
- A4 portrait format
- Each slide has space for taking notes (30% of slide height)
- Include presentation title in header (once per page)
- Include Creative Commons watermark in footer (once per page)
- Filename: `filename-handout.pdf`

## Customization

### Modify the Style

Edit the `pdf-template.css` file to customize:
- Colors
- Fonts
- Layout
- Margins

### Modify the Script

The `generate-pdf.js` script can be modified to:
- Change output format
- Add metadata
- Customize rendering

## Troubleshooting

### Error: "Pandoc not found"

Install Pandoc (see Prerequisites section).

### Error: "No PDF engine found"

Install a PDF engine (WeasyPrint recommended):

```bash
# macOS/Linux
pip3 install weasyprint

# or via Homebrew (macOS)
brew install weasyprint
```

### PDFs don't display correctly

1. Check that the CSS is properly copied to the `pdf/` directory
2. Try another PDF engine
3. Check logs to see which engine is being used

### Slides are not separated

Make sure slides in markdown are properly separated by `---` or `***` on separate lines.

## Technical Notes

- The script first converts markdown to HTML with custom styling
- Each slide becomes a `<div class="slide">` with `page-break-after: always`
- Pandoc then converts HTML to PDF
- CSS uses `@page` to define format (A4 portrait)

## Alternative: Direct Pandoc Usage

If you prefer to use Pandoc directly without the script:

```bash
pandoc presentations/01-sparrow.fr.md -o pdf/01-sparrow.fr.pdf \
  --pdf-engine=weasyprint \
  --css=pdf-template.css \
  --standalone
```

**Note:** This command uses WeasyPrint. Portrait format is defined in CSS (`@page { size: A4 portrait; }`).

However, this method does not automatically separate slides. The Node.js script handles this separation automatically.
