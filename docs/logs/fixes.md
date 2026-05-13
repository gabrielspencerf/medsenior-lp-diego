# Registro de Correções e Melhorias (Logs)

## Log #001: Implementação do Carrossel Interativo
- **Problema**: O carrossel de planos era estático e ocupava muito espaço vertical em dispositivos móveis, e posteriormente apresentava transições bruscas em telas menores.
- **Causa**: Grid padrão limitava a visualização; cálculos de animação fixos não acompanhavam as variações de largura de tela (`vw`).
- **Solução**: Implementado carrossel horizontal com **Motion** (`motion/react`), utilizando `drag="x"`. Refinado com `window.innerWidth` dinâmico para os cálculos de `x` e `dragConstraints`, além de ajustar a largura dos cards para `78vw` para permitir um "peek-ahead" (visualização prévia do próximo item) mais natural.
- **Prevenção**: Sempre utilizar sistemas de overflow ou carrosséis para listas de planos/cards superiores a 3 itens, e garantir que os cálculos de deslocamento sejam sensíveis à largura do viewport.

## Log #002: Inconsistência na Família Tipográfica
- **Problema**: Algumas seções ainda exibiam fontes alternativas (Inter/Outfit) após a solicitação de mudança.
- **Causa**: Configuração incompleta no arquivo `index.css` e variáveis de tema do Tailwind que ainda apontavam para as fontes antigas.
- **Solução**: Atualizado `@theme` no `index.css` para utilizar exclusivamente Montserrat em `sans` e `display`, e removido imports desnecessários do Google Fonts.
- **Prevenção**: Ao alterar a tipografia principal, validar todas as definições no arquivo CSS base e nas configurações do compilador (ou Tailwind v4 `@theme`).

## Log #003: Hierarquia Visual de Títulos vs Corpo
- **Problema**: Dificuldade na leitura rápida (escaneabilidade) devido a espaçamentos reduzidos entre títulos e parágrafos.
- **Causa**: Uso de `mb-4` ou `mb-6` em títulos grandes, que não criava "espaço de respiração" suficiente para o conteúdo.
- **Solução**: Ajustado margens para `mb-10` ou `mb-12` em seções principais e reduzido a opacidade do corpo de texto para `70%` ou `80%`.
- **Prevenção**: Seguir a regra de design de "Afinidade de Conteúdo" - o parágrafo deve estar mais próximo do seu título do que a próxima seção, mas com espaço suficiente para se destacar.

## Log #004: UX dos Botões CTA
- **Problema**: Botões de ação principal não tinham feedback visual de interação imediata.
- **Causa**: Falta de estados `:active` e transições de hover simplistas.
- **Solução**: Adicionado `active:scale-95` para simular pressão física e `shadow-2xl` que aumenta no hover, além do uso de `rounded-full` para um visual mais "premium".
- **Prevenção**: Em landing pages de conversão, o botão deve parecer clicável e reagir instantaneamente ao toque ou cursor.

## Log #005: Refinamento de Espaçamento e Hierarquia "Big vs Refined"
- **Problema**: A página parecia "gigante" e desconectada, com paddings de seção excessivos e elementos desproporcionais em mobile.
- **Causa**: Superdimensionamento de elementos visuais e espaços em branco que prejudicavam a escaneabilidade em telas padrão e mobiles.
- **Solução**: Padronizado paddings de seção para `py-24` (desktop) e `py-16` (mobile). Refinado o Hero para `py-12` no mobile para impacto imediato sem rolagem excessiva. Reduzido o tamanho de fontes Hero e CTA em dispositivos menores para melhor equilíbrio.
- **Prevenção**: Seguir a regra de "Hierarquia Contida" definida no `/docs/maintenance.md`.

## Log #006: Padronização de CTAs (Premium Experience)
- **Problema**: Botões de ação em diferentes seções tinham estilos e comportamentos de interação inconsistentes (pesos, arredondamentos e cores variadas).
- **Causa**: Evolução incremental da página sem um guia rígido de componentes para botões.
- **Solução**: Unificado todos os botões para o formato `rounded-full`. Adicionado `active:scale-95` e `hover:scale-105` em todos para feedback tátil premium.
- **Prevenção**: Sempre consultar a seção de CTAs no `docs/design/design-system.md` antes de adicionar novos botões.

## Log #007: Transição para Montserrat e Refinamento de Escala
- **Problema**: A tipografia anterior era inconsistente em alguns pontos e os tamanhos "gigantes" prejudicavam a leitura em telas padrão.
- **Causa**: Uso de fontes variadas e escalas tipográficas agressivas típicas de protótipos iniciais.
- **Solução**: Unificado para Montserrat em toda a página. Reduzido sistematicamente os `font-sizes` (ex: Hero de `64px` para `56px`, parágrafos de `lg` para `base/sm`).
- **Prevenção**: Sempre utilizar a escala "Refined Premium" definida no `docs/design/design-system.md`.

