# Shaurya Dandriyal — Portfolio

Personal portfolio site. Next.js 15 + Tailwind CSS + Framer Motion + TypeScript.

## Local dev

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

1. Push this repo to GitHub (create an empty repo, then):
   ```bash
   git init && git add -A && git commit -m "init"
   git remote add origin git@github.com:shaurya9327/portfolio.git
   git branch -M main && git push -u origin main
   ```
2. Go to https://vercel.com → **Add New Project** → import the GitHub repo.
3. Framework preset auto-detects **Next.js**. Leave defaults and click **Deploy**.
4. You get `https://<project>.vercel.app` in ~60 seconds.

## Edit content

All copy lives in `lib/data.ts`. Update summary, skills, experience, projects there and the whole site updates.

## Swap the resume PDF

Replace `public/resume.pdf` with your latest. The Download button points to `/resume.pdf`.
