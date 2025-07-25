// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  i18n: {
    locales: ["ja", "en"],
    defaultLocale: "en",
    fallback: {
      "ja": "en",
    },
    routing: {
      prefixDefaultLocale: true,
      fallbackType: "redirect",
    },
  }
});
