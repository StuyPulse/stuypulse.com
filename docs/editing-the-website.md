# Editing the website

Go to [stuypulse.com/admin](https://stuypulse.com/admin/) to change the site without touching code. Every save goes live a few minutes later, once GitHub rebuilds the site.

## What you can change

| In the editor | Where it shows up |
| --- | --- |
| **Newsletters & news** | `/news` and the "What we've been up to" tile on the home page |
| **Robots** | `/about/history`, each robot's page and the heartbeat on the home page |
| **StuySplash talks** | `/resources/stuysplash` and each year's page |
| **Site settings → This year's StuySplash** | The banner and red tile on the home page and the top of the StuySplash page. Turn both switches off once StuySplash is over. |
| **Site settings → Leadership** | `/about/leadership` (one item per role) and the I/T names on `/about/website` |
| **Site settings → Mentors, Board, Sponsors, Sponsor levels, FTC awards, Social links** | Their pages, and the footer for social links |

## Signing in

You need write access to the `StuyPulse/stuypulse.com` repository on GitHub. Ask an I/T director or a StuyPulse GitHub owner to add you.

1. Open [stuypulse.com/admin](https://stuypulse.com/admin/) and click **Sign In Using Access Token**.
2. Follow the link in the dialog to GitHub. It opens the token page with the right permissions already ticked: Contents read and write on `StuyPulse/stuypulse.com`.
3. Make the token, copy it, and paste it into the dialog.

The token stays in that browser. Treat it like a password: don't share it, and delete it on GitHub if you lose the computer.

## Posting a newsletter

1. **Newsletters & news → New.**
2. Fill in the **Title** and **Date**.
3. Upload the PDF under **Newsletter PDF**. A Canva share link works too, but a PDF shows right on the page.
4. Click **Save**.

## Good to know

- Saving publishes to the live site, so check titles and dates first. To fix a mistake, open the entry, change it and save again.
- Keep PDFs under 25 MB. Leadership photos go best as square JPGs.
- Saving a settings file rewrites it, which removes the `#` comments at the top. That's fine.

## Set-up (one time, for I/T)

- **Nothing else is needed for token sign-in.**
- **To add a "Sign In with GitHub" button**, so people don't need tokens:
  1. Deploy [Sveltia CMS Authenticator](https://github.com/sveltia/sveltia-cms-auth) to Cloudflare Workers, with a GitHub OAuth app owned by the StuyPulse organization.
  2. In `public/admin/config.yml`, set `base_url` to the worker's URL and change `auth_methods` to `[oauth, token]`.
- **Pages CMS** (`.pages.yml`, set up in [publishing-newsletters.md](publishing-newsletters.md)) still works for people without a GitHub account, but it only covers newsletters.
- **The editor version is pinned** in `public/admin/index.html`. Bump it now and then from [the releases page](https://github.com/sveltia/sveltia-cms/releases).
