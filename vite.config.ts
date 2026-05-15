import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const siteUrl = (env.VITE_SITE_URL || 'https://curitiba.vidaesaudeseniors.com.br').replace(/\/$/, '');
  const ogImage = siteUrl ? `${siteUrl}/brand/brascare-logotipo-horizontal.webp` : '';

  return {
    build: {
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules/motion')) return 'motion';
          },
        },
      },
    },
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'html-absolute-seo',
        transformIndexHtml(html) {
          if (!siteUrl || !ogImage) return html;
          return {
            html,
            tags: [
              { tag: 'link', attrs: { rel: 'canonical', href: `${siteUrl}/` }, injectTo: 'head' },
              { tag: 'meta', attrs: { property: 'og:url', content: `${siteUrl}/` }, injectTo: 'head' },
              { tag: 'meta', attrs: { property: 'og:image', content: ogImage }, injectTo: 'head' },
              {
                tag: 'meta',
                attrs: {
                  property: 'og:image:alt',
                  content: 'BrasCare — MedSênior Curitiba, planos de saúde',
                },
                injectTo: 'head',
              },
              { tag: 'meta', attrs: { name: 'twitter:image', content: ogImage }, injectTo: 'head' },
            ],
          };
        },
      },
    ],
  };
});
