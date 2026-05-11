# Registro de Correções e Melhorias (Logs)

## Log #001: Implementação do Carrossel Interativo
- **Problema**: O carrossel de planos era estático e ocupava muito espaço vertical em dispositivos móveis, e posteriormente apresentava transições bruscas em telas menores.
- **Causa**: Grid padrão limitava a visualização; cálculos de animação fixos não acompanhavam as variações de largura de tela (`vw`).
- **Solução**: Implementado carrossel horizontal com `framer-motion`, utilizando `drag="x"`. Refinado com `window.innerWidth` dinâmico para os cálculos de `x` e `dragConstraints`, além de ajustar a largura dos cards para `78vw` para permitir um "peek-ahead" (visualização prévia do próximo item) mais natural.
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
