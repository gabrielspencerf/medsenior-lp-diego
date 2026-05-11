# Regras de Manutenção e Documentação

Para garantir a evolução sustentável deste projeto, as seguintes regras devem ser seguidas rigorosamente em cada ciclo de alteração:

## 1. Revisão Obrigatória de Docs
Antes de iniciar qualquer alteração estrutural ou visual, o desenvolvedor (ou IA) deve revisar os arquivos:
- `docs/structure.md`: Para entender a arquitetura atual.
- `docs/design/design-system.md`: Para garantir consistência com a identidade visual.
- `docs/copy.md`: Para manter o tom de voz e a estratégia de conversão.

## 2. Atualização em Tempo Real
Toda mudança significativa deve ser refletida na documentação imediatamente:
- Se uma nova seção for criada -> `docs/structure.md` e `docs/design/design-system.md` devem ser atualizados.
- Se o tom de voz mudar -> `docs/copy.md` deve ser revisado.
- Problemas resolvidos -> Adicionar entrada em `docs/logs/fixes.md`.

## 3. Hierarquia Contida (Regra do "Big vs Refined")
- Evitar espaçamentos excessivos que quebrem a unidade visual. O padrão sugerido é `py-24` (96px) para seções e gaps de `mb-10` a `mb-12` para títulos grandes.
- Títulos muito grandes (`text-7xl+`) devem ser usados com parcimônia (apenas no Hero ou seções de impacto extremo). O padrão de navegação deve ser focado em `text-4xl` a `text-5xl` para seções secundárias.

## 4. Log de Erros
O arquivo `docs/logs/fixes.md` deve conter obrigatoriamente:
- **Problema**: Descrição clara do que estava errado.
- **Causa**: Diagnóstico técnico do porquê o erro ocorreu.
- **Solução**: Passo a passo da correção.
- **Prevenção**: O que fazer para não ocorrer novamente.
