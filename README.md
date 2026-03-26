# The Pinnacle — Site Documentation

> **Live site:** https://thepinnacle.ink  
> **Repo:** https://github.com/frittscausby-lab/the-pinnacle  
> **Author:** Fritts Causby — frittscausby@gmail.com  
> **Hosting:** Netlify (auto-deploys on every push to main)

---

## Quick Start: Adding a New Article

1. Copy `articles/article-template.html` and rename it (e.g. `articles/my-new-story.html`)
2. Follow the numbered STEP comments inside the file to fill in your content
3. Add your hero image to the `images/` folder
4. Add a card for the new article on `index.html` (copy an existing `.article-card` block)
5. Commit — Netlify auto-deploys within ~60 seconds

---

## Repo Structure

```
the-pinnacle/
├── articles/
│   ├── article-template.html   ← blank starter for new articles
│   ├── about.html
│   ├── bottle-shock.html
│   ├── beyond-the-charts.html
│   ├── female-power-players.html
│   ├── lady-leslie-estate.html
│   ├── lady-leslie-profile.html
│   ├── lautner-house.html
│   ├── love-is-bald.html
│   ├── netflix-story.html
│   ├── ray-kappe-house.html
│   ├── resources.html
│   ├── stocks-vs-real-estate.html
│   └── xpo-logistics.html
├── images/
│   ├── love-is-bald.jpg
│   ├── love-is-bald-card.jpg
│   └── (add new images here)
├── index.html          ← homepage
├── style.css           ← all site styles
├── privacy-policy.html
├── CNAME               ← custom domain for Netlify (thepinnacle.ink)
├── netlify.toml        ← Netlify config
└── README.md           ← this file
```

---

## Key URLs & Links

| Thing | URL |
|-------|-----|
| Live site | https://thepinnacle.ink |
| Newsletter (Beehiiv) | https://thepinnacle.beehiiv.com |
| Subscribe page | https://thepinnacle.beehiiv.com/subscribe |
| Archive | https://thepinnacle.beehiiv.com/archive |
| Sponsor form | https://forms.gle/4AiN325FRpePnu2q7 |
| Contact email | frittscausby@gmail.com |
| Personal site | https://www.frittscausby.com |
| Buy Me a Coffee | https://buymeacoffee.com/frittscaus3 |

---

## Design System (style.css)

### Color Variables
```css
--black:      #0a0a0a
--gold:       #c9a84c   /* primary accent — headings, links, buttons */
--cream:      #faf8f3   /* page background */
--text:       #1c1c1c   /* body text */
--text-light: #888      /* captions, secondary text */
--border:     #e8e4dc
```

### Article Category Tags (article-tag)
Use one of these in the `<div class="article-tag">`:
- Legacy Assets
- Stock Market
- Aspirational Lifestyle
- Charity Spotlight
- Lessons Learned
- Real Estate

### Article Page Layout
- Max content width: **900px**, centered
- Sidebar: hidden on all article pages (display: none via CSS)
- Hero image: `class="hero-image"`, max-height 520px
- Body images: max-height 560px, object-fit: cover
- Related card images: aspect-ratio 3/2, object-fit: cover

---

## CTA Band (mid-article subscribe prompt)
Always use this exact structure — do not simplify or it breaks the white text styling:

```html
<div class="cta-band">
  <div class="cta-band-text">
    <h4>Enjoying this story?</h4>
    <p>Get exclusive features, market insights, and luxury real estate profiles — <strong>free in your inbox.</strong></p>
  </div>
  <a href="https://thepinnacle.beehiiv.com/subscribe" target="_blank" rel="noopener" class="btn-primary">Subscribe Free &rarr;</a>
</div>
```

---

## GitHub Editing Rules (IMPORTANT)

When editing files via the GitHub web editor with an AI assistant:

### Commit Dialog — Critical Rule
Always find the commit message input using:
```javascript
document.querySelector('[role="dialog"]').querySelector('input[type="text"]')
```
**Never use** `inputs[inputs.length-1]` — that selects the filename input and corrupts the filename.

### CodeMirror Injection Pattern
```javascript
const view = document.querySelector('.cm-content').cmTile.view;
const tr = view.state.update({ changes: { from: 0, to: view.state.doc.length, insert: newContent } });
view.dispatch(tr);
```

---

## Launching a Second Site from This Repo

1. **Fork this repo** into a new repo (e.g. `frittscausby-lab/site-two`)
2. **Connect to your hosting** (GitHub Pages, Cloudflare Pages, Vercel, etc.) — not Netlify
3. **Update CNAME** (or remove it if using GitHub Pages default domain)
4. **Find & replace** all instances of:
   - `thepinnacle.ink` → your new domain
   - `The Pinnacle` → your new site name
   - `Fritts Causby` → your name (if different)
   - `frittscausby@gmail.com` → your contact email
   - The Beehiiv newsletter URLs → your new newsletter URLs
   - The Sponsor form URL → your sponsor form
5. **Update `style.css`** `:root` color variables if you want a different color scheme
6. **Delete or replace** all existing article HTML files with your own content
7. Deploy and go

---

## Affiliate Links (resources.html + article sidebars)

| Tool | Link | Benefit shown |
|------|------|---------------|
| Interactive Brokers | https://ibkr.com/referral/fritts293 | Up to $1,000 stock bonus |
| TipRanks | https://www.tipranks.com | Free plan |
| Wealthfront | https://www.wealthfront.com/c/affiliates/invited/AFFD-A0HR-9S7A-IKDZ | +0.75% APY cash boost |

All affiliate links use `target="_blank" rel="sponsored noopener"`.

---

## Maintenance Notes

- **Footer "Read" links** — manually maintained in each article file's footer block
- **Homepage article cards** — manually added to `index.html` in the `.article-grid` section
- **Images** — store in `/images/` for local files; Beehiiv CDN URLs also work but can break
- **Netlify deploys** — check deploy status at netlify.com dashboard; usually live within 60 seconds of a commit
- **CDN caching** — if changes don't appear, hard refresh (Ctrl+Shift+R) or wait ~5 minutes for CDN propagation
