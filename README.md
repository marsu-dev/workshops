# Workshops - Reveal.js Presentations

This repository contains several presentations created with Reveal.js and hosted on GitHub Pages.

## 🚀 Project Structure

```
.
├── index.html              # Homepage listing all presentations
├── presentation.html       # Template for displaying presentations
├── presentations/          # Folder containing markdown files
│   └── example.md         # Example presentation
└── .github/
    └── workflows/
        └── deploy.yml     # GitHub Actions workflow for deploying to Pages
```

## 📝 Adding a New Presentation

1. Create a new markdown file in the `presentations/` folder:
   ```bash
   presentations/my-presentation.md
   ```

2. Add the presentation to `index.html`:
   ```javascript
   const presentations = [
       {
           id: 'my-presentation',
           title: 'My Presentation',
           description: 'Description of my presentation',
           file: 'presentations/my-presentation.md'
       }
   ];
   ```

3. Use `---` or `***` to separate slides in your markdown file:
   ```markdown
   # First slide
   
   Content of the first slide
   
   ---
   
   # Second slide
   
   Content of the second slide
   ```

## 🏃 Local Development

### Installation

```bash
npm install
```

### Start a local server with hot reload

```bash
npm start
```

The site will be accessible at `http://localhost:8080` and will automatically reload when you modify files (HTML, CSS, Markdown, etc.).

## 📦 Deployment to GitHub Pages

### Method 1: GitHub Actions (Recommended)

The GitHub Actions workflow is configured in `.github/workflows/deploy.yml`.

1. Enable GitHub Pages in the repository settings:
   - Go to Settings > Pages
   - Source: GitHub Actions

2. Push your changes to the `main` or `master` branch:
   ```bash
   git add .
   git commit -m "Add my presentation"
   git push origin main
   ```

3. The workflow will automatically trigger and deploy the site.

### Method 2: gh-pages (Alternative)

```bash
npm run deploy
```

## 🎨 Customization

### Reveal.js Theme

You can change the theme in `presentation.html`:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.0.4/dist/theme/white.css" id="theme">
```

Available themes: `black`, `white`, `league`, `beige`, `sky`, `night`, `serif`, `simple`, `solarized`, `blood`, `moon`

### Custom Styles

Modify the `<style>` section in `presentation.html` to customize the appearance.

## 📚 Reveal.js Documentation

- [Official Documentation](https://revealjs.com/)
- [Markdown Syntax](https://revealjs.com/markdown/)
- [Examples](https://revealjs.com/examples/)

## 📄 License

This project is licensed under the GNU Affero General Public License v3.0 (AGPL-3.0).

See the [LICENSE](LICENSE) file for details, or visit [https://www.gnu.org/licenses/agpl-3.0.html](https://www.gnu.org/licenses/agpl-3.0.html).
