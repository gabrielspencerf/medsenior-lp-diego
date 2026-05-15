# MedSênior Curitiba — Landing page (BrasCare)

Landing page estática para captação de leads dos planos MedSênior na região de Curitiba.

## Requisitos

- [Node.js](https://nodejs.org/) (LTS recomendado)

## Desenvolvimento

```bash
npm install
npm run dev
```

O servidor de desenvolvimento sobe em `http://localhost:3000` (host `0.0.0.0` para acesso na rede local).

## Build

```bash
npm run build
npm run preview
```

Artefatos em `dist/`.

## Variáveis de ambiente

Copie [`.env.example`](.env.example) para `.env` ou `.env.local` e preencha o que for usar:

- **`VITE_SITE_URL`** — URL pública do site (`https://curitiba.vidaesaudeseniors.com.br`, sem barra final). Usada em SEO, canonical/Open Graph e páginas legais. Padrão de produção já definido no projeto e em `vite.config.ts`.
- **Typebot** — `VITE_TYPEBOT_API_HOST` + `VITE_TYPEBOT_PUBLIC_ID` (ex.: `https://flow.creativelane.com.br` + `enanda-cwb`). Valores por defeito existem em `src/content/constants.ts` para desenvolvimento sem `.env`.
- **`VITE_TYPEBOT_JS_URL`** — opcional; sobrescreve o URL do script `web.js` no CDN.
- **WhatsApp** — `VITE_WHATSAPP_URL` como reserva se o Typebot não estiver configurado.
- **GTM / Clarity** — `VITE_GTM_CONTAINER_ID` (`GTM-…`), `VITE_CLARITY_PROJECT_ID`.

Sem Typebot no `.env`, o build continua a funcionar; os CTAs tentam abrir o WhatsApp se a URL estiver definida.

## Performance (resumo)

- Rotas `/termos` e `/privacidade` em **code-splitting** (`React.lazy`).
- Chunk dedicado para **Motion** no build.
- Hero: `srcSet` + `fetchPriority="high"` na imagem LCP; preconnect/dns-prefetch no `index.html`.
- Detalhes: [docs/performance.md](docs/performance.md).

## Documentação

Índice e mapa de tudo que está em `docs/`: [docs/README.md](docs/README.md).
