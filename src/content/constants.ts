/** Google Tag Manager — ID único da praça ativa. */
export const GTM_CONTAINER_ID = (import.meta.env.VITE_GTM_CONTAINER_ID as string | undefined)?.trim() || '';

/** Link direto WhatsApp (reserva se o Typebot não estiver configurado). */
export const WHATSAPP_URL = (import.meta.env.VITE_WHATSAPP_URL as string | undefined)?.trim() ?? '';

/** API host fixo do Typebot para o projeto. */
export const TYPEBOT_API_HOST = 'https://flow.creativelane.com.br';

/** ID público do Typebot da praça ativa. */
export const TYPEBOT_PUBLIC_ID = (import.meta.env.VITE_TYPEBOT_PUBLIC_ID as string | undefined)?.trim() || '';

export const TYPEBOT_CONFIGURED = Boolean(TYPEBOT_PUBLIC_ID);

/** Logo BrasCare horizontal (WebP em `public/brand/`). */
export const BRAND_LOGO_SRC = '/brand/brascare-logotipo-horizontal.webp';

/** Selo MedSênior (parceiro autorizado) — WebP em `public/brand/`. */
export const BRAND_SEAL_SRC = '/brand/medsenior-selo.webp';

/** Foto principal da hero — WebP em `public/brand/`. */
export const LANDING_HERO_IMAGE_SRC = '/brand/medsenior-hero.webp';

/** Visual da secção ecossistema/diferencial — WebP em `public/brand/`. */
export const LANDING_DIFFERENCIAL_IMAGE_SRC = '/brand/medsenior-diferencial.webp';
