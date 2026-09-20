# Douae Annasri — Portfolio

React, Tailwind CSS, and Vite portfolio featuring studies, internships, projects, and skills.

Live site: https://douaean.github.io/portfolio/

## Edit and run

The editable source is in `app/`. The repository root contains the production build for GitHub Pages (main branch, root folder).

```sh
cd app
npm ci
npm run dev
```

Open the local URL printed by Vite, including `/portfolio/`.

Project URLs: `app/src/projects.js`.
Internship content: `app/src/internships.js`.
Resume: `app/public/resume.pdf`.

## Rebuild for publishing

Run `npm run build` inside `app/`, then copy the contents of `app/dist/` to the repository root, replacing the previous built index, assets, and resume. Commit and push to main. Keep the `app/` folder and `.nojekyll` file.

GitHub and demo controls show Coming soon until actual project URLs are supplied.
