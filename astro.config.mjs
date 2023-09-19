import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from '@astrojs/sitemap';
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://glentreeacademy.com/",
  integrations: [sitemap(), tailwind()],
  output: "server",
  adapter: vercel({
    functionPerRoute: false,
  }),
  server: (command) => ({ port: command === 'dev' ? 3000 : 4000, host: true })
});