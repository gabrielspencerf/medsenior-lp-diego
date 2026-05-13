# Documentação do projeto

Este diretório concentra tudo que humanos e assistentes de IA precisam para entender, manter e evoluir a landing **BrasCare × MedSênior Curitiba** sem adivinhar contexto no código.

## Mapa dos arquivos

| Arquivo | Função |
|--------|--------|
| [structure.md](./structure.md) | Stack, pastas reais do repositório, seções da página e responsabilidades de cada artefato. |
| [maintenance.md](./maintenance.md) | Regras de manutenção: o que atualizar quando, hierarquia visual, obrigatoriedade do log de correções. |
| [copy.md](./copy.md) | Tom de voz, narrativa e copy **por seção**, alinhada ao que está em `src/pages/LandingPage.tsx`. |
| [design/design-system.md](./design/design-system.md) | Tokens, cores, tipografia, espaçamento e regras **por seção** (UI). |
| [performance.md](./performance.md) | Boas práticas de carregamento, LCP e build (Vite). |
| [logs/fixes.md](./logs/fixes.md) | Registro de problemas, **causa**, **solução** e **prevenção** (obrigatório após correções relevantes). |
| [ai/](./ai/) | Instruções por ferramenta (Cursor, Claude, GPT) + checklist comum. |
| `public/brand/` | Assets de marca (logo e selo); nomes esperados em `src/content/constants.ts`. |

## Resumo executivo (qualquer assistente)

1. A aplicação é uma **SPA React 19** servida pelo **Vite**; a composição da landing está em **`src/pages/LandingPage.tsx`**, rotas e bootstrap (GTM, Clarity, Typebot) em **`src/App.tsx`**, com **layout e UI reutilizáveis** em `src/components/` e constantes em `src/content/constants.ts`. A ordem no DOM está em [structure.md](./structure.md).
2. Estilos globais e tema Tailwind v4 estão em **`src/index.css`**.
3. Antes de mudar layout ou texto: leia **structure**, **design-system** e **copy**. Depois de corrigir bugs ou decisões visuais relevantes: acrescente entrada em **logs/fixes.md**.
4. Evite dependências ou arquivos que não sejam usados na LP estática; o escopo é conversão e performance percebida.

## Ordem de leitura sugerida

1. `structure.md` — onde tudo mora.  
2. `design/design-system.md` + `copy.md` — consistência visual e verbal.  
3. `maintenance.md` — contrato de atualização da documentação.  
4. `performance.md` — se a alteração afeta imagens, fontes ou JS.  
5. `ai/README.md` — se o trabalho for feito por IA.
