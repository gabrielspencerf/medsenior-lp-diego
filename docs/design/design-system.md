# Design System - BrasCare MedSênior

Regras de identidade visual e regras por sessão.

## Identidade Visual Global
- **Tipografia**: Montserrat (Sans-serif).
  - Pesos: 300, 400 (Regular), 500 (Medium), 600 (Semi-bold), 700 (Bold), 800 (Extra-bold), 900 (Black).
- **Cores**:
  - Primária: `#063D24` (Verde MedSênior Profundo).
  - Acento: `#0D6B3C` (Verde Médio vibrante).
  - Destaque: `#B8DC6F` (Verde Lima claro).
  - **Call to Action (CTA)**: 
    - Cor Primária: `#B8DC6F` (Verde Lima) para conversão vibrante mas elegante.
    - Cor Secundária: `#063D24` (Verde Escuro) para ações auxiliares.
    - Regra: Sempre `rounded-full`, com estados `hover:scale-105` e `active:scale-95`.
- **Espaçamento**:
  - Seções (Desktop): `py-24` (96px).
  - Seções (Mobile): `py-16` (64px) ou `py-12` (48px) para o Hero.
  - Margin entre títulos e corpo: Variável entre `mb-6` (mobile) e `mb-12` (desktop).

## Regras por Sessão

### 1. Header (Navegação)
- **Fundo**: `bg-white/80` com `backdrop-blur-md` para transparência elegante.
- **CTA**: Botão `rounded-full` com sombra leve.
- **Texto**: `text-[9px]` para links, mantendo a sofisticação.

### 2. Hero Section
- **Título**: `text-3xl` (mobile) / `text-[56px]` (desktop) com `leading-[1.1]` e `tracking-tight`. Uso de `italic font-medium` para ênfase.
- **Parágrafo**: `text-sm` (mobile) / `text-base` (desktop), `opacity-70`.
- **CTA Principal**: Botão `rounded-full` com `shadow-2xl`.

### 3. Planos (Carrossel)
- **Cards**: `rounded-[32px]` (mobile) / `rounded-[40px]` (desktop), `p-8` (mobile) / `p-10` (desktop), `h-[560px]` (mobile) / `h-[580px]` (desktop).
- **Interação**: O card focado recebe `ring-1 ring-[#0D6B3C]/20` e `shadow-400`. Largura dinâmica de `78vw` em mobile para garantir visualização do próximo card.
- **Hierarquia**: Badge superior discreto e título `text-3xl`.

### 4. Diferenciais (Benefícios)
- **Grade**: Benta grid simplificada com ícones em containers `rounded-3xl`.
- **Hover**: Mudança de cor do ícone no hover do card pai.

### 5. Rede Credenciada
- **Cards**: Bordas arredondadas exageradas (`rounded-[48px]`) para passar sensação de acolhimento moderno.
- **Listas**: Marcadores customizados de 6px com animação de `scale-x` no hover.

### 6. FAQ
- **Acordeão**: `rounded-[32px]`, sombras mínimas, abertura suave com Framer Motion.
- **Hierarquia**: Título da pergunta em `text-lg font-bold`.

### 7. Footer
- **Estilo**: Inversão de cores (Fundo escuro `#063D24`).
- **Legal**: Disclaimer em `text-[10px]` para não competir com a navegação.
