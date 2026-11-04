# Stuypulse.com

## About This Website

This iteration of StuyPulse.com launched on August 1st, 2023. It took the place of our old Jekyll-based website established in 2013, using Astro in its stead, as well as having a more modernized design. This site was developed from 2022-2023 by our at the time newly formed I/T Department, consisting of Gus Watkins, Ivy Lin, Kelvin Zhao, and Anthony Chen.

## Working on the site

You need Node 20 (see `.nvmrc`).

```bash
npm install
npm run dev       # local site at http://localhost:4321
npm run check     # type-check everything
npm run build     # build the static site into dist/
npm run format    # format code with Prettier
```

Every push to `main` builds and deploys the live site through `.github/workflows/deploy.yml`. Pull requests and other branches are type-checked and built by `.github/workflows/check.yml` first.

Most content changes don't need code at all. The editor at [stuypulse.com/admin](https://stuypulse.com/admin/) covers newsletters, robots, StuySplash and the team lists. See [docs/editing-the-website.md](docs/editing-the-website.md).

## How the code is organized

| Folder | What's in it |
| --- | --- |
| `src/pages` | One file per URL. Pages put together components and data; they hold little logic of their own. |
| `src/layouts/PageSite.astro` | The frame around every page: head tags, header, footer. |
| `src/components` | `page` (heroes, shared page pieces), `header`, `footer`, `home`, `news`, `robots`, `stuysplash`. |
| `src/content` | Markdown collections: `news`, `history` (one file per robot) and `stuysplash` (one file per year). Their schemas are in `src/content/config.ts`. |
| `src/data` | YAML lists the editor writes (leadership, mentors, sponsors and so on). Import them from `@data`; `src/data/index.ts` checks each file against a schema, so a bad edit fails the build with the file and field named. |
| `src/utils` | Shared helpers: loading and sorting collections, formatting dates and names. |
| `src/config.ts` | Site-wide settings that only developers change: contact email, address, navigation. |
| `src/styles/global.css` | Design tokens (colours, radii), a small reset and the shared button styles. |
| `public` | Images, PDFs and the editor (`public/admin`), served as they are. |

Imports use the `@` alias for `src`, for example `@components/page/Hero.astro`.

## Problems? Questions? Comments?

Interested in how our site is built? Our site is 100% open source; feel free to take a look at our source code to learn more about how we use Astro to create our website.

If you would like to contact our I/T department, send us an email and we'll get back to you as soon as we can. We're happy to help with any questions you may have!

## I/T Leadership

The current I/T directors are listed on [stuypulse.com/about/website](https://stuypulse.com/about/website).
