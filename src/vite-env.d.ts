/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MARKET?: 'curitiba' | 'recife';
  readonly VITE_SITE_URL?: string;
  readonly VITE_WHATSAPP_URL?: string;
  readonly VITE_TYPEBOT_API_HOST?: string;
  readonly VITE_TYPEBOT_PUBLIC_ID?: string;
  readonly VITE_TYPEBOT_PUBLIC_ID_CURITIBA?: string;
  readonly VITE_TYPEBOT_PUBLIC_ID_RECIFE?: string;
  /** Opcional: URL completa do `dist/web.js` no CDN (padrão = jsDelivr `@typebot.io/js@0`, como no embed do painel). */
  readonly VITE_TYPEBOT_JS_URL?: string;
  readonly VITE_GTM_CONTAINER_ID?: string;
  readonly VITE_GTM_CONTAINER_ID_CURITIBA?: string;
  readonly VITE_GTM_CONTAINER_ID_RECIFE?: string;
  readonly VITE_CLARITY_PROJECT_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
