# Portfolio — Minimal React + Tailwind

A minimal, responsive portfolio built with **React**, **Vite**, and **Tailwind CSS**.

## Tech

- React
- Vite
- Tailwind CSS

## Features

- Responsive single-page layout
- Theme toggle (light/dark)
- Sections: Projects, Skills, Contact

## Maintenance

- Install dependencies: `npm install`
- Build: `npm run build`
- Preview production build: `npm run preview`

Publish to GitHub Pages (using the `gh-pages` package):

1. Install: `npm install --save-dev gh-pages`
2. Add scripts to `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Deploy: `npm run deploy`

Or deploy directly without adding scripts:

- `npx gh-pages -d dist`
