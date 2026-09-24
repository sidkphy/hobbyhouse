# Hobby House — starter site

A plain HTML/CSS static site with the page structure you asked for. No
build tools, no dependencies — just open `index.html` in a browser to
preview it locally, or push the whole folder to GitHub Pages.

## Pages included

| Page                  | File                  | Notes                                             |
|------------------------|------------------------|----------------------------------------------------|
| Home                   | `index.html`           | Short description + links to all 4 menus           |
| Customised T-Shirts     | `tshirts.html`         | 6 placeholder items in a grid                       |
| Doll's Fashion         | `dolls-fashion.html`   | 6 placeholder items in a grid                       |
| Art Collection         | `art-collection.html`  | 6 placeholder items in a grid                       |
| Tailor Training        | `tailor-training.html` | Course description placeholder, tagged Coming Soon  |
| Item details (generic) | `item-details.html`    | Linked from every item card; has the Buy Now button |
| Coming soon + feedback | `coming-soon.html`     | Reached from every Buy Now / Get Notified button    |

Shared styles are in `css/style.css`, shared mobile-menu script in `js/main.js`.

## Publishing with GitHub Pages

1. Create a GitHub account at github.com if you don't have one.
2. Create a new **public** repository, e.g. named `hobbyhouse`.
3. On the repository page, click **Add file → Upload files**, then drag in
   everything from this folder (keep the `css` and `js` folders as they
   are — don't flatten them).
4. Commit the upload.
5. Go to **Settings → Pages**. Under "Build and deployment", set
   **Source** to "Deploy from a branch", branch `main`, folder `/ (root)`,
   then Save.
6. Wait a minute or two, then visit the URL GitHub shows you (something
   like `https://yourusername.github.io/hobbyhouse/`).

Once you buy a custom domain, add it under the same Settings → Pages
screen ("Custom domain") and point the domain's DNS at GitHub's servers —
GitHub shows the exact records to add once you enter the domain.

## Filling in content later

- Replace the placeholder text in `[]` (descriptions, item names, prices)
  directly in each HTML file.
- Replace the `placehold.co` image URLs with real photos — just swap the
  `src="..."` on each `<img>` tag for your own image file or link.
- Each item currently links to the same `item-details.html`. Once you have
  real products, the simplest option is to duplicate that file per item
  (e.g. `item-details-1.html`, `item-details-2.html`) and update the
  "View Details" links on the category pages to match.

## Turning the feedback form into something that actually sends

Right now `coming-soon.html` has a form that doesn't go anywhere — plain
HTML/GitHub Pages has no server to receive it. To make it work without
writing backend code, sign up for a free plan on a form service like
**Formspree** or **Google Forms**, and swap the form's `action="#"` for
the endpoint they give you.

## Adding real payments later

When you're ready to accept orders, Razorpay (or Cashfree) payment
buttons/links can replace the "Buy Now" link's destination — no backend
required for the simple version.
