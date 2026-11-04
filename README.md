# Naoise Irwin

Personal site for [nirwin.com](https://nirwin.com), built with Jekyll for GitHub Pages.

Selected writings lives in `_posts/` and is listed at `/writing/`. Projects are listed at `/projects/`. The two articles from the previous WordPress site keep their permalinks (`/2021/04/19/the-promise-of-parabolic-dish-csp-technology/` and `/2022/09/06/peace-through-solar-power/`). Posts from the Proto blog use the same dated URL shape and are labeled on that index.

## Local build

Uses the `github-pages` gem so the build matches GitHub Pages.

```bash
bundle install
bundle exec jekyll build
```

## Tesla Fleet API key

This repository still hosts the public key for [Tesla-GrokBot-Connector](https://github.com/naoiseirwin/Tesla-Grokbot-Connector). No private key is stored here.

- Public key: `/.well-known/appspecific/com.tesla.3p.public-key.pem`
- OAuth callback fallback: `/tesla/callback.html`

`.well-known/` is listed under `include` in `_config.yml` because Jekyll skips dot-directories otherwise. Do not add a `.nojekyll` file; GitHub Pages would then publish the source files without building the site.
