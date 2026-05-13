# Estrutura do projeto — BrasCare MedSênior

Landing page estática de alta conversão para a **BrasCare**, focada nos planos **MedSênior** em **Curitiba** e região (narrativa 44+).

Índice geral da documentação: [docs/README.md](./README.md).

## Stack tecnológica

Versões declaradas em `package.json`:

- **React 19** — interface.
- **TypeScript** — tipagem (`tsc --noEmit` no script `lint`).
- **Vite 6** — dev server e build (`build.sourcemap: false` em produção; chunk manual `motion` em `vite.config.ts`).
- **Tailwind CSS v4** (`@tailwindcss/vite`) — estilos e `@theme` em `src/index.css`.
- **Motion** (`motion/react`) — animações, carrossel e FAQ (chunk separado no build).
- **Lucide React** — ícones (import nomeado; tree-shaking).
- **React Router DOM 7** — rotas da SPA (`/`, `/termos`, `/privacidade`).
- **Typebot (embed via CDN)** — sem pacote npm: `import()` em runtime para `dist/web.js` no jsDelivr (ou `VITE_TYPEBOT_JS_URL`); CTAs chamam `Typebot.open()`.

## Variáveis de ambiente (Vite)

Prefixo **`VITE_`** expõe valores ao bundle do cliente. Modelo em [`.env.example`](../.env.example):

| Variável | Uso |
|----------|-----|
| `VITE_SITE_URL` | URL pública do site (sem `/` final). Build injeta `canonical` / `og:url` / `og:image` no `index.html` quando definida. Runtime: `SeoHead` + `src/content/seo.ts`. |
| `VITE_TYPEBOT_API_HOST` | URL do viewer Typebot, sem barra final. Padrão em `constants.ts`: `https://flow.creativelane.com.br` |
| `VITE_TYPEBOT_PUBLIC_ID` | ID público do fluxo (slug). Padrão: `enanda-cwb` |
| `VITE_TYPEBOT_JS_URL` | Opcional — URL do `web.js` no CDN |
| `VITE_WHATSAPP_URL` | Reserva: `https://wa.me/...` quando Typebot não está configurado |
| `VITE_GTM_CONTAINER_ID` | Google Tag Manager — `GTM-XXXXXXX` |
| `VITE_CLARITY_PROJECT_ID` | Microsoft Clarity |

**Bootstrap:** [`src/components/ClientBootstrap.tsx`](../src/components/ClientBootstrap.tsx) — GTM, Clarity, `virtual_page_view` por rota, pré-carga do Typebot.

**SEO:** [`src/components/SeoHead.tsx`](../src/components/SeoHead.tsx) — título, meta, Open Graph, Twitter, canonical e JSON-LD por pathname. Plugin `html-absolute-seo` em `vite.config.ts` injeta URLs absolutas no HTML estático quando `VITE_SITE_URL` existe no build.

## Raiz do repositório

- `index.html` — shell, `lang="pt-BR"`, meta default, `preconnect` Google Fonts, `dns-prefetch` Unsplash (hero).
- `vite.config.ts` — React, Tailwind, injeção SEO condicional, chunk `motion`.
- `package.json` / `tsconfig.json`
- `.env.example`
- `README.md`
- **`public/brand/`** — logo WebP, selo, SVGs, ícone WhatsApp bubble (`whatsapp-bubble-icon.svg`); ver `public/brand/README.md`.
- **`public/_redirects`** — Netlify: `/* → /index.html 200` (SPA).

## Arquitetura de pastas

```
src/
  App.tsx                 # SeoHead + ClientBootstrap + Routes; Termos/Privacidade em React.lazy + Suspense
  main.tsx                # createRoot + BrowserRouter
  index.css               # Tailwind, Montserrat, @theme, .lp-prose, .legal-doc, .brascare-header-logo
  vite-env.d.ts
  content/
    constants.ts          # WHATSAPP_URL, TYPEBOT_*, BRAND_*
    seo.ts                # Textos SEO por rota, getSiteOrigin()
  lib/
    typebot.ts            # initBubble + openTypebot (CDN)
    imgBlockSave.ts       # imgBlockSaveAttrs — bloqueia drag/context menu em imagens sensíveis
  pages/
    LandingPage.tsx       # LP principal
    LegalLayout.tsx       # Header (logo) + main + footer legal (links + ©)
    TermosPage.tsx
    PrivacidadePage.tsx
  components/
    SeoHead.tsx
    LegalPageFallback.tsx # fallback Suspense rotas legais
    ClientBootstrap.tsx
    layout/   Container, Section, index
    ui/       SiteHeader, Eyebrow, SectionTitle, CtaButton
docs/
  …
```

## Rotas (`App.tsx`)

| Caminho | Entrega |
|---------|---------|
| `/` | `LandingPage` (eager) |
| `/termos` | `lazy(() => import('./pages/TermosPage'))` + `Suspense` |
| `/privacidade` | `lazy(() => import('./pages/PrivacidadePage'))` + `Suspense` |

`LegalLayout` é partilhado pelas duas rotas legais (chunk próprio no build).

## Ordem no DOM (`LandingPage.tsx`)

1. **`<main>`** — `SiteHeader` integrado na **hero** (secção `min-h-dvh`, `overflow-x-clip`).
   - Hero: grelha `md:grid-cols-2`, texto + imagem (Unsplash com `srcSet` / `fetchPriority="high"`), cartão “Cuidado 44+” no bloco da foto.
   - **Planos** — `Section` `id="planos"` `variant="white"`, carrossel Motion + setas + dots.
   - **Ecossistema** — `Section` `variant="muted"`, grelha benefícios + copy.
   - **Rede** — `Section` `id="rede"` `variant="white"`, três cartões (Hospitais, Diagnóstico, Unidade Própria + CTA).
   - **FAQ** — `Section` `variant="default"`, acordeão.
2. **`<footer>`** — links **Termos de Uso** e **Privacidade** + © (minimal).

## Funcionalidades principais

- Animações à entrada (`whileInView`).
- Carrossel: `focusedIndex`, drag, `ResizeObserver` na janela; `resize` com `requestAnimationFrame` para menos trabalho no main thread.
- FAQ: `openFaq` + `AnimatePresence`.
- CTAs `typebot` → `openTypebot()` (WhatsApp launcher theme + `customIconSrc` em `lib/typebot.ts`).
