# Massive Scar Era — website

Static site for Massive Scar Era. No build step: plain HTML, CSS and a little JavaScript.

## Pages
| File | Page |
|---|---|
| `index.html` | Home: hero, About, contact form |
| `assyad.html` | Assyad EP: story, songs, credits |
| `lyrics.html` | Assyad lyrics (one section per song, ready to fill in) |
| `metal-goes-egyptian.html` | Metal Goes Egyptian: video playlist, gallery, credits |

Images are in `images/`. The Toraja font goes in `fonts/` (see `fonts/README.txt`).

## Publish on GitHub Pages
1. Create a repository and upload everything in this folder (keep the folder structure).
2. Repository **Settings → Pages** → Source: *Deploy from a branch* → branch `main`, folder `/ (root)` → Save.
3. After a minute the site is live at `https://<your-username>.github.io/<repo-name>/`.

### Custom domain (massivescarera.com)
In **Settings → Pages → Custom domain**, enter `massivescarera.com` (GitHub creates a `CNAME` file).
Then at your domain registrar, point the domain to GitHub Pages:
- `A` records for `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- `CNAME` record for `www`: `<your-username>.github.io`

Turn on **Enforce HTTPS** once the certificate is ready.

## Contact form
The form on the home page sends through FormSubmit to `info@massivescarera.com`.
The first message triggers a one-time activation email to that inbox — click the link in it, and messages start arriving.

## Editing
- Lyrics: open `lyrics.html`, find each `PASTE … LYRICS BELOW` comment and replace the placeholder text.
- Text and links: edit the HTML files directly in GitHub (pencil icon) and commit.
