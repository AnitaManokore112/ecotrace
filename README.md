# EcoTrace

Live website: [EcoTrace](https://anitamanokore112.github.io/ecotrace/)

A responsive, ocean-inspired landing website for an early-stage environmental accountability solution with a working prototype. Built with React, TypeScript, Vite, and Tailwind CSS 4. No backend, account, API keys, paid services, or custom domain required. All assets are local or inline; there are no remote fonts or media dependencies.

## Run locally

Use Node.js 22 or newer and npm.

```sh
npm ci
npm run dev
```

Open the Local URL printed by Vite. To type-check and build, run `npm run build`. To inspect the production build locally, run `npm run preview` after building.

## Free deployment to GitHub Pages

1. Create a **public** GitHub repository (for example, `ecotrace`). Public repositories support free GitHub Pages hosting.
2. Upload **the contents of this ecotrace folder to the repository root**, including `.github/workflows/deploy.yml`, `package-lock.json`, and the other dotfiles. Do not nest the project under another folder.
3. Use `main` as the default branch. If you use another branch, update `branches: [main]` in the workflow.
4. Open the repository’s **Settings → Pages → Build and deployment → Source**, and select **GitHub Actions**.
5. Push to `main`, or run **Actions → Deploy to GitHub Pages → Run workflow**. The workflow installs locked dependencies, checks TypeScript, builds the static site, and deploys `dist`.
6. After the workflow completes, open the URL shown in the `github-pages` environment or Settings → Pages: `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`.

### Correct Vite base path

`vite.config.ts` reads GitHub’s built-in `GITHUB_REPOSITORY` environment variable. A repository named `ecotrace` automatically builds with `/ecotrace/`; a user/organization repository named `YOUR-USERNAME.github.io` builds with `/`. Repository renaming is handled automatically on the next workflow run. Local development defaults to `/`.

To reproduce a project-path build locally:

```powershell
$env:GITHUB_REPOSITORY = 'YOUR-USERNAME/ecotrace'
npm run build
npm run preview
# Open http://127.0.0.1:4173/ecotrace/
Remove-Item Env:GITHUB_REPOSITORY
```

The website uses anchor navigation, so no server rewrite rules or SPA route fallback are needed. If assets fail to load, confirm that the workflow built the site and that the URL includes the repository path. If deployment is denied, confirm Pages uses GitHub Actions and repository Actions policies allow the included official actions.

## Content and customization

- Page content and interactive illustrative workspace: `src/main.tsx`.
- Visual styling and responsive layouts: `src/styles.css`; Tailwind is enabled through the Vite plugin and CSS import.
- Metadata: `index.html`; icon: `public/favicon.svg`.
- The evidence, incident, and company views are explicitly illustrative. They do not display real investigations or persist data. No customers, partnerships, endorsements, or environmental impact statistics are claimed.
- The video section is an honest “Coming soon” placeholder, not a playable video. When a real demo is ready, place an MP4 in `public/` and replace the placeholder with an accessible `<video controls>` element. Use `import.meta.env.BASE_URL + 'demo.mp4'` for its source, and add captions and a transcript.
- The footer links to the LinkedIn profile supplied by Anita S. Manokore.

Hosted on GitHub Pages with automatic deployment from main. No MIT Solve affiliation or endorsement is implied.

