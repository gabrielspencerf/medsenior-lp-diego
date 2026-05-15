/** URL pública de produção (sem barra final). */
export const SITE_URL =
  (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '').trim() ||
  'https://curitiba.vidaesaudeseniors.com.br';

export const LEGAL_COMPANY_NAME = 'Brascare Saúde e Corretora de Seguros SS LTDA';
export const LEGAL_CNPJ = '45.949.883/0001-19';
export const LEGAL_SITE_HOST = 'curitiba.vidaesaudeseniors.com.br';
export const LEGAL_LAST_UPDATED = '15 de maio de 2026';
