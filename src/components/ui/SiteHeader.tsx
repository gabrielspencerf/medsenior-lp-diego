import { Link } from 'react-router-dom';
import { Container } from '../layout/Container';
import { BRAND_LOGO_SRC, BRAND_SEAL_SRC } from '../../content/constants';
import { imgBlockSaveAttrs } from '../../lib/imgBlockSave';

export function SiteHeader() {
  return (
    <header className="shrink-0 border-b border-[#063D24]/[0.06] bg-white">
      <Container className="flex items-center justify-between gap-2 py-1.5 sm:gap-3 sm:py-2 md:py-2.5">
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
            fetchPriority="high"
            decoding="async"
            {...imgBlockSaveAttrs}
          />
        </Link>
        <img
          src={BRAND_SEAL_SRC}
          alt="MedSênior — selo de parceiro autorizado"
          width={200}
          height={64}
          loading="lazy"
          decoding="async"
          className="h-6 w-auto max-h-8 max-w-[min(140px,38vw)] shrink-0 object-contain object-right pointer-events-none select-none sm:h-7 sm:max-h-9 md:h-8 md:max-h-10"
          {...imgBlockSaveAttrs}
        />
      </Container>
    </header>
  );
}
