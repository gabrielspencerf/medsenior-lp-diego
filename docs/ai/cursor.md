# Cursor — regras e contexto

## Resumo

Landing **React 19** + Vite + Tailwind v4 + Motion; composição em `src/pages/LandingPage.tsx`, rotas em `src/App.tsx`, primitivos em `src/components/` e constantes em `src/content/constants.ts`. Documentação em `docs/` — mapa em `docs/README.md`, ordem do DOM em `docs/structure.md`.

## Antes de editar

- Abra `docs/structure.md` para stack e layout das seções.
- Para UI: `docs/design/design-system.md`. Para texto: `docs/copy.md`.
- Se a mudança afetar LCP, imagens ou bundle: `docs/performance.md`.

## Regras práticas

- Não criar pastas ou arquivos que o projeto não use (ex.: backend, Gemini, metadata de plataformas externas).
- Não introduzir dependências sem necessidade clara para a LP.
- Preservar acessibilidade básica: `aria-label` em botões flutuantes, contraste dos verdes institucionais.
- Após correção de bug ou decisão de UX: entrada em `docs/logs/fixes.md`.

## Onde não inventar

- Nomes de planos, ANS, áreas de cobertura e claims legais devem bater com `docs/copy.md` e com o que negócio/autorização definir — não alterar números regulatórios sem fonte.
