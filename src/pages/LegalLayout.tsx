import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Container } from '../components/layout';
import { BRAND_LOGO_SRC } from '../content/constants';
import { imgBlockSaveAttrs } from '../lib/imgBlockSave';

type Props = {
  title: string;
  eyebrow: string;
  updatedLabel: string;
  children: ReactNode;
};

export function LegalLayout({ title, eyebrow, updatedLabel, children }: Props) {
  return (
    <div className="flex min-h-screen flex-col bg-[#FDFDFD] text-[#063D24]">
      <header className="sticky top-0 z-20 shrink-0 border-b border-[#063D24]/[0.08] bg-[#FDFDFD]/95 backdrop-blur-md">
        <Container className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2 py-3 sm:py-4">
          <Link
            to="/"
            className="-m-1 flex min-h-11 min-w-0 shrink-0 items-center p-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D6B3C]"
            aria-label="BrasCare — consultoria em planos de saúde MedSênior"
          >
            <img
              src={BRAND_LOGO_SRC}
              alt="BrasCare — Cuidando bem de sua família"
              width={80}
              height={21}
              className="brascare-header-logo pointer-events-none shrink-0 select-none"
              decoding="async"
              {...imgBlockSaveAttrs}
            />
          </Link>
          <Link
            to="/"
            className="inline-flex min-h-11 items-center gap-2 text-[10px] font-semibold uppercase tracking-wide text-[#0D6B3C] transition-colors hover:text-[#063D24]"
          >
            <ArrowLeft size={14} className="shrink-0" aria-hidden />
            <span className="max-w-[9rem] leading-tight sm:max-w-none">Voltar ao site</span>
          </Link>
        </Container>
      </header>

      <main className="flex-1 pb-12 pt-8 md:pb-16 md:pt-14">
        <Container narrow>
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#5F6F67]/80">{eyebrow}</p>
          <h1 className="mb-3 text-balance font-display text-2xl font-bold tracking-tight min-[400px]:text-3xl md:text-[2.25rem] md:leading-tight">
            {title}
          </h1>
          <p className="mb-10 text-sm text-[#5F6F67]/80">{updatedLabel}</p>
          <article className="legal-doc space-y-8 border-t border-[#063D24]/10 pt-10">{children}</article>
        </Container>
      </main>

      <footer className="mt-auto border-t border-slate-200 bg-white pb-[env(safe-area-inset-bottom,0px)] text-slate-600">
        <Container className="py-8 md:py-10">
          <nav
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] leading-snug text-slate-500"
            aria-label="Rodapé"
          >
            <Link
              to="/termos"
              className="inline-flex min-h-11 items-center px-2 py-2 text-center transition-colors hover:text-slate-800"
            >
              Termos de Uso
            </Link>
            <Link
              to="/privacidade"
              className="inline-flex min-h-11 items-center px-2 py-2 text-center transition-colors hover:text-slate-800"
            >
              Privacidade
            </Link>
          </nav>
          <p className="mt-5 text-center text-[10px] leading-snug text-slate-400">© 2026 Todos os direitos reservados.</p>
        </Container>
      </footer>
    </div>
  );
}
