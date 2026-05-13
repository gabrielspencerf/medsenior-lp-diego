import { Link } from 'react-router-dom';
import { LegalLayout } from './LegalLayout';

export function PrivacidadePage() {
  return (
    <LegalLayout
      eyebrow="BrasCare Saúde"
      title="Privacidade"
      updatedLabel="Texto modelo provisório — alinhe com o DPO ou jurídico antes de publicar a política definitiva."
    >
      <section>
        <h2>1. Responsável pelo tratamento</h2>
        <p className="lp-prose !opacity-90">
          Este aviso descreve, em linhas gerais, como dados pessoais podem ser tratados em razão do uso deste site. O responsável e os dados de contato
          oficiais serão indicados na versão final do documento, após validação interna.
        </p>
      </section>

      <section>
        <h2>2. Dados e finalidades</h2>
        <p className="lp-prose !opacity-90">
          Podem ser coletados, por exemplo, dados de contato que você enviar em formulários ou chats, e dados técnicos de navegação (como páginas visitadas e
          tipo de dispositivo), para responder solicitações, melhorar o site e cumprir obrigações legais, conforme a LGPD e bases legais aplicáveis a cada
          hipótese.
        </p>
      </section>

      <section>
        <h2>3. Direitos, conservação e alterações</h2>
        <p className="lp-prose !opacity-90">
          Você pode solicitar confirmação de tratamento, acesso, correção ou outras medidas previstas na LGPD, pelos canais que constarão na versão final.
          Os prazos de guarda seguirão a finalidade e a lei. Esta página será atualizada quando o texto definitivo estiver disponível. Consulte também os{' '}
          <Link to="/termos" className="font-semibold text-[#0D6B3C] underline underline-offset-2 hover:text-[#063D24]">
            termos de uso
          </Link>
          .
        </p>
      </section>
    </LegalLayout>
  );
}
