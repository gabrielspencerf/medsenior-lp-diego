/** Google Tag Manager — ID do contentor (também em `index.html`). */
export const GTM_CONTAINER_ID =
  (import.meta.env.VITE_GTM_CONTAINER_ID as string | undefined)?.trim() || 'GTM-55NRX6NH';

/** Link direto WhatsApp (reserva se o Typebot não estiver configurado). */
export const WHATSAPP_URL = (import.meta.env.VITE_WHATSAPP_URL as string | undefined)?.trim() ?? '';

/** Viewer/API pública do Typebot (sem barra final). Padrão: instância Creative Lane deste projeto. */
export const TYPEBOT_API_HOST =
  (import.meta.env.VITE_TYPEBOT_API_HOST as string | undefined)?.replace(/\/$/, '').trim() ||
  'https://flow.creativelane.com.br';

/** ID público do fluxo (slug na URL). Padrão: `enanda-cwb`. */
export const TYPEBOT_PUBLIC_ID =
  (import.meta.env.VITE_TYPEBOT_PUBLIC_ID as string | undefined)?.trim() || 'enanda-cwb';

export const TYPEBOT_CONFIGURED = Boolean(TYPEBOT_API_HOST && TYPEBOT_PUBLIC_ID);

/** Logo BrasCare horizontal (WebP em `public/brand/`). */
export const BRAND_LOGO_SRC = '/brand/brascare-logotipo-horizontal.webp';

/** Selo MedSênior (parceiro autorizado) — WebP em `public/brand/`. */
export const BRAND_SEAL_SRC = '/brand/medsenior-selo.webp';
