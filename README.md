# Varun Hirapara | Portfolio Website

A responsive, dark-themed, single-page portfolio website made with **HTML, CSS and JavaScript**. No build step, packages, subscription, or framework is needed.

## Preview locally

- Open `index.html` in your browser, or
- From the project folder run `python -m http.server 8000` and visit `http://localhost:8000`.

## Publish on Vercel (via GitHub)

1. Sign up at https://github.com and create a repository named `varun-portfolio`.
2. Upload **all files and folders in this project** to the repository root, including `index.html`, `styles.css`, `script.js`, and `assets/`.
3. Sign up or log in at https://vercel.com with GitHub.
4. Choose **Add New → Project**, import your repository, and choose **Deploy**. As it is a static site, leave the framework preset at **Other**, build command empty and output directory empty (the project root).
5. Vercel will display a URL like `https://varun-portfolio-xxxxx.vercel.app`. You can edit the project name or set a custom domain in Vercel settings, if available.

## How to personalize

- Main wording, sections, experience, contact email: edit `index.html`.
- Colors: edit CSS variables at the top of `styles.css` (especially `--accent` and `--bg`).
- Portrait: replace `assets/portrait.png`, keeping the same filename.
- German CV: replace `assets/Varun_Hirapara_CV_DE.pdf` with your newest German CV.
- LinkedIn: The PDF included the word LinkedIn but did not expose a verified profile URL. Add a link to `index.html` when you have the exact URL.
- English CV: Not included in the supplied upload. Add your English PDF to `assets/` and a separate download link if wanted.

## Privacy and accuracy

Your personal email and professional image are included because they appear in the CV supplied for this public portfolio. Review all content before publishing. The site does not include a phone number. There is no analytics or contact form backend.

## Files

- `index.html`: all portfolio content and layout
- `styles.css`: appearance and mobile layout
- `script.js`: mobile menu, reveal effects, copy-email behavior
- `assets/portrait.png`: portrait extracted from your CV
- `assets/Varun_Hirapara_CV_DE.pdf`: downloadable CV
- `assets/favicon.svg`: browser icon
