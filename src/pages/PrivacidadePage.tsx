import {
  LEGAL_CNPJ,
  LEGAL_COMPANY_NAME,
  LEGAL_LAST_UPDATED,
} from '../content/legal';
import { LegalLayout } from './LegalLayout';

export function PrivacidadePage() {
  return (
    <LegalLayout
      eyebrow="BrasCare Saúde"
      title="Política de privacidade"
      updatedLabel={`Última atualização: ${LEGAL_LAST_UPDATED}.`}
    >
      <section>
        <h2>1. Controlador dos dados</h2>
        <p className="lp-prose !opacity-90">
          O controlador dos dados pessoais tratados por meio deste site é a{' '}
          <strong className="font-semibold text-[#063D24]">{LEGAL_COMPANY_NAME}</strong>, CNPJ{' '}
          <strong className="font-semibold text-[#063D24]">{LEGAL_CNPJ}</strong>, na qualidade de corretora responsável pela captação e
          orientação comercial. A operadora de saúde contratada tratará dados próprios na fase de contratação e prestação do serviço,
          conforme avisos de privacidade da operadora.
        </p>
      </section>

      <section>
        <h2>2. Dados que podemos tratar</h2>
        <ul className="list-disc space-y-2 pl-5 text-base font-medium leading-relaxed text-[#5F6F67]/85">
          <li>
            <strong className="text-[#063D24]">Dados de identificação e contato</strong> que você informar voluntariamente (nome,
            telefone, e-mail, cidade, mensagens).
          </li>
          <li>
            <strong className="text-[#063D24]">Dados de navegação</strong>, como endereço IP, tipo de dispositivo, páginas visitadas,
            origem do acesso e horários aproximados.
          </li>
          <li>
            <strong className="text-[#063D24]">Conteúdo de conversas</strong> realizadas no assistente virtual ou em outros canais
            disponibilizados no site, para atender sua solicitação.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. Finalidades e bases legais (LGPD)</h2>
        <p className="lp-prose !opacity-90">
          Tratamos dados pessoais para: responder pedidos de informação e cotação; viabilizar contato comercial; melhorar o site e a
          experiência do usuário; cumprir obrigações legais e regulatórias; e, quando aplicável, exercer direitos em processos. As bases
          legais podem incluir execução de procedimentos preliminares a pedido do titular, cumprimento de obrigação legal, legítimo
          interesse (com avaliação de impacto quando necessário) e consentimento, conforme o caso.
        </p>
      </section>

      <section>
        <h2>4. Cookies e tecnologias similares</h2>
        <p className="lp-prose !opacity-90">
          Podemos utilizar cookies e ferramentas de medição de audiência, como <strong className="font-semibold text-[#063D24]">Google Tag Manager</strong>{' '}
          (e tags configuradas no painel, por exemplo Google Analytics ou remarketing) e, se habilitado,{' '}
          <strong className="font-semibold text-[#063D24]">Microsoft Clarity</strong>. O assistente de conversa pode empregar cookies ou
          armazenamento local para o funcionamento do chat. Você pode gerenciar cookies nas configurações do navegador; a desativação pode
          limitar recursos do site.
        </p>
      </section>

      <section>
        <h2>5. Compartilhamento de dados</h2>
        <p className="lp-prose !opacity-90">
          Podemos compartilhar dados com prestadores que nos auxiliam (hospedagem, ferramentas de chat, analytics), sempre com medidas
          contratuais de confidencialidade e segurança, e com a operadora de saúde quando necessário para elaborar proposta ou contratação
          solicitada por você. Não vendemos dados pessoais.
        </p>
      </section>

      <section>
        <h2>6. Prazo de conservação</h2>
        <p className="lp-prose !opacity-90">
          Conservamos os dados pelo tempo necessário para cumprir as finalidades descritas, atender prazos legais de guarda de registros
          comerciais e resguardar direitos em eventuais disputas. Após o término do prazo, os dados podem ser eliminados ou anonimizados,
          salvo outra base legal.
        </p>
      </section>

      <section>
        <h2>7. Seus direitos</h2>
        <p className="lp-prose !opacity-90">
          Nos termos da Lei nº 13.709/2018 (LGPD), você pode solicitar confirmação de tratamento, acesso, correção, anonimização,
          portabilidade, eliminação de dados desnecessários, informação sobre compartilhamentos e revogação de consentimento, quando
          aplicável. Para exercer seus direitos, utilize os canais de atendimento do site ou o assistente de conversa, indicando sua
          solicitação de forma clara. Responderemos no prazo legal.
        </p>
      </section>

      <section>
        <h2>8. Segurança</h2>
        <p className="lp-prose !opacity-90">
          Adotamos medidas técnicas e organizacionais compatíveis com a natureza dos dados tratados, incluindo conexões seguras (HTTPS) e
          controles de acesso. Nenhum sistema é totalmente isento de riscos; em caso de incidente relevante, adotaremos as providências
          previstas na lei.
        </p>
      </section>

      <section>
        <h2>9. Menores de idade</h2>
        <p className="lp-prose !opacity-90">
          O site não se destina a menores de 18 anos sem supervisão. Não coletamos intencionalmente dados de crianças sem base legal
          adequada. Se tomarmos conhecimento de coleta indevida, adotaremos medidas para eliminar os dados.
        </p>
      </section>

      <section>
        <h2>10. Alterações e contato</h2>
        <p className="lp-prose !opacity-90">
          Esta política pode ser atualizada; a data no topo indica a versão vigente. Recomendamos revisitar periodicamente.
          Consulte também os Termos de Uso. Dúvidas sobre privacidade podem ser enviadas pelos canais de atendimento
          disponíveis neste ambiente.
        </p>
      </section>
    </LegalLayout>
  );
}
