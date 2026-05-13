import { Link } from 'react-router-dom';
import { LegalLayout } from './LegalLayout';

export function TermosPage() {
  return (
    <LegalLayout
      eyebrow="BrasCare Saúde"
      title="Termos de uso"
      updatedLabel="Texto modelo provisório — substitua pelo documento aprovado pelo jurídico antes de publicar em definitivo."
    >
      <section>
        <h2>1. Finalidade</h2>
        <p className="lp-prose !opacity-90">
          Este site apresenta informações sobre produtos e serviços de saúde. O conteúdo é meramente informativo e pode ser alterado sem aviso prévio. A
          contratação, quando existir, seguirá documentação formal própria da operadora e da corretora.
        </p>
      </section>

      <section>
        <h2>2. Uso do site</h2>
        <p className="lp-prose !opacity-90">
          Ao utilizar este site, compromete-se a não empregar meios que prejudiquem o funcionamento do serviço, a não reproduzir conteúdo de forma abusiva e a
          respeitar a legislação aplicável. O acesso pode ser limitado ou encerrado em caso de uso indevido, conforme permitido em lei.
        </p>
      </section>

      <section>
        <h2>3. Limitação e alterações</h2>
        <p className="lp-prose !opacity-90">
          Não nos responsabilizamos por danos indiretos decorrentes do uso ou da impossibilidade de uso do site, na medida permitida pela lei. Estes termos
          podem ser atualizados; recomenda-se consultar esta página periodicamente. Para tratamento de dados pessoais, veja a{' '}
          <Link to="/privacidade" className="font-semibold text-[#0D6B3C] underline underline-offset-2 hover:text-[#063D24]">
            página de privacidade
          </Link>
          .
        </p>
      </section>
    </LegalLayout>
  );
}
