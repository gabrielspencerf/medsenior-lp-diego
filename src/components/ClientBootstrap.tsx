import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { preloadTypebotBubble } from '../lib/typebot';
import { TYPEBOT_CONFIGURED } from '../content/constants';

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

let analyticsBootstrapped = false;

/** GTM (opcional), Clarity (opcional), pré-carga do Typebot. */
export function ClientBootstrap() {
  const location = useLocation();

  useEffect(() => {
    if (analyticsBootstrapped) return;
    analyticsBootstrapped = true;
    const gtmId = import.meta.env.VITE_GTM_CONTAINER_ID?.trim();
    if (gtmId) {
      window.dataLayer = window.dataLayer ?? [];
      window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
      const s = document.createElement('script');
      s.async = true;
      s.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmId)}`;
      document.head.appendChild(s);

      const nos = document.createElement('noscript');
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.googletagmanager.com/ns.html?id=${encodeURIComponent(gtmId)}`;
      iframe.height = '0';
      iframe.width = '0';
      iframe.style.display = 'none';
      iframe.style.visibility = 'hidden';
      iframe.setAttribute('aria-hidden', 'true');
      nos.appendChild(iframe);
      document.body.insertBefore(nos, document.body.firstChild);
    }

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
    const gtmId = import.meta.env.VITE_GTM_CONTAINER_ID?.trim();
    if (!gtmId) return;
    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push({
      event: 'virtual_page_view',
      page_path: location.pathname + location.search,
    });
  }, [location.pathname, location.search]);

  return null;
}
