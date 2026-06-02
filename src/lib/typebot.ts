import { TYPEBOT_API_HOST, TYPEBOT_CONFIGURED, TYPEBOT_PUBLIC_ID, WHATSAPP_URL } from '../content/constants';

const TYPEBOT_CDN = 'https://cdn.jsdelivr.net/npm/@typebot.io/js@0/dist/web.js';

type TypebotGlobal = {
  initBubble: (opts: Record<string, unknown>) => void;
  open?: () => void;
  toggle?: () => void;
  close?: () => void;
};

declare global {
  interface Window {
    Typebot?: TypebotGlobal;
    __typebotEmbedStarted?: boolean;
  }
}

function whatsappIconUrl(): string {
  return new URL('/brand/whatsapp-bubble-icon.svg', window.location.origin).href;
}

/** Igual ao snippet “Share → HTML & Javascript” do painel Typebot. */
export function injectTypebotEmbed(): void {
  if (typeof window === 'undefined' || !TYPEBOT_CONFIGURED) return;
  if (window.__typebotEmbedStarted) return;
  window.__typebotEmbedStarted = true;

  const script = document.createElement('script');
  script.type = 'module';
  script.id = 'typebot-embed-init';
  script.textContent = `
import Typebot from '${TYPEBOT_CDN.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}';
window.Typebot = Typebot;
Typebot.initBubble({
  typebot: ${JSON.stringify(TYPEBOT_PUBLIC_ID)},
  apiHost: ${JSON.stringify(TYPEBOT_API_HOST)},
  theme: {
    button: {
      backgroundColor: '#25D366',
      iconColor: '#ffffff',
      customIconSrc: ${JSON.stringify(whatsappIconUrl())},
    },
    chatWindow: { backgroundColor: '#FFFFFF' },
  },
});
`;
  document.body.appendChild(script);
}

function openWhatsAppFallback(): void {
  if (WHATSAPP_URL.startsWith('http')) {
    window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer');
  }
}

/** Chamado pelos CTAs — equivalente a onclick="Typebot.open()" no HTML do painel. */
export function openTypebot(): void {
  if (!TYPEBOT_CONFIGURED) {
    openWhatsAppFallback();
    return;
  }

  injectTypebotEmbed();

  const run = () => {
    const T = window.Typebot;
    if (!T) return false;
    if (typeof T.open === 'function') {
      T.open();
      return true;
    }
    if (typeof T.toggle === 'function') {
      T.toggle();
      return true;
    }
    return false;
  };

  if (run()) return;

  // SDK ainda a carregar: tenta de novo em instantes curtos
  let attempts = 0;
  const retry = window.setInterval(() => {
    attempts += 1;
    if (run() || attempts >= 20) {
      window.clearInterval(retry);
      if (attempts >= 20 && !run()) {
        console.error('[Typebot] Typebot.open indisponível após carregar o script');
        openWhatsAppFallback();
      }
    }
  }, 250);
}

/** @deprecated alias — mantido para ClientBootstrap */
export function preloadTypebotBubble(): void {
  injectTypebotEmbed();
}
