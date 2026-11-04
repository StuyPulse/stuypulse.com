# Website audit, November 2026

Every page on the `redesign/red-white` branch was screenshotted at desktop width, every link and image in the built site was checked, and every page, layout, component and data file was read.

## Worst problems

- **Embarrassing text that is live.**
  - The alumni page has a second heading, "sean says this site doesnt exist anymroe".
  - Projects and two tutorial pages are empty "TEST" / "[GUIDE IN PROGRESS]" pages.
  - `/donate/test` is a duplicate donate page.
- **Privacy.** `/kickoff` lists about 170 students' full names with room numbers, from the 2024 kickoff.
- **Nothing to update with.** Newsletters stop in February 2026. The StuySplash banner, homepage tile and StuySplash page are hard-coded, so every change needs a developer.
- **Social previews are broken on every page.** The default share image `/placeholder-social.jpg` does not exist.
- **Old pages look like a different site.** They are boxy grey cards with shadows (Leadership, Mentors, Board), small justified text, Bootstrap tables, square red buttons and sidebars of tiny links. On short pages the footer floats halfway up the screen.
- **Broken things.**
  - The Departments page has a missing icon image.
  - `/about/first/` has no page.
  - The Calendar page has no heading.
  - `/news` is a bare redirect with no title.
  - The news pager always shows 7 pages and links to page 0 and page N+1.
  - 2025 newsletters are Canva edit links that can't load inside the page.
  - Robot 2001's Flickr link never shows, and 2023's source code link points to the wrong robot.
  - There are 404 links in old posts and StuySplash 2012.

## Missing content (needs the team)

- Meeting days, times and room, and how to visit the lab.
- An alumni sign-up link.
- 2026–27 season info.
- FTC awards (the page still shows 2022–23).
- Whether donations are tax-deductible.
- Photos for 33 of 41 leadership members and 2 mentors.
- Bios for 5 mentors.
- Logos for 5 sponsors.
- StuySplash 2024 slide links.
- Text for robots 2023–2026.
- In `src/content/history/2026.md`, which has uncommitted edits so I left it alone:
  - "Mileston" should be "Milstein".
  - "Gotham Regional Regional" repeats a word.
  - "Weifen C" is cut short.

## Smaller things

- Duplicate page titles: every robot is "History", every StuySplash year is "StuySplash", every news page is "News".
- Placeholder descriptions: "???" and "TEST".
- The Givebutter script loads on every page, but only the dead test page used it.
- Unused components, data and a font file.
- Many links just say "here".
- Images without alt text.
- Heading levels are skipped.
- The calendar pop-up can't be closed with Escape or the keyboard.
- Typos across About, Community, Resources and Mentors.

# Second pass: look, code and tooling

Done after the first pass shipped on `redesign/red-white`.

## Fixed

- **Too much red.** The header and the first section of every page were solid red. Both are now white, with red reserved for headlines, buttons, the StuySplash banner and tile, and the footer.
- **Join page removed**, with every link to it and the "no cuts, no tryouts" copy. The home page shows the four departments instead.
- **Footer.** The two lists of links repeated the header. It now shows only the email address (large), the school address and the social links.
- **Bootstrap removed.** It shipped about 480 KB of CSS and JavaScript to every page, used only for the menu. The header is now a short, keyboard-friendly script: Escape closes a menu and returns focus. Page CSS went from 280 KB to 48 KB.
- **Images.** 28 images were over 500 KB, including a 3 MB sponsor logo on the home page. They are now resized to the size they're shown at, which cut 19 MB from the site.
- **Data had no checks.**
  - YAML was loaded with untyped `import()` calls and hand-written interfaces that had drifted from the files.
  - `declare module "*"` switched off type checking for every import.
  - Now `src/data/index.ts` checks each file against a schema. A bad edit fails the build with the file and field named.
- **Robot and StuySplash pages skipped the schemas.** They used a `layout:` key in each markdown file, which hands the page raw frontmatter. They now render from checked collection entries. The key is removed from 198 content files and from the editor config.
- **Duplicated code.** Helpers for initials, plurals, sorting robots and sorting newsletters were each written two to four times. They now live in `src/utils/`. The newer/older links are one shared component.
- **Type checking had never run.** `astro check` found a page referencing a variable that no longer existed. It now runs in CI.
- **No checks before merging.**
  - Added `.github/workflows/check.yml`, which type-checks and builds every pull request and branch.
  - Pinned Node 20 in `.nvmrc` and in the deploy workflow, which was using the action's default.
- **Formatting.** Quote style and indentation were mixed. Added a Prettier config and `npm run format`, and formatted `src/`.
- **Smaller fixes.**
  - Added a skip-to-content link.
  - The header marks the current page.
  - The unused `astro-imagetools` package and its config are removed.
  - The navigation moved from YAML into `src/config.ts`, since only developers change it.
  - The `components/redesign` folder is split into `page`, `home`, `robots` and `stuysplash`.