## Log #008: Refinamento Cromático dos CTAs
- **Problema**: A cor amarela dos CTAs era excessivamente vibrante ("forte"), prejudicando a leitura e a percepção de elegância premium.
- **Causa**: Uso de cor de destaque com saturação muito alta em grandes superfícies de botões.
- **Solução**: Substituído o amarelo `#F3EA2B` pelo Verde Lima `#B8DC6F`. Esta cor mantém o destaque por ser um tom claro sobre fundos escuros e vice-versa, mas com uma saturação mais equilibrada e alinhada à marca MedSênior.
- **Prevenção**: Evitar cores "neon" em elementos de interação de grande escala em projetos de luxo/premium.

## Log #009: Documentação — índice, performance e guias de IA
- **Problema**: A pasta `docs` não tinha um README índice; faltavam guias explícitos para Cursor/Claude/GPT, documento de performance de carregamento, e vários arquivos estavam desalinhados com o código (stack, nomes de planos, Framer Motion vs Motion, pasta `src/components` inexistente, copy desatualizada).
- **Causa**: Evolução do repositório sem sincronizar toda a documentação na mesma cadência; resquícios de versões anteriores da LP e da stack.
- **Solução**: Criados `docs/README.md`, `docs/performance.md` e `docs/ai/` (`README`, `cursor`, `claude`, `gpt`); atualizados `structure.md`, `maintenance.md`, `design/design-system.md` e `copy.md`; corrigida referência histórica no Log #001 para Motion.
- **Prevenção**: Qualquer mudança estrutural ou de produto deve atualizar o mapa em `docs/README.md` quando criar ou renomear documentos; assistentes devem seguir `docs/ai/README.md` antes de tarefas grandes.

## Log #010: Coerência global código ↔ documentação
- **Problema**: `docs/structure.md` misturava WhatsApp com o footer e não refletia a ordem real do DOM; `copy.md` omitia eyebrows e parágrafos exatos da rede e do CTA; `design-system.md` tinha detalhes genéricos (hero padding, tamanho do título do plano) fora do código; imports não usados em `App.tsx`; copyright desatualizado; guias de IA sem menção explícita ao React 19; checklist de `docs/ai/README.md` não citava o índice `docs/README.md`.
- **Causa**: Documentação escrita a partir de intenção de produto sem revalidação linha a linha com `App.tsx`; pequenos drift de implementação (ano, imports).
- **Solução**: Reescritos `structure.md` (ordem no DOM, arquivos na raiz, nota de versões no `package.json`), `copy.md` e `design-system.md` alinhados ao código; removidos imports mortos (`Phone`, `Stethoscope` duplicado); footer `© 2026`; `performance.md` (blur/z-index); `docs/README.md` e `docs/ai/*` harmonizados.
- **Prevenção**: Após alterar `App.tsx` em blocos de copy ou layout, atualizar na mesma PR `copy.md` e/ou `design-system.md` e, se a árvore ou ordem mudar, `structure.md`.

## Log #011: Estrutura front — layout, header na hero, CTAs e docs
- **Problema**: UI monolítica em `App.tsx` com padrões inconsistentes (eyebrows, H2, paddings, CTAs); header fixo no topo sem logo/selo em imagem; `pt-20` compensando header fixo; corpo `body` com cor de texto diferente da LP; sem pasta de componentes reutilizáveis.
- **Causa**: Evolução incremental sem camada de layout nem contrato visual único; requisitos de marca (logo + selo) ainda não modelados no código.
- **Solução**: Criados `Container`, `Section`, `SiteHeader` (logo + selo, scroll com a hero), `Eyebrow`, `SectionTitle`, `CtaButton`; constantes em `src/content/constants.ts`; placeholders SVG em `public/brand/` + README; hero unificada sem header fixo; `@theme` com cores semânticas e `.lp-prose`; tipografia de secção alinhada (H2, eyebrows); documentação atualizada (`structure`, `design-system`, `copy`, `performance`, log).
- **Prevenção**: Novos blocos devem usar `Section`/`Container` e `CtaButton`; alterar assets só via `constants.ts` ou substituindo ficheiros em `public/brand/`; após mudanças de DOM, atualizar `docs/structure.md` na mesma entrega.

## Log #012: Hero em duas colunas `Container bleed`, tipografia e cards compactos
- **Problema**: Hero usava um único `Container` empilhado; labels acima dos títulos (`Eyebrow`) muito pesadas (`font-black`) e com tracking excessivo; CTAs com tamanhos diferentes; cards da rede e FAQ desproporcionais ao resto da página.
- **Causa**: Escalas e espaçamentos herdados de iterações anteriores sem passo de uniformização visual.
- **Solução**: `Container` com prop `bleed` + hero em grelha com dois `Container bleed`; `Eyebrow` com `font-semibold` e `tracking-[0.12em]`; `SectionTitle` e H2 do CTA final reduzidos; `CtaButton` unificado num único perfil (`tracking-wide`, sombras leves); rede e FAQ com padding, raios e tipografia alinhados aos benefícios; `SiteHeader` mais compacto; docs de design/estrutura atualizadas.
- **Prevenção**: Evitar `tracking-[0.4em]+` e `font-black` em labels secundários; novos CTAs apenas via `CtaButton` sem classes ad hoc de tamanho.

