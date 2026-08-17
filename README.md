<div align="center">

<img src="assets/logos/icon-only-symbol.svg" width="72" alt="">

# Solzark Systems

**Partnering to build what's next.**

Marketing site for Solzark Systems LLC — a Houston-based IT consulting firm working in data
engineering, security architecture, test automation and systems integration.

[solzarksystems.com](https://solzarksystems.com) · [Capabilities](capabilities/) · [Engagements](engagements/) · [About](about/)

</div>

---

## What this is

A static, dependency-free site: hand-written HTML, one stylesheet, one script. No build step, no
framework, no package manager. Clone it, open `index.html`, and what you see is what ships.

Every visual decision comes from the Solzark design system — violet `#9500f0` and gold `#f8d000`
sampled from the brand mark, Instrument Sans for type, IBM Plex Mono for figures, flat surfaces with
hairline borders, and 8px rectangular buttons rather than pills.

## Structure

```
.
├── index.html              Home — hero, capabilities overview, engagement teasers, contact form
├── capabilities/           The six practices in detail
├── engagements/            Three engagement write-ups
├── about/                  The firm, the founder, what an engagement looks like
├── css/style.css           Design tokens + components + layout (single stylesheet)
├── js/main.js              Mobile nav, contact form submission
└── assets/logos/           Brand marks — full lockup, icon, favicon, print variants
```

Each page is a folder with an `index.html`, so URLs stay clean: `/capabilities/`, not
`/capabilities.html`. Links between pages are relative — `../about/` from a subpage, `about/` from
the root — which keeps the site working under a GitHub Pages project path.

## Running it locally

No tooling required. Either open the file directly:

```bash
open index.html
```

or serve the folder, which is closer to production and makes relative paths behave:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploying

GitHub Pages serves this repository as-is.

1. **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: `main`, folder: `/ (root)`

A push to `main` publishes within a minute or two. Pages runs no server-side code, which is why the
contact form posts to Formspree from the browser.

## Editing content

| To change | Edit |
| --- | --- |
| Copy on a page | That page's `index.html` — content is plain markup, no templating |
| Colors, type, spacing | The token block at the top of `css/style.css` |
| A component's look | Its class in `css/style.css` (`.btn`, `.card`, `.tag`, `.stat__num`) |
| Nav or footer links | The `.nav` and `.footer` blocks in each page's `index.html` |
| Contact form destination | The `action` on `#contactForm` in `index.html` |

The nav and footer are duplicated across the four pages. That is a deliberate trade: no build step
in exchange for updating four files when a link changes. If the site grows past six or seven pages,
that trade stops paying and a static site generator is the right next move.

## Writing for this site

The voice is a senior engineer, not a sales team. In practice:

- **People before systems.** Say who was affected, then what was built.
- **State the win, don't hedge it.** "We rebuilt it and hit the launch date anyway."
- **Name the tradeoff.** Every engagement write-up ends with the risk we stated up front. Don't
  smooth these out — they are the most distinctive thing on the site.
- **Specificity replaces adjectives.** `400+ automated tests`, `four business units`, `four months`.
- **Sentence case everywhere.** The only uppercase is the 11px eyebrow label and the wordmark.
- **Never:** synergy, seamless, robust, cutting-edge, best-in-class, turnkey, leverage as a verb.
  No emoji.

## Notes and known gaps

- Client names are withheld where the contract requires it; figures are the founder's own numbers.
- Fonts load from Google Fonts. No brand font is licensed yet.
- There is no `/insights` page yet. The design allows for one; nothing links to it until it exists.

---

<div align="center">
<sub>© 2026 Solzark Systems LLC · Houston, Texas</sub>
</div>