## Still worth doing

- **Upgrade to Astro 5.** It's a separate change; content collections move to the new content layer.
- **Serve photos through Astro's `<Image>`** from `src/assets`, so phones get smaller WebP files. Resizing fixed the worst cases, but every photo is still one size for all screens.
- **Run `npm audit`.** It reports advisories in dependencies, and some fixes need major version bumps.
- **Set up "Sign In with GitHub"** for the editor (see `docs/editing-the-website.md`).
- **Team content.** The missing content list from the first pass still applies.

# Third pass: colour, awards and screen sizes

- **Pages felt empty and white.**
  - Inner page headers are now a red block with white text. Buttons and links inside switch to white through the shared `.on-red` style.
  - The home page and robots index keep a soft blush top, so the home page isn't all red.
  - Long pages (Leadership, Resources, Departments, StuySplash, FTC, Community) alternate tinted sections.
- **Awards get icons.**
  - `src/components/awards` picks an icon from each award's wording: a trophy for wins, a medal for finalists and placings, a star for personal honors such as Woodie Flowers and Dean's List, and a ribbon for everything else.
  - They're used on robot pages, the robots index, FTC awards, the mentors' Woodie Flowers links and the About page.
  - The home page shows totals counted from the robot files.
- **Wide screens.** Content stopped at 1120 px and sat on the left. Everything now centres within 1240 px, with the header, page heads and footer lined up.
- **Navigation bar.** Between 1000 and 1200 px the links wrapped under the logo. The bar now stays on one line and switches to the Menu button below 1200 px.
- **Calendar.** It cut event names off and only chose month or list view at load. Names now wrap, it fills the width, and it switches to the list when the window narrows.
- **Checked** 28 pages at 320, 375, 414, 768, 1024, 1280, 1440, 1920 and 2560 px with no sideways scrolling or cut-off content. That range covers browser zoom up to 400% on a laptop.

## Fourth pass: polish and motion

- Rounded blocks share `--inset` / `--block-pad`, so their text lines up with the page; tinted bands keep their padding.
- Motion: heartbeat lines trace in on load (shared `Beat`), hero stickers slap on, the home stats count up and the home chart draws itself with photo bubbles popping in, robot cards tilt on hover, the decade filter animates, the phone menu drops open, the calendar dialog scales in, sponsor medals wobble, Donate has a copy button. Everything has a reduced-motion fallback.
- Pages filled out: mentors and board cards, alumni actions, website "who runs it", kickoff explainer, FLL history, charter with a sticky contents box, news years on alternating blush bands with jump chips, condensed pagination on phones.
- Fixes: lone previous/next cards span the full width, robot pages without a write-up no longer leave a gap, StuySplash slide buttons line up, Zelle address no longer breaks mid-word, "Febuary" typo.
- Left for content owners: two September posts are titled "May Newsletter" (2022-09-19, 2024-09-12).

## Fifth pass: fuller pages, research, live-site parity

Research: team254.com, simbotics.org, littletonrobotics.org, hackclub.com, charitywater.org and others. Reviewed every page as a prospective member, parent, sponsor, other team, alum and phone user.

- Site-wide: sticky header that slims on scroll (`--header-h` for sticky bars and anchors), footer "Next up" chip and every section linked, PageHead `aside` slot so red heads aren't half empty, shared `people/` faces (collage, stack), `utils/people.ts`, `utils/seasons.ts`, one global `.visually-hidden`.
- Home: "This season" band, phone heartbeat scrolls sideways, department cards with lead faces, latest YouTube video (back from the live site).
- Robots: shuffle spotlight, decade headers, win badges, "Where it started" card; robot pages group awards by event, "That season" newsletter rail, sticky links column, arrow-key navigation.
- About: face collages, compact leadership cards that expand, mentor bios with Read more and honor badges, board photos, departments with real-data columns, FTC summaries, milestones line, website counters, community pinned places, alumni hall of honors.
- News: covers for the hosted PDFs, cover wall, stories split to /news/stories, archive posts linked to their season's robot; old /news/1–16 URLs still resolve.
- Resources: joining checklist (saved in the browser), StuySplash countdown and talks chart, talk clamps and topic chips, charter contents sheet on phones, robot-code and website repo links, 2012 StuySplash downloads pointed at old.stuypulse.com.
- Calendar next-up card and event colours; sponsors ladder; donate "other ways to help"; kickoff day outline (from the 2024 kickoff page), robots strip and past kickoffs.

Data for the team to check: 2023.md's awards are a copy of 2022.md's; 2026.md "Gotham Regional Regional Finalists" and "Mileston Division"; 2018 write-up mentions a Chairman's Award the award list lacks; board.yml "Joseph Blay" vs mentors.yml "Joe Blay"; stuysplash.yml "25 talks" vs 18 in 2025.md; "May Newsletter" posts dated in September; several leaders without photos while public/ecac has unused headshots.
