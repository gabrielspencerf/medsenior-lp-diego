import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { GTM_CONTAINER_ID, TYPEBOT_CONFIGURED } from '../content/constants';
import { preloadTypebotBubble } from '../lib/typebot';

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

let analyticsBootstrapped = false;

/** Clarity (opcional), pré-carga Typebot; GTM está em `index.html`. SPA: `virtual_page_view` no dataLayer. */
export function ClientBootstrap() {
  const location = useLocation();

  useEffect(() => {
    if (analyticsBootstrapped) return;
    analyticsBootstrapped = true;

    const clarityId = import.meta.env.VITE_CLARITY_PROJECT_ID?.trim();
    if (clarityId) {
      const clarityScript = document.createElement('script');
      clarityScript.async = true;
      clarityScript.src = `https://www.clarity.ms/tag/${encodeURIComponent(clarityId)}`;
      document.head.appendChild(clarityScript);
    }

    if (TYPEBOT_CONFIGURED) {
      preloadTypebotBubble();
    }
  }, []);

  useEffect(() => {
    if (!GTM_CONTAINER_ID) return;
    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push({
      event: 'virtual_page_view',
      page_path: location.pathname + location.search,
    });
  }, [location.pathname, location.search]);

  return null;
}
