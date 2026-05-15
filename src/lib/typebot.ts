import { TYPEBOT_API_HOST, TYPEBOT_CONFIGURED, TYPEBOT_PUBLIC_ID, WHATSAPP_URL } from '../content/constants';

/** Versão fixa estável (evita que `@0` no jsDelivr mude a API sem aviso). */
export const TYPEBOT_JS_URL =
  (import.meta.env.VITE_TYPEBOT_JS_URL as string | undefined)?.trim() ||
  'https://cdn.jsdelivr.net/npm/@typebot.io/js@0.10.2/dist/web.js';

const TYPEBOT_READY_EVENT = 'typebot-sdk-ready';
const TYPEBOT_LOADER_SRC = '/typebot-loader.js';

type TypebotSdk = {
  initBubble: (opts: {
    typebot: string;
    apiHost: string;
    theme?: {
      button?: {
        backgroundColor?: string;
        iconColor?: string;
        isHidden?: boolean;
        customIconSrc?: string;
      };
      chatWindow?: { backgroundColor?: string; maxWidth?: string };
      placement?: 'left' | 'right';
    };
    onInit?: () => void;
  }) => void;
  open: (opts?: { id?: string }) => void;
};

declare global {
  interface Window {
    Typebot?: TypebotSdk;
  }
}

const WHATSAPP_LAUNCHER_BG = '#25D366';

function whatsappBubbleIconUrl(): string {
  const path = '/brand/whatsapp-bubble-icon.svg';
  if (typeof window === 'undefined') return path;
  return new URL(path, window.location.origin).href;
}

let initPromise: Promise<void> | null = null;
let sdkPromise: Promise<TypebotSdk> | null = null;

function waitForSdk(timeoutMs = 20_000): Promise<TypebotSdk> {
  return new Promise((resolve, reject) => {
    if (window.Typebot?.initBubble) {
      resolve(window.Typebot);
      return;
    }

    const timer = window.setTimeout(() => {
      window.removeEventListener(TYPEBOT_READY_EVENT, onReady);
      reject(new Error('Timeout ao carregar o SDK Typebot'));
    }, timeoutMs);

    const onReady = () => {
      window.removeEventListener(TYPEBOT_READY_EVENT, onReady);
      clearTimeout(timer);
      if (window.Typebot?.initBubble) {
        resolve(window.Typebot);
      } else {
        reject(new Error('SDK Typebot inválido após carregamento'));
      }
    };

    window.addEventListener(TYPEBOT_READY_EVENT, onReady);
  });
}

function injectLoaderScript(): void {
  const loaderId = 'typebot-sdk-loader';
  if (document.getElementById(loaderId)) return;

  const script = document.createElement('script');
  script.id = loaderId;
  script.type = 'module';
  script.src = TYPEBOT_LOADER_SRC;
  script.onerror = () => {
    sdkPromise = null;
    console.error('[Typebot] falha ao carregar', TYPEBOT_LOADER_SRC);
  };
  document.head.appendChild(script);
}

/** Carrega o SDK (`public/typebot-loader.js` ou import dinâmico de fallback). */
function loadTypebotSdk(): Promise<TypebotSdk> {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('Typebot só pode ser carregado no browser'));
  }

  if (window.Typebot?.initBubble) {
    return Promise.resolve(window.Typebot);
  }

  if (!sdkPromise) {
    sdkPromise = (async () => {
      injectLoaderScript();
      try {
        return await waitForSdk();
      } catch {
        const mod = (await import(/* @vite-ignore */ TYPEBOT_JS_URL)) as {
          default?: TypebotSdk;
        } & TypebotSdk;
        const sdk = mod.default ?? mod;
        if (!sdk?.initBubble) {
          throw new Error('SDK Typebot inválido');
        }
        window.Typebot = sdk;
        return sdk;
      }
    })().catch((err) => {
      sdkPromise = null;
      throw err;
    });
  }

  return sdkPromise;
}

function ensureBubble(): Promise<void> {
  if (!TYPEBOT_CONFIGURED) return Promise.resolve();

  if (!initPromise) {
    initPromise = (async () => {
      const sdk = await loadTypebotSdk();

      await new Promise<void>((resolve, reject) => {
        const initTimeout = window.setTimeout(() => {
          reject(new Error('Timeout ao inicializar o bubble Typebot'));
        }, 20_000);

        sdk.initBubble({
          typebot: TYPEBOT_PUBLIC_ID,
          apiHost: TYPEBOT_API_HOST,
          theme: {
            button: {
              backgroundColor: WHATSAPP_LAUNCHER_BG,
              iconColor: '#ffffff',
              customIconSrc: whatsappBubbleIconUrl(),
            },
            chatWindow: {
              backgroundColor: '#FAF9F6',
              maxWidth: 'min(100vw - 1.5rem, 420px)',
            },
            placement: 'right',
          },
          onInit: () => {
            clearTimeout(initTimeout);
            resolve();
          },
        });
      });
    })().catch((err) => {
      initPromise = null;
      throw err;
    });
  }

  return initPromise;
}

export function preloadTypebotBubble(): void {
  void ensureBubble().catch((err) => {
    console.warn('[Typebot] pré-carga falhou:', err);
  });
}

function openWhatsAppFallback(): void {
  if (WHATSAPP_URL.startsWith('http')) {
    window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer');
  }
}

export async function openTypebot(): Promise<void> {
  if (!TYPEBOT_CONFIGURED) {
    openWhatsAppFallback();
    return;
  }

  try {
    await ensureBubble();
    const sdk = window.Typebot;
    if (!sdk?.open) {
      throw new Error('Typebot.open não disponível');
    }
    sdk.open();
  } catch (err) {
    console.error('[Typebot] não foi possível abrir o chat:', err);
    openWhatsAppFallback();
  }
}
