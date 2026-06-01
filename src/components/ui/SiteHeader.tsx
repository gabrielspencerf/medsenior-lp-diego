import { Link } from 'react-router-dom';
import { Container } from '../layout/Container';
import { BRAND_LOGO_SRC, BRAND_SEAL_SRC } from '../../content/constants';
import { imgBlockSaveAttrs } from '../../lib/imgBlockSave';

type Props = {
  tone?: 'light' | 'dark';
};

export function SiteHeader({ tone = 'light' }: Props) {
  const isDark = tone === 'dark';

  return (
    <header
      className={`shrink-0 ${isDark ? 'border-b border-white/10 bg-[#02160E]/65 backdrop-blur-md' : 'border-b border-[#063D24]/[0.06] bg-white'}`.trim()}
    >
      <Container className="flex items-center justify-between gap-2 py-1.5 sm:gap-3 sm:py-2 md:py-2.5">
        <Link
          to="/"
          className="-m-1 flex min-h-11 min-w-0 shrink-0 items-center rounded-full p-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8DC6F]"
          aria-label="BrasCare — consultoria em planos de saúde MedSênior"
        >
          <span className={`${isDark ? 'rounded-full border border-black/5 bg-white/95 px-2.5 py-1.5 shadow-[0_6px_18px_-10px_rgba(0,0,0,0.5)]' : ''}`.trim()}>
            <img
              src={BRAND_LOGO_SRC}
              alt="BrasCare — Cuidando bem de sua família"
              width={80}
              height={21}
              className="brascare-header-logo pointer-events-none shrink-0 select-none"
              fetchPriority="high"
              decoding="async"
              {...imgBlockSaveAttrs}
            />
          </span>
        </Link>
        <span className={`${isDark ? 'rounded-full border border-black/5 bg-white/95 px-2.5 py-1.5 shadow-[0_6px_18px_-10px_rgba(0,0,0,0.5)]' : ''}`.trim()}>
          <img
            src={BRAND_SEAL_SRC}
            alt="MedSênior — selo de parceiro autorizado"
            width={200}
            height={64}
            loading="lazy"
            decoding="async"
            className="pointer-events-none h-6 w-auto max-h-8 max-w-[min(140px,38vw)] shrink-0 select-none object-contain object-right sm:h-7 sm:max-h-9 md:h-8 md:max-h-10"
            {...imgBlockSaveAttrs}
          />
        </span>
      </Container>
    </header>
  );
}
