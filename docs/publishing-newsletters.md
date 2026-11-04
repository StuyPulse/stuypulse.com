# Publishing newsletters

For the business team. You don't need GitHub or any code.

If you have a GitHub account with access to the repo, the editor at [stuypulse.com/admin](https://stuypulse.com/admin/) does this and more. See [editing-the-website.md](editing-the-website.md).

## Post a newsletter

1. Open the invite email and sign in at [app.pagescms.org](https://app.pagescms.org).
2. Open **stuypulse.com**, then **Newsletters & news**, then **Add an entry**.
3. Fill in the **Title** and **Date**, and upload the PDF under **Newsletter PDF**.
4. Click **Save**.

The newsletter appears on the [news page](https://stuypulse.com/news) after the site rebuilds, usually within a few minutes.

To fix a mistake, open the entry, change it and save again. Saving publishes straight to the live site, so check the title and date first.

Keep PDFs under 25 MB. Compress anything bigger before uploading.

## Set-up (one time, for I/T)

1. A StuyPulse GitHub organization owner signs in at [app.pagescms.org](https://app.pagescms.org) and installs the Pages CMS GitHub App on `StuyPulse/stuypulse.com` only.
2. Merge `.pages.yml` and the content rule changes into `main`.
3. In Pages CMS, invite each business team member by email as a collaborator. They can edit content and media but can't change the configuration.

To remove someone, delete them from the collaborators list in Pages CMS. To turn the whole thing off, uninstall the GitHub App; the site keeps working because everything lives in this repo.
