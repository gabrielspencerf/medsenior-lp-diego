import type { MarketContent } from '../types';

export const recifeMarketContent: MarketContent = {
  id: 'recife',
  hero: {
    badge: 'MedSênior • Planos em Recife 44+',
    titleLeading: 'MedSênior',
    titleEmphasis: '44+',
    imageAlt: 'Atendimento humanizado MedSênior em Recife',
    description:
      'Assistência à saúde exclusiva para público 44+ em Recife, com cuidado continuado, rede credenciada e medicina preventiva.',
    highlights: ['Unidade Própria', 'Rede Credenciada Referência'],
    ctaLabel: 'Quero Cotar',
    locationChip: 'Recife e região metropolitana',
    consultingChip: 'Consultoria especializada sem custo',
    overlayEyebrow: 'Recife e Pernambuco',
    overlayTitle: 'Cuidado continuado de verdade com unidade própria e rede de apoio.',
  },
  plansSection: {
    eyebrow: 'Planos',
    title: 'Planos para a sua melhor fase',
    description: 'Compare as modalidades e escolha a cobertura ideal para o seu perfil em Recife.',
    plans: [
      {
        title: 'Black',
        badge: 'Premium',
        technical: 'Apartamento | ANS 502.795/25-1',
        description:
          'Modalidade premium com rede de referência e maior abrangência nacional, mantendo foco em atendimento personalizado.',
        highlights: ['Rede credenciada selecionada', 'Apartamento individual', 'Reembolso diferenciado'],
        area: 'DF, ES, MG, PR, RJ, RS, SP e PE',
        cta: 'Cotar Black',
        planTheme: 'premium-black',
        ctaVariant: 'dark',
      },
      {
        title: 'REC 2',
        badge: 'Privacidade',
        technical: 'Apartamento | ANS 502.796/25-9',
        description:
          'Apartamento com privacidade nas internações e ampla rede local, pensado para uma recuperação mais tranquila.',
        highlights: ['Sem coparticipação', 'Oficinas de saúde', 'Telemedicina 24h'],
        area: 'Recife (PE)',
        cta: 'Cotar REC 2',
        planTheme: 'standard',
        ctaVariant: 'muted',
      },
      {
        title: 'REC 1',
        badge: 'Rede Ampla',
        technical: 'Enfermaria | ANS 502.797/25-7',
        description:
          'Plano em enfermaria com boa rede credenciada em Recife, equilibrando acesso a serviços e mensalidade acessível.',
        highlights: ['Sem coparticipação', 'Oficinas de saúde', 'Telemedicina 24h'],
        area: 'Recife (PE)',
        cta: 'Cotar REC 1',
        planTheme: 'standard',
        ctaVariant: 'muted',
      },
    ],
  },
  ecosystemSection: {
    eyebrow: 'Muito mais que um plano de saúde',
    titleLeading: 'Cuidado 44+ com',
    titleEmphasis: 'atendimento humanizado.',
    description:
      'Com equipe dedicada, programas de promoção à saúde e suporte preventivo contínuo para quem busca tranquilidade no dia a dia.',
    ctaLabel: 'Consultar com especialista',
    diferencialImageAlt: 'Diferenciais MedSênior em Recife — rede própria e cuidado preventivo',
    benefits: [
      {
        title: 'Carência Zero*',
        description: 'Quando elegível, migre com aproveitamento e sem reinício integral de prazos.',
        micro: 'Consulte regras de elegibilidade.',
        icon: 'clock',
      },
      {
        title: 'Sem Coparticipação',
        description: 'Consultas e exames incluídos, sem cobrança extra por utilização.',
        icon: 'activity',
      },
      {
        title: 'Oficinas de Saúde',
        description: 'Atividades de estímulo físico e cognitivo para qualidade de vida contínua.',
        icon: 'users',
      },
      {
        title: 'Medicina Preventiva',
        description: 'Acompanhamento ativo para antecipar riscos e manter seu cuidado em dia.',
        icon: 'shield',
      },
    ],
  },
  networkSection: {
    eyebrow: 'Estrutura em Recife',
    title: 'Rede Credenciada em Recife',
    description: 'Hospitais de referência, laboratórios parceiros e diferenciais exclusivos para o público 44+.',
    cards: [
      {
        title: 'Hospitais Destaque',
        icon: 'stethoscope',
        accent: 'lime',
        items: ['Hospital Português', 'Hospital Santa Joana', 'Hospital Esperança', 'Hospital Memorial São José'],
      },
      {
        title: 'Laboratórios',
        icon: 'activity',
        accent: 'green',
        items: ['A+ Medicina Diagnóstica', 'Cerpe', 'Dasa Diagnóstico'],
      },
      {
        title: 'Diferenciais',
        icon: 'building',
        accent: 'deep',
        description: 'Rede própria e credenciada com foco no cuidado próximo e preventivo.',
        items: ['Acompanhamento Preventivo', 'Rede própria em Recife', 'Atendimento humanizado'],
        ctaLabel: 'Consultar via WhatsApp',
      },
    ],
  },
  faqSection: {
    eyebrow: 'Assistência',
    title: 'Perguntas Frequentes',
    items: [
      {
        q: 'MedSênior atende em Recife?',
        a: 'Sim. A MedSênior possui operação em Recife com rede credenciada local e estrutura voltada ao público 44+.',
      },
      {
        q: 'Os planos têm coparticipação?',
        a: 'As modalidades destacadas nesta página funcionam sem coparticipação, conforme condições de contratação.',
      },
      {
        q: 'Como funciona a carência zero?',
        a: 'A carência zero pode ser aplicada em situações elegíveis, especialmente em migração de plano, respeitando as regras vigentes.',
      },
      {
        q: 'Como faço uma cotação em Recife?',
        a: 'Clique em qualquer CTA da página para abrir o atendimento e falar com um consultor especialista na praça de Recife.',
      },
    ],
  },
};
