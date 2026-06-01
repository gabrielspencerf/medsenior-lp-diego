import type { MarketContent } from '../types';

export const curitibaMarketContent: MarketContent = {
  id: 'curitiba',
  hero: {
    badge: 'MedSênior • Planos em Curitiba 44+',
    titleLeading: 'Plano de Saúde',
    titleEmphasis: 'sem coparticipação.',
    imageAlt: 'Atendimento humanizado MedSênior em Curitiba',
    description:
      'Exclusividade em Curitiba para quem busca previsibilidade, rede hospitalar selecionada e medicina preventiva de elite.',
    ctaLabel: 'Consultar Tabela',
    locationChip: 'Curitiba e Grande Curitiba',
    consultingChip: 'Orientação comercial sem custo',
    overlayEyebrow: 'Localização Estratégica',
    overlayTitle: 'Unidade Própria em Curitiba focada em longevidade ativa.',
  },
  plansSection: {
    eyebrow: 'Planos',
    title: 'MedSênior em Curitiba',
    description: 'Compare as linhas e peça orientação comercial quando quiser avançar.',
    plans: [
      {
        title: 'Infinite',
        badge: 'Inovação',
        technical: 'Exclusividade | Sob Consulta',
        description:
          'Plano premium MedSênior para quem busca uma experiência de cuidado mais completa, com rede selecionada e atendimento diferenciado.',
        highlights: ['Atendimento VIP', 'Rede Exclusiva', 'Gestão de Saúde'],
        area: 'Consulte disponibilidade para Curitiba',
        cta: 'Cotar Infinite',
        planTheme: 'premium-dark',
        ctaVariant: 'gradient',
      },
      {
        title: 'Black',
        badge: 'Premium',
        technical: 'Apartamento | ANS 502.795/25-1',
        description:
          'Segmento premium da MedSênior, com hospitais e clínicas de primeira linha, suporte a procedimentos complexos e atendimento mais personalizado.',
        highlights: ['Rede credenciada selecionada', 'Apartamento individual', 'Reembolso diferenciado'],
        area: 'DF, ES, MG, PR, RJ, RS, SP e PE',
        cta: 'Cotar Black',
        planTheme: 'premium-black',
        ctaVariant: 'dark',
      },
      {
        title: 'PR4',
        badge: 'Privacidade',
        technical: 'Apartamento | ANS 492.173/22-9',
        description:
          'Plano com acomodação em apartamento para quem busca mais privacidade em caso de internação, com rede credenciada ampla e foco em recuperação tranquila.',
        highlights: ['Sem coparticipação', 'Oficinas de saúde', 'Telemedicina 24h'],
        area: 'Campo Largo, Curitiba e S. J. dos Pinhais (PR)',
        cta: 'Cotar PR4',
        planTheme: 'standard',
        ctaVariant: 'muted',
      },
      {
        title: 'PR3',
        badge: 'Rede Ampla',
        technical: 'Enfermaria | ANS 492.174/22-7',
        description:
          'Opção com mensalidade mais acessível, cobertura ambulatorial e hospitalar, rede credenciada ampla e médicos de referência à disposição.',
        highlights: ['Sem coparticipação', 'Oficinas de saúde', 'Telemedicina 24h'],
        area: 'Campo Largo, Curitiba e S. J. dos Pinhais (PR)',
        cta: 'Cotar PR3',
        planTheme: 'standard',
        ctaVariant: 'muted',
      },
    ],
  },
  ecosystemSection: {
    eyebrow: 'Ecossistema MedSênior',
    titleLeading: 'O padrão ouro em',
    titleEmphasis: 'medicina preventiva.',
    description:
      'Criado para quem entende que a saúde é o maior ativo. Nosso modelo de cuidado ativo foca em longevidade com qualidade, reduzindo surpresas e garantindo conforto.',
    ctaLabel: 'Falar com Especialista',
    diferencialImageAlt: 'Diferenciais MedSênior em Curitiba — cuidado preventivo e bem-estar',
    benefits: [
      {
        title: 'Carência Zero*',
        description: 'Para quem faz portabilidade de outro plano, sem cumprir novos prazos, exceto CPT.',
        micro: 'Sujeito às regras da operadora.',
        icon: 'clock',
      },
      {
        title: 'Sem Coparticipação',
        description: 'Consultas, exames e procedimentos cobertos sem cobrança extra por utilização.',
        icon: 'activity',
      },
      {
        title: 'Oficinas de Saúde',
        description: 'Arte, nutrição, dança e memória para estimular rotina ativa e bem-estar.',
        icon: 'users',
      },
      {
        title: 'Medicina Preventiva',
        description: 'Acompanhamento contínuo para identificar riscos cedo e promover qualidade de vida.',
        icon: 'shield',
      },
    ],
  },
  networkSection: {
    eyebrow: 'Infraestrutura em Curitiba',
    title: 'Rede de Excelência',
    description: 'Hospitais de referência, centros de diagnóstico e a nossa unidade exclusiva no coração da cidade.',
    cards: [
      {
        title: 'Hospitais',
        icon: 'stethoscope',
        accent: 'lime',
        items: [
          'Hospital Santa Casa de Curitiba',
          'Hospital XV',
          'Hospital Vita Curitiba',
          'Hospital da Maternidade Brígida',
          'Hospital Ônix Batel',
        ],
      },
      {
        title: 'Diagnóstico',
        icon: 'activity',
        accent: 'green',
        items: ['Fischmann Aisengart', 'Lanc Laboratório', 'DAPI Diagnóstico', 'CETAC'],
      },
      {
        title: 'Unidade Própria',
        icon: 'building',
        accent: 'deep',
        description: 'Cuidado multidisciplinar com oficinas de saúde e acompanhamento preventivo personalizado.',
        items: [
          'Unidade MedSênior Curitiba',
          'Oficinas de Arte e Terapia',
          'Programas de Nutrição',
          'Medicina Preventiva',
        ],
        ctaLabel: 'Consultar via WhatsApp',
      },
    ],
  },
  faqSection: {
    eyebrow: 'Assistência',
    title: 'Perguntas Frequentes',
    items: [
      {
        q: 'MedSênior atende em Curitiba?',
        a: 'Sim. A MedSênior possui atendimento em Curitiba e região, com rede credenciada e unidade própria para clientes.',
      },
      {
        q: 'O plano tem coparticipação?',
        a: 'Os planos destacados trabalham com mensalidade sem coparticipação, conforme condições comerciais e cobertura contratada.',
      },
      {
        q: 'O que significa carência zero?',
        a: 'A possibilidade de carência zero se aplica principalmente em casos de portabilidade de outro plano, exceto CPT, conforme regras da operadora e legislação vigente.',
      },
      {
        q: 'Como faço uma cotação?',
        a: 'Use qualquer botão de consultoria ou o ícone de conversa no canto da página para falar com um consultor sobre opções disponíveis em Curitiba.',
      },
    ],
  },
};
