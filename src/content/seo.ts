import { SITE_URL } from './legal';

/** URL pública (https://…, sem barra final). */
export function getSiteOrigin(): string {
  if (typeof window !== 'undefined' && window.location?.origin) {
    const runtime = window.location.origin.replace(/\/$/, '');
    if (runtime.startsWith('http')) return runtime;
  }
  return SITE_URL;
}

export const SEO_SITE_NAME = 'BrasCare';

const HOME_TITLE = 'MedSênior Curitiba — planos 44+ sem coparticipação';
const HOME_DESCRIPTION =
  'Planos MedSênior em Curitiba e região: sem coparticipação, rede hospitalar selecionada e medicina preventiva. Orientação comercial BrasCare.';

export const SEO_DEFAULT = {
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  keywords:
    'MedSênior, plano de saúde Curitiba, plano 44+, sem coparticipação, BrasCare, corretora de seguros saúde, Curitiba, Grande Curitiba',
  /** Caminho em `public/` — URL absoluta montada com `getSiteOrigin()`. */
  ogImagePath: '/brand/brascare-logotipo-horizontal.webp',
};

export type SeoPage = { title: string; description: string };

export const SEO_BY_PATH: Record<string, SeoPage> = {
  '/': {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
  },
  '/termos': {
    title: 'Termos de uso',
    description:
      'Termos de uso do site BrasCare MedSênior Curitiba: condições de acesso, natureza informativa do conteúdo e uso do site.',
  },
  '/privacidade': {
    title: 'Política de privacidade',
    description:
      'Política de privacidade e LGPD do site BrasCare: dados coletados, finalidades, cookies, direitos do titular e contato.',
  },
};

export function normalizePathname(pathname: string): string {
  if (!pathname || pathname === '/') return '/';
  return pathname.replace(/\/+$/, '') || '/';
}

export function buildDocumentTitle(pageTitle: string): string {
  if (pageTitle === HOME_TITLE) return `${HOME_TITLE} | ${SEO_SITE_NAME}`;
  return `${pageTitle} | ${SEO_SITE_NAME}`;
}

export function getSeoForPath(pathname: string): SeoPage {
  const key = normalizePathname(pathname);
  return SEO_BY_PATH[key] ?? SEO_BY_PATH['/']!;
}
