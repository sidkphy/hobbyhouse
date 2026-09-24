# Hobby House — starter site

A plain HTML/CSS static site with the page structure you asked for. No
build tools, no dependencies — just open `index.html` in a browser to
preview it locally, or push the whole folder to GitHub Pages.

## Pages included

| Page                    | File                        | Notes                                                |
|-------------------------|------------------------------|-------------------------------------------------------|
| Home                    | `index.html`                 | Intro text + links to all 4 menus                      |
| Customised T-Shirts     | `tshirts.html`                | 6 real items, ₹1000 each                               |
| Doll's Fashion          | `dolls-fashion.html`          | 6 real items, ₹2000 each                               |
| Art Collection          | `art-collection.html`         | 6 real items, ₹1000 each                               |
| Tailor Training         | `tailor-training.html`        | Short intro, tagged Coming Soon                        |
| Item details (18 pages) | `item-<slug>.html`            | One page per item, e.g. `item-tshirt-1.html`           |
| Coming soon + feedback  | `coming-soon.html`            | Reached from every Buy Now / Get Notified button       |

Product photos live in `images/` (18 files, ~100–250KB each JPGs).
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

## Editing content

- To change an item's name, price or description, open its `item-<slug>.html`
  page directly (e.g. `item-tshirt-1.html`) and edit the text — then also
  update the matching card on the category listing page (`tshirts.html`,
  `dolls-fashion.html` or `art-collection.html`) so the name/price stay in sync.
- To add a new item, copy an existing `item-<slug>.html` file, give it a new
  filename, swap in a new image from `images/`, and add a matching card to
  the category listing page.
- To swap a photo, drop a new file into `images/` and update the `src="images/..."`
  reference on both the listing card and that item's detail page.

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
