// @ts-check
import { defineConfig, envField } from 'astro/config';

import sitemap from '@astrojs/sitemap';

import { shopIsPublic } from './src/lib/shop-visibility';

// https://astro.build/config
export default defineConfig({
  site: 'https://ceciliaceballos.com',
  integrations: [
    sitemap({
      // While the shop is password-protected, the whole illustration section
      // is unlinked from the main site, so leave it out of the sitemap too.
      filter: (page) =>
        shopIsPublic || !new URL(page).pathname.startsWith('/illustration'),
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
