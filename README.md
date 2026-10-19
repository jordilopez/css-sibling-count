# css-sibling-count

Demo for the **CSS `sibling-count()` and `sibling-index()`** tree-counting
functions (CSS Values and Units Module Level 5) — **Baseline 2026**, shipping
in **Chrome and Edge 138+, Firefox 154+ and Safari 26.2+** (see
[caniuse](https://caniuse.com/wf-sibling-count)).

`sibling-index()` returns an element's 1-based position among its siblings;
`sibling-count()` returns the total number of siblings. Both return an
`<integer>`, so they slot straight into `calc()` — letting a single rule
respond to how many siblings exist and where the current element sits, with no
`nth-child()` chains, no per-item classes and no JavaScript.

The page feature-detects support and shows a disclaimer in browsers that
predate Baseline 2026, which render the plain fallback rosters instead.

## Examples

A single pair of rosters — **5 siblings** and **8 siblings** — is reused across
all six examples, so the same rule can be seen adapting to a different count.
Pick an example from the pill selector and both rosters, the description and
the CSS snippet update together. The switching is pure CSS (native radios +
`:has()`), no JavaScript:

1. `equal width` — `calc((100% - gaps) / sibling-count())` splits the row
2. `stagger` — `animation-delay` derived from `sibling-index()`
3. `hue ramp` — `hsl(360deg / sibling-count() * sibling-index())`
4. `grow` — `flex-grow: sibling-index()`
5. `pyramid` — `min(sibling-index(), sibling-count() - sibling-index() + 1)`
6. `deck` — negative margin + `z-index: sibling-index()`

Each example drives a different value axis on the shared `.item` elements, and
the difference between the five- and eight-item rosters shows
`sibling-count()` responding to the group size.

## Usage

```sh
npm install
npm run dev       # dev server
npm run build     # static build into dist/
npm run preview   # preview the built site
npm test          # vitest unit tests (feature detection, example config)
```

## Deployment

The site deploys to GitHub Pages automatically from the `main` branch via
`.github/workflows/deploy.yml`. The workflow runs `npm ci`, `npm test`, and
`npm run build`, then publishes `dist/`. `main` is branch-protected: every
change lands through a pull request and the `build` check must pass before
merge. There are no per-PR preview deployments — merging to `main` publishes
production at https://jordilopez.github.io/css-sibling-count/.

## Development

Styling builds on [css-starter](https://github.com/jordilopez/css-starter)
v0.4.0, using its `.picker` and `.callout` components. The dependency is
pinned to the public release tarball
(`https://github.com/jordilopez/css-starter/archive/refs/tags/v0.4.0.tar.gz`)
so the project installs in CI and for any contributor. Demo styles in
`src/styles/demo.css` are unlayered and override the `css-starter.*`
cascade layers by design.

## References

- [caniuse: sibling-count() and sibling-index()](https://caniuse.com/wf-sibling-count)
- [MDN: `sibling-count()`](https://developer.mozilla.org/en-US/docs/Web/CSS/sibling-count)
- [MDN: `sibling-index()`](https://developer.mozilla.org/en-US/docs/Web/CSS/sibling-index)
- [CSS Values and Units Module Level 5 — W3C](https://drafts.csswg.org/css-values-5/#tree-counting)
