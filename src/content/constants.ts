const ACTIVE_MARKET = ((import.meta.env.VITE_MARKET as string | undefined)?.toLowerCase() || 'curitiba') as
  | 'curitiba'
  | 'recife';

/** Google Tag Manager — ID por praça com fallback para `VITE_GTM_CONTAINER_ID`. */
const gtmByMarket: Record<'curitiba' | 'recife', string> = {
  curitiba: (import.meta.env.VITE_GTM_CONTAINER_ID_CURITIBA as string | undefined)?.trim() ?? '',
  recife: (import.meta.env.VITE_GTM_CONTAINER_ID_RECIFE as string | undefined)?.trim() ?? '',
};
export const GTM_CONTAINER_ID =
  gtmByMarket[ACTIVE_MARKET] ||
  (import.meta.env.VITE_GTM_CONTAINER_ID as string | undefined)?.trim() ||
  '';

/** Link direto WhatsApp (reserva se o Typebot não estiver configurado). */
export const WHATSAPP_URL = (import.meta.env.VITE_WHATSAPP_URL as string | undefined)?.trim() ?? '';

/** Viewer/API pública do Typebot (sem barra final). */
export const TYPEBOT_API_HOST =
  (import.meta.env.VITE_TYPEBOT_API_HOST as string | undefined)?.replace(/\/$/, '').trim() ?? '';

/** ID público do Typebot por praça com fallback para `VITE_TYPEBOT_PUBLIC_ID`. */
const typebotByMarket: Record<'curitiba' | 'recife', string> = {
  curitiba: (import.meta.env.VITE_TYPEBOT_PUBLIC_ID_CURITIBA as string | undefined)?.trim() ?? '',
  recife: (import.meta.env.VITE_TYPEBOT_PUBLIC_ID_RECIFE as string | undefined)?.trim() ?? '',
};
export const TYPEBOT_PUBLIC_ID =
  typebotByMarket[ACTIVE_MARKET] ||
  (import.meta.env.VITE_TYPEBOT_PUBLIC_ID as string | undefined)?.trim() ||
  'medseniordiego';

export const TYPEBOT_CONFIGURED = Boolean(TYPEBOT_API_HOST && TYPEBOT_PUBLIC_ID);

/** Logo BrasCare horizontal (WebP em `public/brand/`). */
export const BRAND_LOGO_SRC = '/brand/brascare-logotipo-horizontal.webp';

/** Selo MedSênior (parceiro autorizado) — WebP em `public/brand/`. */
export const BRAND_SEAL_SRC = '/brand/medsenior-selo.webp';

/** Foto principal da hero — WebP em `public/brand/`. */
export const LANDING_HERO_IMAGE_SRC = '/brand/medsenior-hero.webp';

/** Visual da secção ecossistema/diferencial — WebP em `public/brand/`. */
export const LANDING_DIFFERENCIAL_IMAGE_SRC = '/brand/medsenior-diferencial.webp';
