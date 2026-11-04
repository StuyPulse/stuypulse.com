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
