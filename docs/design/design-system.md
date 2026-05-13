# Design system — BrasCare MedSênior

Tokens, componentes de layout/UI e regras por seção. Código de referência: `src/pages/LandingPage.tsx`, `src/App.tsx`, `src/components/`, `src/index.css`.

## Tokens globais (`@theme` em `index.css`)

- **Fontes**: `--font-sans`, `--font-display` (Montserrat).
- **Cores semânticas** (uso via utilitários Tailwind `text-brand-deep`, `bg-brand-deep`, etc.):
  - `--color-brand-deep` — `#063d24`
  - `--color-brand-mid` — `#0d6b3c`
  - `--color-brand-lime` — `#b8dc6f`
  - `--color-text-muted` — `#5f6f67`
- **Corpo**: `body` usa `text-brand-deep` e fundo `#F7F8F4`.
- **Utilitário**: classe `.lp-prose` — parágrafo de secção (`text-base`, cor muted, `leading-relaxed`, `opacity-70`).

## Componentes de layout

### `Container`

- Largura normal: `max-w-7xl mx-auto px-5 sm:px-6`.
- Prop `narrow`: `max-w-4xl` (FAQ, CTA final).
- Prop **`bleed`**: devolve só `min-w-0` + `className` — para colunas dentro de um wrapper que já tem `max-w-7xl` e padding (ex.: hero em duas colunas), evitando `max-w` e padding duplicados.

### `Section`

- Props: `variant` = `default` | `muted` | `white` | `dark`; `id` opcional; `padded` (default `true`) = `py-16 md:py-24`.
- Fundos: `default` → `#FDFDFD`; `muted` → `#F9FAF6`; `white` → branco; `dark` → `#063D24` + texto branco herdado onde aplicável.
- A **hero composta** (header + conteúdo) **não** usa `Section`; é um `<section>` próprio para controlar padding do bloco inferior sem duplicar `py` do header.

## Componentes de UI

### `SiteHeader`

- **Não fixo**: faz parte do scroll; situa-se **acima** do conteúdo textual/visual da hero.
- Barra com `border-b` discreto, fundo **branco sólido** (`bg-white`), `Container` com `justify-between`, `items-center`.
- **Esquerda**: link para `/` com `<img>` logo horizontal WebP (`BRAND_LOGO_SRC`), `fetchPriority="high"`, `alt` com marca e linha de apoio do asset.
- **Direita**: selo MedSênior WebP (`BRAND_SEAL_SRC`), `loading="lazy"`, `alt` descritivo (parceiro autorizado).
- Tamanhos: logo `h-10`–`h-12` responsivo, `max-w` em `vw`; selo `h-9`–`h-11`, `object-contain`, `max-w` em `vw`.

### `Eyebrow` + `eyebrowClassName`

- Labels acima de títulos: `text-[10px] font-semibold uppercase tracking-[0.12em] text-[#0D6B3C]` (sem `font-black` nem tracking extremo).
- Variações de tracking por seção via `className` (ex.: `tracking-[0.5em]` em “Ecossistema”).

### `SectionTitle`

- H2 de secção: `text-2xl md:text-3xl lg:text-4xl`, `leading-snug`, `font-display`, `text-[#063D24]`.
- H1 da hero permanece **apenas** na hero (não usar `SectionTitle`).

### `CtaButton`

- Um único tamanho tipográfico e `tracking-wide` para toda a página (hero, planos, benefícios, rede, CTA final).
- Variantes: `primary` (lima), `secondary` (verde escuro), `muted` (fundo cinza claro).
- `fullWidth` para CTAs em coluna cheia.
- `withGreenSheen` + `secondary`: overlay verde no hover (cards de plano **ativos**).
- **`typebot`:** quando `true`, o clique chama `openTypebot()`; não exige `href`. Com Typebot configurado, o launcher circular no canto é o **do embed**; sem Typebot no `.env`, o fallback abre `WHATSAPP_URL` se for URL absoluta.

## Launcher do Typebot

- Não há botão flutuante próprio na LP: o canto inferior direito é só o **bubble nativo** do Typebot (cores `#063D24` / `#B8DC6F`). Sem Typebot no `.env`, não aparece launcher; CTAs com `typebot` abrem WhatsApp se `VITE_WHATSAPP_URL` for válida.

## Por seção

### 1. Hero (bloco único)

- Glow + `SiteHeader` + wrapper `max-w-7xl mx-auto px-5 sm:px-6` com **grelha de duas colunas**; cada coluna: `Container bleed` (`min-w-0`) — texto à esquerda, imagem à direita em `lg`.
- Padding vertical do bloco: `pb-12 pt-6 md:pb-16 md:pt-8 lg:pb-20 lg:pt-10`; `gap-8 lg:gap-10` entre colunas.
- Pill do hero: fundo `bg-[#063D24]/5` + `eyebrowClassName`.
- H1: `lg:text-[52px]` (display único da página).
- Imagem: `aspect-[5/4]`, `rounded-[2.5rem]` / `md:rounded-[3rem]`, borda branca `6px`; badge flutuante compacto.

### 2. Planos

- `Section` branca; intro com `SectionTitle`.
- Cards e carrossel: blur inativo, `ring` ativo; badges de plano `text-[9px] font-semibold tracking-wide`.
- CTA do card: `CtaButton` com `withGreenSheen` quando focado.

### 3. Benefícios

- `Section` muted; cards `rounded-2xl` / `md:rounded-3xl`, `p-6` / `md:p-7`.
- Coluna de texto: `Eyebrow` + `SectionTitle` + `.lp-prose` + `CtaButton` secondary.

### 4. Rede

- `Section` branca; cabeçalho `max-w-3xl`; cards compactos (`p-5` / `md:p-6`, títulos `text-lg`, listas `text-sm`, `py-2.5`).
- Coluna escura: sem `scale-105`; CTA `CtaButton` primary `fullWidth` (normalmente `typebot`).

### 5. FAQ

- `Section` default + `Container` `narrow`; itens `rounded-2xl`, botão `px-4 py-4` / `md:px-5`, pergunta `text-sm font-semibold` / `md:text-base`.

### 6. CTA final

- `Section` dark; H2 alinhado à escala do `SectionTitle` (branco).
- `CtaButton` primary (inline) + linha de apoio `text-[10px] font-medium uppercase tracking-wide text-white/35`.

### 7. Footer

- `Container`; tipografia legal e navegação mantêm hierarquia anterior (texto “BrasCare” no rodapé para reforço + disclaimer).
