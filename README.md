# Solzark Systems LLC — Website

**solzarksystems.com** · Static site · GitHub Pages / Netlify ready

---

## Folder Structure

```
solzark-systems/
├── index.html                  ← Main page (single-page, all sections)
├── css/
│   └── style.css               ← All styles (tokens, layout, animations, responsive)
├── js/
│   └── main.js                 ← Nav, hamburger, scroll animations, form submit
├── assets/
│   └── logos/                  ← Official SVG brand files
│       ├── primary-dark-bg-dark-mode.svg          ← Used inline in nav + footer
│       ├── primary-white-bg-invoices-w9-coi.svg   ← Invoices, contracts, W-9
│       ├── primary-purple-bg-email-presentations.svg
│       ├── icon-only-purple-bg-apps-digital.svg   ← Favicon
│       ├── icon-only-white-bg-favicon-profile.svg
│       ├── icon-only-gold-bg-stamp-badge.svg
│       ├── icon-only-monochrome-print.svg
│       ├── variation-gold-accent-marketing.svg
│       ├── variation-gold-bg-banners-branded.svg
│       ├── variation-monochrome-print-fax.svg
│       ├── email-signature-light-divider.svg      ← Recommended for email
│       ├── email-signature-light-stacked.svg
│       ├── email-signature-purple-divider.svg
│       └── email-signature-purple-stacked.svg
└── README.md
```

---

## Local Development in VS Code

### Prerequisites
- VS Code (any recent version)
- **Live Server** extension by Ritwick Dey
  - Install: `Ctrl+Shift+X` → search "Live Server" → Install
- Git (for publishing)

### Running locally
1. Open VS Code
2. `File → Open Folder` → select the `solzark-systems/` folder
3. Right-click `index.html` → **"Open with Live Server"**
   (or click **Go Live** in the bottom status bar)
4. Browser opens at `http://127.0.0.1:5500` with hot reload on save

Edit any file and the browser updates instantly. No build step, no terminal required.

---

## Publishing to GitHub Pages

### Step 1 — Create a GitHub repository
1. Go to github.com/new
2. Name it `solzark-systems-website`
3. Visibility: **Public**
4. Do NOT initialize with README
5. Click **Create repository**

### Step 2 — Push from VS Code terminal (`Ctrl+\``)
```bash
git init
git add .
git commit -m "Initial commit — Solzark Systems website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/solzark-systems-website.git
git push -u origin main
```

### Step 3 — Enable Pages
1. Repo → **Settings → Pages**
2. Source: `Deploy from a branch`
3. Branch: `main` · Folder: `/ (root)`
4. Save → site is live at `https://YOUR_USERNAME.github.io/solzark-systems-website/`

### Step 4 — Connect custom domain (solzarksystems.com)
In GitHub Pages settings under **Custom domain**, enter `solzarksystems.com` and enable **Enforce HTTPS**.

Add these DNS records at your registrar:

| Type  | Name | Value                   |
|-------|------|-------------------------|
| A     | @    | 185.199.108.153         |
| A     | @    | 185.199.109.153         |
| A     | @    | 185.199.110.153         |
| A     | @    | 185.199.111.153         |
| CNAME | www  | YOUR_USERNAME.github.io |

DNS propagates within 10–60 min. GitHub auto-issues SSL.

---

## Publishing to Netlify (Easier — recommended for custom domains)

1. app.netlify.com → **Add new site → Import existing project**
2. Connect GitHub → select your repo
3. Build command: *(blank)* · Publish directory: `.`
4. **Deploy site** → live in ~30 seconds

Custom domain: **Site settings → Domain management → Add custom domain** → follow Netlify's DNS instructions.

---

## Deploying Updates

```bash
git add .
git commit -m "Your update message"
git push
```

Both GitHub Pages and Netlify auto-deploy on push. Live within ~60 seconds.

---

## Formspree (Contact Form)

Endpoint: `https://formspree.io/f/xgornnzn`

- View submissions at formspree.io
- Free tier: 50 submissions/month
- Set up email notifications in your Formspree dashboard

---

## Before Launch Checklist

- [ ] Replace LinkedIn URL in the Contact section with your actual profile URL
  - Search `index.html` for `linkedin.com/in/saurabh-mankar`
- [ ] Verify Formspree form is receiving test submissions
- [ ] Optionally paste a GA4 `<script>` tag before `</head>` in `index.html`
- [ ] Confirm DNS is pointing to GitHub Pages or Netlify
- [ ] Test on mobile (Chrome DevTools → Toggle device toolbar)

---

## Design Token Reference

All CSS custom properties live in `css/style.css` under `:root {}`.
Change a value once and it updates everywhere.

| Token           | Hex       | Used for                              |
|-----------------|-----------|---------------------------------------|
| `--purple`      | `#461D7C` | LSU purple — borders, highlights      |
| `--gold`        | `#FDD023` | LSU gold — CTAs, labels, accents      |
| `--dark-purple` | `#2D1154` | Why section background                |
| `--bg`          | `#0f0f0f` | Primary near-black background         |
| `--purple-bg2`  | `#1a0d30` | About / Contact section backgrounds   |
| `--muted`       | `#888780` | Secondary / caption text              |
| `--light-purple`| `#9B7CC4` | Illustration accents                  |
