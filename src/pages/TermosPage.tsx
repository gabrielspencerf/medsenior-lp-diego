import {
  LEGAL_CNPJ,
  LEGAL_COMPANY_NAME,
  LEGAL_LAST_UPDATED,
} from '../content/legal';
import { LegalLayout } from './LegalLayout';

export function TermosPage() {
  return (
    <LegalLayout
      eyebrow="BrasCare Saúde"
      title="Termos de uso"
      updatedLabel={`Última atualização: ${LEGAL_LAST_UPDATED}.`}
    >
      <section>
        <h2>1. Aceitação</h2>
        <p className="lp-prose !opacity-90">
          Ao acessar e utilizar este site, você declara ter lido e concordado com estes Termos de Uso e com a
          Política de Privacidade aplicável. Se não concordar, não utilize o site.
        </p>
      </section>

      <section>
        <h2>2. Quem somos</h2>
        <p className="lp-prose !opacity-90">
          Este site é operado por <strong className="font-semibold text-[#063D24]">{LEGAL_COMPANY_NAME}</strong>, inscrita no
          CNPJ sob o nº <strong className="font-semibold text-[#063D24]">{LEGAL_CNPJ}</strong>, na qualidade de corretora de
          seguros, com foco em orientação comercial sobre planos de saúde MedSênior na região de Curitiba e entorno.
        </p>
      </section>

      <section>
        <h2>3. Finalidade e natureza do conteúdo</h2>
        <p className="lp-prose !opacity-90">
          As informações publicadas têm caráter <strong className="font-semibold text-[#063D24]">meramente informativo e comercial</strong>
          . Indicações de cobertura, rede, valores ou condições dependem de confirmação na proposta e no contrato formal. Nada neste site
          substitui o contrato, as condições gerais ou os avisos da operadora de saúde. Reservamo-nos o direito de alterar textos, imagens e
          disponibilidade de produtos sem aviso prévio.
        </p>
      </section>

      <section>
        <h2>4. Uso permitido</h2>
        <p className="lp-prose !opacity-90">
          Você compromete-se a utilizar o site de forma lícita, fornecendo informações verdadeiras quando solicitadas, e a não empregar
          meios automatizados ou abusivos que prejudiquem a infraestrutura, a segurança ou a experiência de outros usuários. É vedada a
          reprodução não autorizada de conteúdos, marcas ou materiais exibidos, salvo consentimento prévio ou hipótese legal.
        </p>
      </section>

      <section>
        <h2>5. Atendimento e ferramentas de terceiros</h2>
        <p className="lp-prose !opacity-90">
          O site pode disponibilizar canais de conversa (incluindo assistente virtual integrado) para esclarecimentos e cotações. O
          tratamento de dados nesses canais rege-se pela Política de Privacidade. Serviços de terceiros (por exemplo, hospedagem,
          analytics ou operadora de saúde) possuem termos próprios, pelos quais não nos responsabilizamos além do permitido em lei.
        </p>
      </section>

      <section>
        <h2>6. Propriedade intelectual</h2>
        <p className="lp-prose !opacity-90">
          O layout, textos, identidade visual e demais elementos do site, bem como marcas de terceiros exibidas com autorização, estão
          protegidos por direitos de propriedade intelectual. O uso não autorizado pode configurar violação legal.
        </p>
      </section>

      <section>
        <h2>7. Limitação de responsabilidade</h2>
        <p className="lp-prose !opacity-90">
          Empregamos esforços razoáveis para manter o site disponível e seguro, mas não garantimos funcionamento ininterrupto ou livre de
          erros. Na extensão máxima permitida pela legislação brasileira, não respondemos por danos indiretos, lucros cessantes ou
          decisões tomadas com base exclusiva em informações deste site, sem validação contratual.
        </p>
      </section>

      <section>
        <h2>8. Alterações destes termos</h2>
        <p className="lp-prose !opacity-90">
          Podemos atualizar estes Termos de Uso periodicamente. A data no topo desta página indica a versão vigente. O uso continuado após
          alterações constitui ciência das novas condições, salvo disposição legal em contrário.
        </p>
      </section>

      <section>
        <h2>9. Lei aplicável e contato</h2>
        <p className="lp-prose !opacity-90">
          Estes termos são regidos pelas leis da República Federativa do Brasil. Dúvidas podem ser encaminhadas pelos canais de
          atendimento disponíveis neste ambiente (incluindo o assistente de conversa). Para questões sobre dados pessoais,
          consulte a Política de Privacidade.
        </p>
      </section>
    </LegalLayout>
  );
}
