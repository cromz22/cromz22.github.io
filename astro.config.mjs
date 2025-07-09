// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
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
