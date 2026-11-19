// @ts-check
import { defineConfig, envField } from 'astro/config';

import sitemap from '@astrojs/sitemap';

import { SHOP_PATH, shopIsPublic } from './src/lib/shop-visibility';

// https://astro.build/config
export default defineConfig({
  site: 'https://ceciliaceballos.com',
  integrations: [
    sitemap({
      // Leave the shop out of the sitemap while it's password-protected.
      filter: (page) =>
        shopIsPublic || !new URL(page).pathname.startsWith(SHOP_PATH),
    }),
  ],
  env: {
    schema: {
      // Restricted, read-only Stripe key used at build time to list shop
      // products. Optional: without it the shop shows "Coming soon".
      STRIPE_SECRET_KEY: envField.string({
        context: 'server',
        access: 'secret',
        optional: true,
      }),
    },
  },
});
