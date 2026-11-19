/**
 * The site's Worker: serves the static build from `./dist`, and puts the
 * illustration section (shop included) behind a password while
 * SHOP_PASSWORD_REQUIRED is on.
 *
 * Only paths in `run_worker_first` (wrangler.toml) reach this code; every other
 * request is served straight from the assets. See docs/shop.md.
 */

interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> };
  /** "false" opens the illustration section and shop to everyone; unset or anything else keeps it locked. */
  SHOP_PASSWORD_REQUIRED?: string;
  /** The password (a Worker secret). Unset while required: nobody gets in. */
  SHOP_PASSWORD?: string;
}

const REALM = 'Drawing and Watercolor';

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (
      isGatedPath(new URL(request.url).pathname) &&
      env.SHOP_PASSWORD_REQUIRED?.trim().toLowerCase() !== 'false' &&
      !(await hasPassword(request, env.SHOP_PASSWORD))
    ) {
      return new Response('This page is password protected.', {
        status: 401,
        headers: {
          'WWW-Authenticate': `Basic realm="${REALM}", charset="UTF-8"`,
          'Cache-Control': 'no-store',
        },
      });
    }
    return env.ASSETS.fetch(request);
  },
};

/** The whole illustration section, including the shop. */
function isGatedPath(pathname: string): boolean {
  return (
    pathname === '/illustration' ||
    pathname.startsWith('/illustration/') ||
    pathname.startsWith('/illustration.')
  );
}

/** Any username; the password must match. */
async function hasPassword(
  request: Request,
  password: string | undefined
): Promise<boolean> {
  if (!password) return false;
  const header = request.headers.get('Authorization') ?? '';
  const [scheme, encoded] = header.split(' ');
  if (scheme?.toLowerCase() !== 'basic' || !encoded) return false;
  let decoded: string;
  try {
    decoded = new TextDecoder().decode(
      Uint8Array.from(atob(encoded), (c) => c.charCodeAt(0))
    );
  } catch {
    return false;
  }
  const given = decoded.slice(decoded.indexOf(':') + 1);
  return sameSecret(given, password);
}

/** Compares SHA-256 digests in constant time, so timing reveals nothing. */
async function sameSecret(a: string, b: string): Promise<boolean> {
  const encoder = new TextEncoder();
  const [x, y] = await Promise.all(
    [a, b].map(
      async (s) =>
        new Uint8Array(await crypto.subtle.digest('SHA-256', encoder.encode(s)))
    )
  );
  let diff = 0;
  for (let i = 0; i < x.length; i++) diff |= x[i] ^ y[i];
  return diff === 0;
}
