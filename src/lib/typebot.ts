import { TYPEBOT_API_HOST, TYPEBOT_CONFIGURED, TYPEBOT_PUBLIC_ID, WHATSAPP_URL } from '../content/constants';

/** Igual ao embed “Share → HTML” (jsDelivr `@0` = última 0.x). */
const TYPEBOT_JS_DEFAULT = 'https://cdn.jsdelivr.net/npm/@typebot.io/js@0/dist/web.js';

const typebotModuleUrl = () =>
  (import.meta.env.VITE_TYPEBOT_JS_URL as string | undefined)?.trim() || TYPEBOT_JS_DEFAULT;

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

/** Verde marca WhatsApp + ícone branco (SVG em `public/brand/`). */
const WHATSAPP_LAUNCHER_BG = '#25D366';

function whatsappBubbleIconUrl(): string {
  const path = '/brand/whatsapp-bubble-icon.svg';
  if (typeof window === 'undefined') return path;
  return new URL(path, window.location.origin).href;
}

let initPromise: Promise<void> | null = null;
let TypebotRef: TypebotSdk | undefined;

async function loadTypebotFromCdn(): Promise<TypebotSdk> {
  const url = typebotModuleUrl();
  const mod = (await import(/* @vite-ignore */ url)) as { default: TypebotSdk };
  return mod.default;
}

function ensureBubble(): Promise<void> {
  if (!TYPEBOT_CONFIGURED) return Promise.resolve();
  if (!initPromise) {
    initPromise = (async () => {
      TypebotRef = await loadTypebotFromCdn();
      await new Promise<void>((resolve) => {
        TypebotRef!.initBubble({
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
          onInit: () => resolve(),
        });
      });
    })();
  }
  return initPromise;
}

/** Pré-carrega o bubble (launcher visível do Typebot) para a primeira interação ser mais rápida. */
export function preloadTypebotBubble(): void {
  void ensureBubble();
}

export async function openTypebot(): Promise<void> {
  if (TYPEBOT_CONFIGURED) {
    await ensureBubble();
    TypebotRef?.open();
    return;
  }
  if (typeof WHATSAPP_URL === 'string' && WHATSAPP_URL.startsWith('http')) {
    window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer');
  }
}
