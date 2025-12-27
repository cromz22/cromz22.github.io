// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  i18n: {
    locales: ["ja", "en"],
    defaultLocale: "en",
    falllback: {
      "ja": "en",
    },
    routing: {
      prefixDefaultLocale: true,
      fallbackType: "redirect",
    },
  }
});
