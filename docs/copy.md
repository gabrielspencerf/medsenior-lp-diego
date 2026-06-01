# Copy — BrasCare MedSênior (Curitiba)

Estrutura narrativa e texto da landing. **Fonte de exibição:** `src/pages/LandingPage.tsx`. Este arquivo descreve intenção e strings de referência; ao alterar mensagens no código, atualize também aqui.

## Tom de voz

- **Premium e exclusivo** — consultoria de alto padrão, sem tom massificado.
- **Autoridade local** — Curitiba e região quando fizer sentido comercial.
- **Tranquilidade financeira** — “sem coparticipação”, previsibilidade.
- **Preventivo / 44+** — longevidade ativa, oficinas, acompanhamento.

## Marca vs razão social

- Interface: **BrasCare** — no topo da página a marca aparece sobretudo pelo **logo em imagem** (`SiteHeader`); o reforço textual “BrasCare” + “Consultoria Autorizada MedSênior” continua no **footer**.
- Rodapé legal: texto da corretora como em `LandingPage.tsx` (“Brascare Saúde e Corretora…”, CNPJ **45.949.883/0001-19**). Não alterar dados legais sem validação jurídica/comercial.

---

## Por seção (alinhado ao código)

### 1. Barra de marca (topo da hero)

- **Logo** (esquerda): asset horizontal WebP (`brascare-logotipo-horizontal.webp` via `BRAND_LOGO_SRC`); `alt` reflete marca e tagline visíveis no ficheiro.
- **Selo** (direita): `medsenior-selo.webp` via `BRAND_SEAL_SRC`; `alt` informativo (parceiro MedSênior autorizado).
- A barra **não é fixa**: rola com a hero.

### 2. Hero (conteúdo abaixo da barra)

| Elemento | Texto em `LandingPage.tsx` | Intenção |
|----------|-------------------|----------|
| Pill | `MedSênior Curitiba • Premium 44+` | Geografia + posicionamento 44+. |
| H1 | `Plano de Saúde` + linha em itálico `sem coparticipação.` | Benefício principal na primeira dobra. |
| Subtítulo | `Exclusividade em Curitiba para quem busca previsibilidade, rede hospitalar selecionada e medicina preventiva de elite.` | Filtra público e reforça rede + preventivo. |
| CTA | `Consultar Tabela` | Ação comercial sem prometer valores fixos no ar. |
| Microcredenciais | `Certificado Adquire`, `Especialista MedSênior` | Confiança / canal especializado. |
| Sobre a imagem | label `Localização Estratégica` + `Unidade Própria em Curitiba focada em longevidade ativa.` | Ancoragem física. |
| Badge animado | `Especialidade` / `Cuidado 44+` | Reforço do público. |

**Atendimento (Typebot):** com `VITE_TYPEBOT_API_HOST` e `VITE_TYPEBOT_PUBLIC_ID` definidos (ver [`.env.example`](../.env.example)), o embed carrega pelo **CDN** (painel “HTML & Javascript”); o **único** botão circular fixo no canto é o launcher nativo do Typebot. Os CTAs chamam `openTypebot()` para abrir o chat. Sem Typebot no `.env`, não há launcher; os CTAs podem usar `VITE_WHATSAPP_URL` como fallback.

**WhatsApp de reserva:** `VITE_WHATSAPP_URL` em [`.env.example`](../.env.example) / [`src/content/constants.ts`](../src/content/constants.ts) (`WHATSAPP_URL`).

### 3. Planos (`#planos`)

- Eyebrow: `Nossos Planos`.
- Título: `Escolha o MedSênior` + `ideal para Curitiba`.
- **Infinite** — badge `Inovação`; técnico `Exclusividade | Sob Consulta`; área `Consulte disponibilidade para Curitiba`; CTA `Cotar Infinite`.
- **Black** — badge `Premium`; técnico com ANS **502.795/25-1**; área `DF, ES, MG, PR, RJ, RS, SP e PE`; CTA `Cotar Black`.
- **PR4** — badge `Privacidade`; ANS **492.173/22-9**; área `Campo Largo, Curitiba e S. J. dos Pinhais (PR)`; CTA `Cotar PR4`.
- **PR3** — badge `Rede Ampla`; ANS **492.174/22-7**; mesma área que PR4; CTA `Cotar PR3`.

Os CTAs dos cards usam o mesmo canal de atendimento (Typebot quando configurado; caso contrário fallback para WhatsApp se definido).

### 4. Benefícios

- Eyebrow: `Ecossistema MedSênior`.
- Título: `O padrão ouro em` + `medicina preventiva.` (itálico).
- Parágrafo de apoio: `Criado para quem entende que a saúde é o maior ativo. Nosso modelo de cuidado ativo foca em longevidade com qualidade, reduzindo surpresas e garantindo conforto.`
- Cards (títulos): `Carência Zero*`, `Sem Coparticipação`, `Oficinas de Saúde`, `Medicina Preventiva` (corpos conforme arrays `benefits` no código).
- CTA: `Falar com Especialista`.

### 5. Rede (`#rede`)

- Eyebrow: `Infraestrutura em Curitiba`.
- Título: `Rede de Excelência`.
- Subtítulo: `Hospitais de referência, centros de diagnóstico e a nossa unidade exclusiva no coração da cidade.`
- Colunas: títulos `Hospitais`, `Diagnóstico`, `Unidade Própria`; listas e CTA `Consultar via WhatsApp` (abre o mesmo canal Typebot / fallback que os restantes CTAs).

### 6. FAQ

- Eyebrow: `Assistência`.
- Título: `Perguntas Frequentes`.
- Perguntas/respostas: array `faqItems` no código (Curitiba, coparticipação, carência zero, cotação — inclui menção ao assistente de conversa no canto da página).

### 7. CTA final

- Título: `Fale com um consultor` + `MedSênior 44+`.
- Parágrafo: `Receba orientação sobre planos disponíveis em Curitiba, cobertura, rede credenciada e contratação segura.`
- Botão: `Solicitar cotação agora`.
- Linha final: `Atendimento comercial simples, rápido e sem compromisso.`

### 8. Footer

- Subtítulo marca: `Consultoria Autorizada MedSênior`.
- Navegação: `Portfólio de Planos`, `Infraestrutura Médica`, `Consultoria Online` (abre atendimento).
- Links legais: `Privacidade` → `/privacidade`, `Termos` → `/termos`.
- Disclaimer completo no código (responsabilidade da corretora, não operadora).
- Copyright: `© 2026 – BrasCare Saúde` (ano alinhado à manutenção do site; atualizar anualmente se política do negócio exigir).
- Tagline inferior: `MedSênior Curitiba • Inteligência em Seguros Saúde`.

---

## Gatilhos mentais (resumo)

1. Especificidade geográfica (Curitiba / PR).
2. Segurança e canal autorizado.
3. Alívio: sem coparticipação nos planos posicionados assim.
4. Pertencimento: 44+, “ideal para Curitiba”.
5. CTAs com lima `#B8DC6F` e verde `#063D24` — contraste forte sem “neon”.
