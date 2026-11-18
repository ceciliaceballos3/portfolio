# Illustration shop (`/illustration/shop`)

The shop is built from Ceci's Stripe account **at build time**. Stripe hosts
checkout (Payment Links) and the Stripe dashboard is where orders, payments and
shipping details live. There is no backend.

## Settings

| Name                     | Kind                      | Where                                             | Value                        |
| ------------------------ | ------------------------- | ------------------------------------------------- | ---------------------------- |
| `STRIPE_SECRET_KEY`      | build secret              | Cloudflare build settings, and `.env` for local   | Restricted key (`rk_live_…`) |
| `SHOP_PASSWORD_REQUIRED` | Worker variable (runtime) | Cloudflare Worker → Settings → Variables          | `false` opens the shop       |
| `SHOP_PASSWORD`          | Worker secret (runtime)   | Cloudflare Worker → Settings → Variables (secret) | The password visitors type   |

### Stripe key

Create it at [dashboard.stripe.com/apikeys](https://dashboard.stripe.com/apikeys)
→ **Create restricted key**, with **Read** access to **Products**, **Prices**
and **Payment Links** only (everything else: None). Stripe shows the value
**only once**, so copy it straight into Cloudflare. `.env` is gitignored; never
commit the key.

- **No key set:** the build succeeds and the shop shows "Coming soon".
- **Key set but Stripe errors:** the build fails on purpose, so Cloudflare keeps
  the last good deploy instead of publishing an empty shop.

### Password gate

`/illustration/shop` is behind a password until it's opened. The check runs in
the site's Worker (`worker/index.ts`), on the server, before the page is
served; the rest of the site never goes through it.

- **`SHOP_PASSWORD_REQUIRED` unset or anything but `false`:** visitors get the
  browser's password prompt. Any username works; the password is
  `SHOP_PASSWORD`. If `SHOP_PASSWORD` isn't set, nobody gets in.
- **`SHOP_PASSWORD_REQUIRED=false`:** the shop is public.

Both are runtime settings on the Worker, so changing them takes effect without
a rebuild. They're deliberately not in `wrangler.toml`, which would overwrite
the dashboard values on every deploy. The gate is independent of the Stripe
key.

Locally, `pnpm dev` doesn't run the Worker, so the shop is open there. To try
the gate, put `SHOP_PASSWORD=…` (and optionally `SHOP_PASSWORD_REQUIRED`) in
`.dev.vars` (gitignored), then `pnpm build && pnpm exec wrangler dev`.

## How Ceci adds an item

1. Stripe → Product catalog → **Add product**: name, description, image, price
   (MXN), one-time.
2. On the product, **Create payment link**. Turn on shipping address collection.
   - For an **original**: under Advanced/options, _Limit the number of
     payments_ to **1**. Stripe deactivates the link after the sale and the shop
     shows it as **Sold**.
   - For a **print**: no limit.
3. Trigger a rebuild (see below).

To email buyers a receipt, turn on Stripe → Settings → Business → Customer
emails → Payments → **Successful payments**.

Optional product metadata (Product → Metadata):

| Key      | Values                | Effect                                                                                         |
| -------- | --------------------- | ---------------------------------------------------------------------------------------------- |
| `type`   | `original` \| `print` | Label on the card. Default: `original` if the link is limited to 1 payment, otherwise `print`. |
| `order`  | `1`, `2`, `3`…        | Sort position. Unset items follow, newest first.                                               |
| `hidden` | `true`                | Keep the product out of the shop.                                                              |

Rules: only **active products that have a fixed-price payment link** are listed. An item is
**Sold** / **Sold out** when its payment link is deactivated or has reached its
payment limit; sold items sort to the end. Archive the product to remove it.

## Rebuilding when the catalog changes

The page is static, so it only changes on a new build. Options, simplest first:

1. **Manual:** "Retry deployment" / redeploy in the Cloudflare dashboard.
2. **Deploy hook + Stripe webhook (no code):** create a deploy hook URL in the
   Cloudflare project's build settings, then in Stripe → Developers → Webhooks
   add an endpoint pointing at that URL, listening to `product.created`,
   `product.updated`, `price.created`, `payment_link.created`,
   `payment_link.updated` and `checkout.session.completed`. Any catalog change
   or sale then rebuilds the site. Keep the hook URL private.

Even before a rebuild, a sold original can't be bought twice: Stripe refuses a
deactivated payment link.

## Code

- `src/lib/shop.ts`: fetches products and payment links with the official
  `stripe` Node SDK (and its types) and maps them to shop items.
- `src/pages/illustration/shop.astro`: the grid; falls back to the "Coming
  soon" gallery page when there are no items.
- `astro.config.mjs`: declares `STRIPE_SECRET_KEY` via `astro:env`.
- `worker/index.ts` + `wrangler.toml`: the password gate. `run_worker_first`
  sends only the shop's paths through it.
