/**
 * Whether the shop is public, read from SHOP_PASSWORD_REQUIRED in
 * wrangler.toml's [vars]. That one value drives both:
 *   - the Worker's password gate, at runtime (worker/index.ts), and
 *   - the build: while the gate is on, the illustration header hides the
 *     "shop" link, the main site's footer hides its "Drawing and Watercolor"
 *     link, and the sitemap leaves out the whole illustration section.
 * Only the exact value "false" (any case) opens the shop; anything else,
 * including a missing value, keeps it hidden and locked.
 */
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { parse } from 'smol-toml';

export function isShopOpen(value: unknown): boolean {
  return typeof value === 'string' && value.trim().toLowerCase() === 'false';
}

function readFlag(): unknown {
  // Builds run from the project root. (import.meta.url would point into the
  // bundled output during a build, so it can't locate the file.)
  const file = resolve(process.cwd(), 'wrangler.toml');
  const config = parse(readFileSync(file, 'utf8')) as {
    vars?: Record<string, unknown>;
  };
  return config.vars?.SHOP_PASSWORD_REQUIRED;
}

export const shopIsPublic = isShopOpen(readFlag());
