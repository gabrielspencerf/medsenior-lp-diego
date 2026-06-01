export type MarketSlug = 'curitiba' | 'recife';

export type PlanTheme = 'premium-dark' | 'premium-black' | 'standard';
export type PlanCtaVariant = 'gradient' | 'dark' | 'muted';

export type BenefitIcon = 'clock' | 'activity' | 'users' | 'shield';
export type NetworkIcon = 'stethoscope' | 'activity' | 'building';
export type NetworkAccent = 'lime' | 'green' | 'deep';

export type HeroContent = {
  badge: string;
  titleLeading: string;
  titleEmphasis: string;
  imageAlt: string;
  description: string;
  highlights: string[];
  ctaLabel: string;
  locationChip: string;
  consultingChip: string;
  overlayEyebrow: string;
  overlayTitle: string;
};

export type PlanContent = {
  title: string;
  badge: string;
  technical: string;
  description: string;
  highlights: string[];
  area: string;
  cta: string;
  planTheme: PlanTheme;
  ctaVariant: PlanCtaVariant;
};

export type PlansSectionContent = {
  eyebrow: string;
  title: string;
  description: string;
  plans: PlanContent[];
};

export type BenefitContent = {
  title: string;
  description: string;
  micro?: string;
  icon: BenefitIcon;
};

export type EcosystemSectionContent = {
  eyebrow: string;
  titleLeading: string;
  titleEmphasis: string;
  description: string;
  ctaLabel: string;
  diferencialImageAlt: string;
  benefits: BenefitContent[];
};

export type NetworkCardContent = {
  title: string;
  description?: string;
  items: string[];
  icon: NetworkIcon;
  accent: NetworkAccent;
  ctaLabel?: string;
};

export type NetworkSectionContent = {
  eyebrow: string;
  title: string;
  description: string;
  cards: NetworkCardContent[];
};

export type FaqItem = {
  q: string;
  a: string;
};

export type FaqSectionContent = {
  eyebrow: string;
  title: string;
  items: FaqItem[];
};

export type MarketContent = {
  id: MarketSlug;
  hero: HeroContent;
  plansSection: PlansSectionContent;
  ecosystemSection: EcosystemSectionContent;
  networkSection: NetworkSectionContent;
  faqSection: FaqSectionContent;
};
