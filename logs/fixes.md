# Registro de Correções e Melhorias (Logs)

## Log #001: Implementação do Carrossel Interativo
- **Problema**: O carrossel de planos era estático e ocupava muito espaço vertical em dispositivos móveis.
- **Causa**: Grid padrão (`grid-cols-4`) força todos os itens a serem visíveis, criando quebras de linha indesejadas ou compressão excessiva.
- **Solução**: Implementado carrossel horizontal com `framer-motion`, utilizando `drag="x"` e `animate` baseado em `focusedIndex`.
- **Prevenção**: Sempre utilizar sistemas de overflow ou carrosséis para listas de planos/cards superiores a 3 itens para manter a elegância e interatividade.

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
