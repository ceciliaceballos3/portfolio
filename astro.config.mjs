// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://aesthetic-caramel-3f5036.netlify.app',
  integrations: [sitemap()],
});