## Log #013: Hero sem clipping, trust labels, rede e footer mais equilibrados
- **Problema**: Badge “Cuidado 44+” fora do `overflow-hidden` da foto cortava na hero; `lg:pb-18` inválido; `md:order-1` invertia colunas; labels “Certificado / Especialista” com tracking de eyebrow demasiado largo; cards da rede ainda volumosos; footer em `lg:grid-cols-4` com `col-span-2` gerava vazio e o subtítulo usava `tracking-[0.5em]`.
- **Causa**: Float absoluto do cartão fora do contentor com clip; refactor da grelha hero incompleto; reutilização de `eyebrowClassName` onde bastava caps curto; grid do rodapé pensado para conteúdo largo que não preenchia a coluna.
- **Solução**: Cartão e copy da imagem empilhados no canto inferior **dentro** do `aspect-[5/4]`; removido `md:order-1`; paddings hero com tokens válidos (`lg:pb-20`); trust row com `text-[9px] uppercase tracking-wide`; rede com padding e ícones ligeiramente menores; footer em três colunas + disclaimer centrado (`max-w-3xl`) e subtítulo com `tracking-[0.12em]`; `structure.md` alinhado ao DOM.
- **Prevenção**: Evitar elementos decorativos com `-bottom-*` negativo fora da caixa que tem `overflow-hidden` do pai da secção; validar classes Tailwind no build; para linhas curtas em caps, preferir `tracking-wide` a `tracking-[0.4em]+`.

## Log #015: Typebot, GTM, Clarity, rotas legais e refino de copy jurídica
- **Problema**: CTAs apontavam só para placeholder WhatsApp; faltava integração com o fluxo Typebot self-hosted (`flow.creativelane.com.br` / `enanda-cwb`); sem GTM/Clarity por variáveis de ambiente; termos/privacidade inexistentes como páginas.
- **Causa**: LP monolítica sem router nem camada de bootstrap para tags de terceiros.
- **Solução**: `react-router-dom` com `LandingPage`, `/termos`, `/privacidade` + `LegalLayout`; `lib/typebot.ts` com `initBubble` (botão oculto) e `openTypebot()`; `CtaButton` com prop `typebot`; `ClientBootstrap` para `VITE_GTM_CONTAINER_ID`, `VITE_CLARITY_PROJECT_ID` e `virtual_page_view`; `.env.example`; `public/_redirects` (Netlify); documentação (`structure`, `copy`, `design-system`) e páginas legais em pt-BR com menção a GTM/Clarity.
- **Prevenção**: Em deploy estático, garantir rewrite SPA (ex.: `_redirects`); nunca commitar `.env` com IDs sensíveis se a política interna proibir; validar juridicamente os textos de `/termos` e `/privacidade` antes de ir a produção.

## Log #017: Revisão de performance, documentação e deploy
- **Problema**: Bundle inicial incluía páginas legais pouco visitadas; hero pedia imagem Unsplash muito larga; faltavam dicas de rede (`preconnect`); documentação (`structure.md`, `performance.md`) desatualizada face ao DOM e ao SEO.
- **Causa**: Imports estáticos em `App.tsx`; URL única 2070px; HTML mínimo; docs não acompanharam refactors (footer minimal, `SeoHead`, `LegalLayout` com logo e rodapé).
- **Solução**: `React.lazy` + `Suspense` para `TermosPage` / `PrivacidadePage` + `LegalPageFallback`; `vite.build.rollupOptions.output.manualChunks` para `motion`; hero com `srcSet`/`sizes`, `width`/`height`, `fetchPriority`/`decoding`; `resize` do carrossel com `requestAnimationFrame` + `passive`; `preconnect`/`dns-prefetch` no `index.html`; `sourcemap: false` em produção; README + `docs/structure.md` + `docs/performance.md` alinhados.
- **Prevenção**: Após alterar rotas ou chunks, correr `npm run build` e rever tamanhos em `dist/assets/`; manter `VITE_SITE_URL` no pipeline de deploy para partilhas sociais; atualizar `structure.md` quando mudar secções ou layout global.

## Log #016: Typebot só por script CDN (sem pacote npm)
- **Problema**: O embed vinha do pacote `@typebot.io/js` no `node_modules`; o pedido era carregar como **código injetado** (snippet / CDN), alinhado ao painel Typebot.
- **Causa**: Integração inicial com `npm install @typebot.io/js` e `import('@typebot.io/js/web')`.
- **Solução**: Removida a dependência npm; `lib/typebot.ts` passa a usar `import(/* @vite-ignore */ url)` com URL padrão `https://cdn.jsdelivr.net/npm/@typebot.io/js@0.10.2/dist/web.js` (sobrescrevível com `VITE_TYPEBOT_JS_URL`); documentação e `.env.example` atualizados.
- **Prevenção**: Ao atualizar a major do viewer Typebot, alinhar a versão no URL do CDN ou fixar com `VITE_TYPEBOT_JS_URL` no deploy.
