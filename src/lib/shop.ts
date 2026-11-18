/**
 * Shop data, fetched from Stripe at build time.
 *
 * Ceci manages everything in the Stripe dashboard:
 *   - a Product per artwork (name, description, image, price),
 *   - a Payment Link per Product (Stripe hosts the checkout),
 *   - orders and shipping in the Stripe dashboard / app.
 *
 * This module turns that into a list of shop items for the page. It needs a
 * restricted, read-only Stripe key in STRIPE_SECRET_KEY (see README). Without
 * a key it returns an empty list, so the shop shows "Coming soon".
 */
import { STRIPE_SECRET_KEY } from 'astro:env/server';

export type ShopItemKind = 'original' | 'print';

export interface ShopItem {
  id: string;
  title: string;
  description: string | null;
  image: string | null;
  kind: ShopItemKind;
  /** Formatted price, e.g. "$1,500 MXN". */
  price: string;
  /** Checkout URL; null when the item can no longer be bought. */
  buyUrl: string | null;
  sold: boolean;
}

// ---- Minimal shapes of the Stripe objects we read ----

interface StripeList<T> {
  data: T[];
  has_more: boolean;
}

interface StripePrice {
  id: string;
  unit_amount: number | null;
  currency: string;
}

interface StripeProduct {
  id: string;
  name: string;
  description: string | null;
  images: string[];
  metadata: Record<string, string>;
  created: number;
}

interface StripePaymentLink {
  id: string;
  url: string;
  active: boolean;
  restrictions: {
    completed_sessions: { count: number; limit: number };
  } | null;
  line_items?: StripeList<{
    price: (StripePrice & { product: string }) | null;
  }>;
}

const API = 'https://api.stripe.com/v1';

async function listAll<T extends { id: string }>(
  path: string,
  params: Record<string, string | string[]>,
  key: string
): Promise<T[]> {
  const items: T[] = [];
  let startingAfter: string | undefined;

  do {
    const query = new URLSearchParams({ limit: '100' });
    for (const [name, value] of Object.entries(params)) {
      for (const v of [value].flat()) query.append(name, v);
    }
    if (startingAfter) query.set('starting_after', startingAfter);

    const res = await fetch(`${API}${path}?${query}`, {
      headers: { Authorization: `Bearer ${key}` },
    });
    if (!res.ok) {
      const body = await res.text();
      throw new Error(`Stripe ${path} failed (${res.status}): ${body}`);
    }
    const page = (await res.json()) as StripeList<T>;
    items.push(...page.data);
    startingAfter = page.has_more ? page.data.at(-1)?.id : undefined;
  } while (startingAfter);

  return items;
}

// Currencies Stripe stores without cents (MXN and USD are NOT in this list).
const ZERO_DECIMAL = new Set([
  'bif',
  'clp',
  'djf',
  'gnf',
  'jpy',
  'kmf',
  'krw',
  'mga',
  'pyg',
  'rwf',
  'ugx',
  'vnd',
  'vuv',
  'xaf',
  'xof',
  'xpf',
]);

export function formatPrice(amount: number, currency: string): string {
  const major = ZERO_DECIMAL.has(currency) ? amount : amount / 100;
  const code = currency.toUpperCase();
  const number = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: code,
    currencyDisplay: 'narrowSymbol',
    minimumFractionDigits: Number.isInteger(major) ? 0 : 2,
  }).format(major);
  return `${number} ${code}`;
}

function kindOf(product: StripeProduct, link: StripePaymentLink): ShopItemKind {
  const tagged = product.metadata.type?.trim().toLowerCase();
  if (tagged === 'original' || tagged === 'print') return tagged;
  // Untagged: a link limited to a single sale is an original.
  return link.restrictions?.completed_sessions.limit === 1
    ? 'original'
    : 'print';
}

function isAvailable(link: StripePaymentLink): boolean {
  const limit = link.restrictions?.completed_sessions;
  return link.active && (!limit || limit.count < limit.limit);
}

export async function getShopItems(): Promise<ShopItem[]> {
  const key = STRIPE_SECRET_KEY;
  if (!key) {
    console.warn(
      '[shop] STRIPE_SECRET_KEY is not set; the shop will show "Coming soon".'
    );
    return [];
  }

  // Any failure below fails the build on purpose: Cloudflare then keeps the
  // last good deploy instead of publishing an empty shop.
  const [products, links] = await Promise.all([
    listAll<StripeProduct>('/products', { active: 'true' }, key),
    listAll<StripePaymentLink>(
      '/payment_links',
      { 'expand[]': 'data.line_items' },
      key
    ),
  ]);

  // Group payment links by the product they sell (first line item).
  const linksByProduct = new Map<
    string,
    { link: StripePaymentLink; price: StripePrice }[]
  >();
  for (const link of links) {
    const price = link.line_items?.data[0]?.price;
    if (!price) continue;
    const entry = linksByProduct.get(price.product) ?? [];
    entry.push({ link, price });
    linksByProduct.set(price.product, entry);
  }

  const entries: { item: ShopItem; order: number; created: number }[] = [];
  for (const product of products) {
    if (product.metadata.hidden === 'true') continue;
    const candidates = linksByProduct.get(product.id);
    if (!candidates?.length) continue; // not for sale yet

    // Prefer a link that can still be bought.
    const chosen =
      candidates.find(({ link }) => isAvailable(link)) ?? candidates[0];
    const available = isAvailable(chosen.link);
    const { unit_amount, currency } = chosen.price;
    const kind = kindOf(product, chosen.link);

    entries.push({
      item: {
        id: product.id,
        title: product.name,
        description: product.description,
        image: product.images[0] ?? null,
        kind,
        price: unit_amount == null ? '' : formatPrice(unit_amount, currency),
        buyUrl: available ? chosen.link.url : null,
        sold: !available,
      },
      order: Number(product.metadata.order ?? Number.POSITIVE_INFINITY),
      created: product.created,
    });
  }

  // metadata "order" first (1, 2, 3...), then newest first; sold items last.
  entries.sort(
    (a, b) =>
      Number(a.item.sold) - Number(b.item.sold) ||
      a.order - b.order ||
      b.created - a.created
  );

  return entries.map(({ item }) => item);
}
