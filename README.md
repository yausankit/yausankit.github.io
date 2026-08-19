# Chenjie Qiu - Academic Homepage

Source for [yausankit.github.io](https://yausankit.github.io/), a single-page academic homepage built with Jekyll.

## Content

- `_pages/about.md`: homepage copy and sections
- `_publications/`: publication records rendered on the homepage
- `_data/navigation.yml`: in-page navigation
- `assets/images/`: homepage images
- `_sass/layout/_home_shell.scss`: homepage layout and visual styling

## Local Preview

With Docker installed:

```bash
docker compose up
```

The site is then available at [http://localhost:4000](http://localhost:4000).

## Deployment

GitHub Pages builds and publishes the site from this repository.

## Visitor analytics

The homepage is wired to the existing Jekyll analytics include. To collect
aggregate visitor information such as page views, approximate country/region,
referrer, device, and browser, create a Google Analytics 4 web data stream and
set its Measurement ID in `_config.yml`:

```yaml
analytics:
  provider: "google-analytics-4"
  google:
    tracking_id: "G-XXXXXXXXXX"
```

After the next GitHub Pages deployment, the GA4 reports will be available from
the Google Analytics dashboard. Leave the provider as `"false"` until a real
Measurement ID has been added.

The location is approximate and does not identify a person's exact address.
If most visitors are in mainland China, a China-accessible analytics service
may provide more complete data than Google Analytics; its script can be placed
in `_includes/analytics-providers/custom.html`.
