# Regras de manutenção e documentação

Para evolução sustentável da landing, siga estas regras em cada ciclo de alteração.

## 1. Revisão obrigatória de docs

Antes de alterações estruturais, visuais ou de copy, revisar:

- [docs/README.md](./README.md) — mapa atualizado da pasta `docs`.
- [docs/structure.md](./structure.md) — stack e seções reais.
- [docs/design/design-system.md](./design/design-system.md) — identidade e padrões por seção.
- [docs/copy.md](./copy.md) — tom e mensagens por seção.

Se a mudança impactar **tempo de carregamento**, **imagens** ou **bundle**: [docs/performance.md](./performance.md).

Se o trabalho for feito por **IA**: [docs/ai/README.md](./ai/README.md) e o arquivo da ferramenta correspondente (`cursor`, `claude`, `gpt`).

## 2. Atualização em tempo real

- Nova seção ou mudança de arquitetura de pastas → `docs/structure.md` + `docs/design/design-system.md` (+ `docs/copy.md` se houver texto novo). Incluir `src/components/` e `public/brand/` quando afetados.
- Mudança de tom, claims ou hierarquia de mensagens → `docs/copy.md`.
- Novo padrão visual global (cor, tipo, espaçamento) → `docs/design/design-system.md`.
- Problema corrigido (bug, regressão, decisão técnica relevante) → entrada em [docs/logs/fixes.md](./logs/fixes.md) com **Problema**, **Causa**, **Solução**, **Prevenção**.
- Novo documento em `docs/` → adicionar linha na tabela de [docs/README.md](./README.md).

## 3. Hierarquia contida (regra “Big vs Refined”)

- Evitar espaçamentos que quebrem a unidade visual: padrão de seção `py-16`–`py-24` conforme breakpoint; hero pode usar `py-12` no mobile.
- Títulos muito grandes (`text-7xl+`) só com justificativa (ex.: hero); seções internas preferir `text-3xl`–`text-5xl` / `text-6xl` em destaque único.
- Corpo de texto com opacidade controlada (`opacity-70`–`90`) para hierarquia clara frente ao título.

## 4. Log de erros e melhorias

O arquivo `docs/logs/fixes.md` deve registrar, para cada entrada relevante:

1. **Problema** — o que o usuário ou o build percebiam de errado.  
2. **Causa** — diagnóstico técnico.  
3. **Solução** — o que foi feito (pode referenciar commit ou arquivo).  
4. **Prevenção** — como evitar recidiva.

Não usar o log para ideias futuras não implementadas; isso vai para issues ou notas de produto.
