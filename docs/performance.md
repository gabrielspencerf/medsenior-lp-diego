# Performance e carregamento

Objetivo: primeiro paint rápido, **LCP** estável na hero e JS inicial mais leve; rotas pouco usadas em chunk à parte.

## Rede e HTML

- **`index.html`**: `preconnect` a `fonts.googleapis.com` e `fonts.gstatic.com`; `dns-prefetch` para `images.unsplash.com` (hero).
- **Build**: com `VITE_SITE_URL` definida, o plugin em `vite.config.ts` injeta `canonical`, `og:url`, `og:image` e `twitter:image` absolutos (útil para crawlers sem JS).

## Fontes

- Montserrat via Google Fonts em `src/index.css` com **`display=swap`**.
- Evitar pesos extra sem necessidade.

## Imagens

### Hero (Unsplash)

- **`srcSet`** + **`sizes="(max-width: 768px) 100vw, 50vw"`** para descarregar largura adequada ao viewport.
- **`width` / `height`** (1200×960, proporção 5:4) para reduzir **CLS**.
- **`fetchPriority="high"`** e **`decoding="async"`**; **sem** `loading="lazy"` no LCP.
- `referrerPolicy="no-referrer"`.

### Logo e selo (`SiteHeader`)

- `public/brand/`; logo com dimensões e `fetchPriority="high"`; selo `loading="lazy"`.

## JavaScript e bundles

- **Rotas legais** (`/termos`, `/privacidade`): `React.lazy` + `Suspense` com [`LegalPageFallback`](../src/components/LegalPageFallback.tsx) — o utilizador na home não descarrega o JS dessas páginas até navegar.
- **Motion**: `manualChunks` em `vite.config.ts` agrupa `motion` num ficheiro próprio (cache de longo prazo e paralelismo de download).
- **Motion / Lucide**: importar apenas símbolos usados.
- **Resize (carrossel)**: handler de `resize` debounced com **`requestAnimationFrame`** + `{ passive: true }` em `LandingPage.tsx`.

## CSS e Tailwind

- Tailwind v4 compila só classes referenciadas — evitar classes construídas por concatenação dinâmica.
- `backdrop-blur` e `blur` em hero/header: usar com moderação (custo GPU em mobile fraco).

## Build (Vite)

- `npm run build` antes de releases; `sourcemap: false` em produção.
- Verificar `dist/assets/` — tamanho de `index-*.js`, `motion-*.js` e chunks lazy (`TermosPage`, `PrivacidadePage`, `LegalLayout`).

## Checklist antes de publicar

- [ ] `VITE_SITE_URL` definida no CI/deploy se quiseres OG/canonical absolutos no HTML gerado.
- [ ] Hero com proporção e `srcSet`; sem lazy na imagem LCP.
- [ ] Nenhuma biblioteca nova pesada sem auditar o bundle.
- [ ] Throttling 3G / CPU 4× no DevTools na primeira visita à `/`.
