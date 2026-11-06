# Muath Al-Sulami — Personal Portfolio

A bilingual (English / Arabic), responsive portfolio site built with **HTML, CSS, and vanilla JavaScript**. The design showcases verified education, cooperative training, and personal / academic projects.

## Features

- Original dark-green visual identity and lightweight SVG/CSS illustrations
- Responsive desktop and mobile layout
- English / Arabic language switch with RTL layout (saved locally in the browser)
- Project filtering and accessible project-note dialogs
- Sticky navigation, scroll progress, and restrained reveal animations
- Keyboard navigation, semantic HTML, accessible focus states, and `prefers-reduced-motion` support
- No JavaScript frameworks or build step

## Preview locally

1. Download or clone this repository.
2. Open `index.html` in a modern browser.
3. Click **عربي** to try Arabic, use **All work / Development / Systems** to filter, and open a project note.

No npm, server, API keys, or account is needed. Google Fonts are optional; system fonts are used offline.

## Personalize **before publishing**

Open **`script.js`** and edit the `PROFILE` object at the very top:

```js
const PROFILE = {
  email: 'your@email.com',
  github: 'https://github.com/YOUR_USERNAME',
  linkedin: 'https://www.linkedin.com/in/YOUR_HANDLE/',
  cv: '' // optional link to a public PDF you control
};
```

Blank fields stay hidden, so the site never sends people to invented accounts. Review all factual information and change anything that doesn't reflect your experience before publishing. The graph illustration on the monitoring card is **not real operational data** and is labeled accordingly.

## Files

- `index.html` — content and semantic layout
- `style.css` — visual design, animation, and responsive layout
- `script.js` — bilingual content, UI behavior, and editable contact links
- `README.md` — setup, use, and Git workflow

## Git / GitHub assignment workflow

The assignment requires a repository, meaningful commits, a feature branch, a pull request, and a merge to `main`. **Do not simply upload a zip and count that as the workflow.** You can demonstrate the history with the following educational sequence:

1. Create a repository locally and make an initial commit using just `index.html` and `README.md`.
2. Create a feature branch, e.g. `feature/portfolio-design`.
3. Add `style.css` and commit as `Add responsive portfolio styling`.
4. Add `script.js`, test interactive features, and commit as `Add bilingual portfolio interactions`.
5. Publish `main` and the feature branch to a GitHub repository.
6. Open a pull request from the feature branch into `main`, review it, and merge.
7. Pull the updated `main` to your local computer.

Example commands (once you're inside the project folder):

```bash
git init
git branch -M main
git add index.html README.md
git commit -m "Create portfolio structure and documentation"
git switch -c feature/portfolio-design
git add style.css
git commit -m "Add responsive portfolio styling"
git add script.js
git commit -m "Add bilingual portfolio interactions"
```

To publish, first create an **empty** GitHub repository with no auto-generated README, then run (replace `YOUR_USERNAME`):

```bash
git switch main
git remote add origin https://github.com/YOUR_USERNAME/muath-portfolio.git
git push -u origin main
git switch feature/portfolio-design
git push -u origin feature/portfolio-design
```

Open the GitHub repository and select **Compare & pull request** → **Create pull request** → **Merge pull request**. Then locally:

```bash
git switch main
git pull origin main
```

## Publish on GitHub Pages (optional)

Repository → **Settings** → **Pages** → **Build and deployment** → **Deploy from a branch** → choose `main` and `/(root)` → **Save**. The site is static and needs no build step.

## Content accuracy

- Numoo is a team capstone; the site does **not** claim personal model training.
- NCM work is described as cooperative training, **not** permanent employment.
- Infrastructure graph is illustrative; no confidential infrastructure data is present.
- Contact links intentionally start empty.

## License

All rights reserved unless an explicit license is added by the repository owner.

## Development Workflow

This project uses Git and GitHub for version control.

- Main branch: stable version
- Feature branches: new improvements
- Pull Requests: review changes before merging