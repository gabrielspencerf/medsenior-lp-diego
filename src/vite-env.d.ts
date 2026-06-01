/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MARKET?: 'curitiba' | 'recife';
  readonly VITE_SITE_URL?: string;
  readonly VITE_WHATSAPP_URL?: string;
  readonly VITE_TYPEBOT_PUBLIC_ID?: string;
  readonly VITE_GTM_CONTAINER_ID?: string;
  readonly VITE_CLARITY_PROJECT_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
