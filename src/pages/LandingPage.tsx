import React, { useLayoutEffect, useRef, useState } from 'react';
import {
  CheckCircle2,
  MapPin,
  ShieldCheck,
  Users,
  Plus,
  Minus,
  ArrowRight,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  HeartPulse,
  Activity,
  CircleDot,
  Building2,
  Clock,
  Stethoscope as StethIcon,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Container, Section } from '../components/layout';
import { SiteHeader } from '../components/ui/SiteHeader';
import { Eyebrow, eyebrowClassName } from '../components/ui/Eyebrow';
import { SectionTitle } from '../components/ui/SectionTitle';
import { CtaButton } from '../components/ui/CtaButton';
import { LANDING_DIFFERENCIAL_IMAGE_SRC, LANDING_HERO_IMAGE_SRC } from '../content/constants';
import { imgBlockSaveAttrs } from '../lib/imgBlockSave';

export function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [windowWidth, setWindowWidth] = React.useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const planCarouselOuterRef = useRef<HTMLDivElement>(null);
  const [planOuterW, setPlanOuterW] = useState(0);

  /** gap-4 entre cartões (alinhado ao Tailwind). */
  const PLAN_GAP_PX = 16;

  useLayoutEffect(() => {
    const el = planCarouselOuterRef.current;
    if (!el) return;
    const measure = () => setPlanOuterW(el.clientWidth);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  React.useEffect(() => {
    let raf = 0;
    const handleResize = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setWindowWidth(window.innerWidth));
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const plans = [
    {
      title: 'Infinite',
      badge: 'Inovação',
      technical: 'Exclusividade | Sob Consulta',
      description:
        'Plano premium MedSênior para quem busca uma experiência de cuidado mais completa, com rede selecionada e atendimento diferenciado.',
      highlights: ['Atendimento VIP', 'Rede Exclusiva', 'Gestão de Saúde'],
      area: 'Consulte disponibilidade para Curitiba',
      cta: 'Cotar Infinite',
    },
    {
      title: 'Black',
      badge: 'Premium',
      technical: 'Apartamento | ANS 502.795/25-1',
      description:
        'Segmento premium da MedSênior, com hospitais e clínicas de primeira linha, suporte a procedimentos complexos e atendimento mais personalizado.',
      highlights: ['Rede credenciada selecionada', 'Apartamento individual', 'Reembolso diferenciado'],
      area: 'DF, ES, MG, PR, RJ, RS, SP e PE',
      cta: 'Cotar Black',
    },
    {
      title: 'PR4',
      badge: 'Privacidade',
      technical: 'Apartamento | ANS 492.173/22-9',
      description:
        'Plano com acomodação em apartamento para quem busca mais privacidade em caso de internação, com rede credenciada ampla e foco em recuperação tranquila.',
      highlights: ['Sem coparticipação', 'Oficinas de saúde', 'Telemedicina 24h'],
      area: 'Campo Largo, Curitiba e S. J. dos Pinhais (PR)',
      cta: 'Cotar PR4',
    },
    {
      title: 'PR3',
      badge: 'Rede Ampla',
      technical: 'Enfermaria | ANS 492.174/22-7',
      description:
        'Opção com mensalidade mais acessível, cobertura ambulatorial e hospitalar, rede credenciada ampla e médicos de referência à disposição.',
      highlights: ['Sem coparticipação', 'Oficinas de saúde', 'Telemedicina 24h'],
      area: 'Campo Largo, Curitiba e S. J. dos Pinhais (PR)',
      cta: 'Cotar PR3',
    },
  ];

  const benefits = [
    {
      title: 'Carência Zero*',
      description: 'Para quem faz portabilidade de outro plano, sem cumprir novos prazos, exceto CPT.',
      micro: 'Sujeito às regras da operadora.',
    },
    {
      title: 'Sem Coparticipação',
      description: 'Consultas, exames e procedimentos cobertos sem cobrança extra por utilização.',
    },
    {
      title: 'Oficinas de Saúde',
      description: 'Arte, nutrição, dança e memória para estimular rotina ativa e bem-estar.',
    },
    {
      title: 'Medicina Preventiva',
      description: 'Acompanhamento contínuo para identificar riscos cedo e promover qualidade de vida.',
    },
  ];

  const faqItems = [
    {
      q: 'MedSênior atende em Curitiba?',
      a: 'Sim. A MedSênior possui atendimento em Curitiba e região, com rede credenciada e unidade própria para clientes.',
    },
    {
      q: 'O plano tem coparticipação?',
      a: 'Os planos destacados trabalham com mensalidade sem coparticipação, conforme condições comerciais e cobertura contratada.',
    },
    {
      q: 'O que significa carência zero?',
      a: 'A possibilidade de carência zero se aplica principalmente em casos de portabilidade de outro plano, exceto CPT, conforme regras da operadora e legislação vigente.',
    },
    {
      q: 'Como faço uma cotação?',
      a: 'Use qualquer botão de consultoria ou o ícone de conversa no canto da página para falar com um consultor sobre opções disponíveis em Curitiba.',
    },
  ];

  const isMdUp = windowWidth >= 768;
  /** Mobile: largura = contentor do carrossel (já desconta o padding da secção) — usa a faixa horizontal toda. */
  const planCardWidthPx = isMdUp
    ? 320
    : planOuterW > 0
      ? Math.floor(planOuterW)
      : Math.max(260, Math.floor(windowWidth - 32));
  const planCardStride = planCardWidthPx + PLAN_GAP_PX;
  /** Quantos cartões mostramos “cheios” na janela: 3 em md+, 1 em mobile. */
  const planVisibleSlots = isMdUp ? 3 : 1;
  const planClipWidthPx =
    planVisibleSlots * planCardWidthPx + (planVisibleSlots - 1) * PLAN_GAP_PX;
  const planTrackWidthPx = plans.length * planCardWidthPx + (plans.length - 1) * PLAN_GAP_PX;
  const planViewportW =
    planOuterW > 0 ? Math.min(planClipWidthPx, planOuterW) : planClipWidthPx;
  const planMaxScrollPx = Math.max(0, planTrackWidthPx - planViewportW);
  const planMaxSlide =
    planMaxScrollPx <= 0 ? 0 : Math.max(0, plans.length - planVisibleSlots);
  /** Distribui o scroll entre o início e o fim da faixa para não ficar espaço em branco à direita. */
  const planTranslateX =
    planMaxSlide > 0 ? (focusedIndex / planMaxSlide) * planMaxScrollPx : 0;

  React.useEffect(() => {
    setFocusedIndex((prev) => Math.min(prev, planMaxSlide));
  }, [planMaxSlide]);

  return (
    <div id="inicio" className="min-h-screen bg-[#02160E]">
      <main>
        {/* Hero: viewport cheia, header compacto; conteúdo centrado na área útil */}
        <section className="relative flex min-h-dvh flex-col overflow-x-clip bg-[radial-gradient(circle_at_12%_18%,rgba(184,220,111,0.14),transparent_38%),radial-gradient(circle_at_88%_78%,rgba(13,107,60,0.22),transparent_44%),linear-gradient(145deg,#02160E_0%,#031F14_55%,#063D24_100%)]">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.12]" />
          <div className="pointer-events-none absolute -left-20 top-1/3 h-64 w-64 rounded-full bg-[#B8DC6F]/15 blur-[110px] md:h-80 md:w-80" />
          <div className="pointer-events-none absolute -right-16 bottom-12 h-72 w-72 rounded-full bg-[#0D6B3C]/25 blur-[120px]" />
          <SiteHeader tone="light" />
          <div className="relative flex min-h-0 flex-1 flex-col justify-center py-5 sm:py-8 md:py-10">
            <div className="mx-auto grid w-full max-w-7xl min-h-0 items-center gap-6 px-4 sm:gap-8 sm:px-6 md:grid-cols-2 md:gap-8 lg:gap-10">
              <Container bleed className="min-h-0 min-w-0">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                  <div className="mb-4 inline-flex max-w-full flex-wrap items-center gap-x-2 gap-y-1 rounded-full border border-white/20 bg-[#02160E]/55 px-3 py-1.5 backdrop-blur-sm">
                    <CircleDot size={8} className="shrink-0 animate-pulse text-[#B8DC6F]" />
                    <span className={`${eyebrowClassName} !inline max-w-full text-white/80`}>
                      MedSênior • Planos em Curitiba 44+
                    </span>
                  </div>
                  <h1 className="mb-5 text-balance font-display text-[1.65rem] font-bold leading-[1.12] tracking-tight text-[#F7F8F1] min-[380px]:text-3xl md:mb-6 md:text-4xl lg:text-[52px] lg:leading-[1.05]">
                    Plano de Saúde <br />
                    <span className="font-medium italic text-[#B8DC6F]">sem coparticipação.</span>
                  </h1>
                  <p className="lp-prose-light mb-6 max-w-md md:mb-8">
                    Exclusividade em Curitiba para quem busca previsibilidade, rede hospitalar selecionada e medicina
                    preventiva de elite.
                  </p>
                  <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                    <CtaButton typebot variant="primary" className="w-full justify-center sm:w-auto sm:min-w-[14rem]">
                      Consultar Tabela{' '}
                      <ArrowRight
                        size={16}
                        className="shrink-0 transition-transform group-hover/cta:translate-x-0.5"
                        aria-hidden
                      />
                    </CtaButton>
                  </div>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    <div className="flex min-w-0 max-w-full items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 backdrop-blur-sm">
                      <MapPin size={16} className="shrink-0 text-[#B8DC6F]" aria-hidden />
                      <span className="text-[10px] font-semibold uppercase tracking-wide text-white/80 sm:text-[9px]">
                        Curitiba e Grande Curitiba
                      </span>
                    </div>
                    <div className="flex min-w-0 max-w-full items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 backdrop-blur-sm">
                      <CheckCircle2 size={16} className="shrink-0 text-[#B8DC6F]" aria-hidden />
                      <span className="text-[10px] font-semibold uppercase tracking-wide text-white/80 sm:text-[9px]">
                        Orientação comercial sem custo
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Container>
              <Container bleed className="min-h-0 min-w-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                  <div className="group relative mx-auto aspect-square w-full max-w-[560px] overflow-hidden rounded-2xl border border-white/20 bg-black/40 shadow-[0_36px_90px_-40px_rgba(0,0,0,0.9),0_0_80px_-42px_rgba(184,220,111,0.55)] md:mx-0 md:rounded-3xl md:border-[1.5px]">
                    <img
                      src={LANDING_HERO_IMAGE_SRC}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      width={1080}
                      height={1080}
                      alt="Atendimento humanizado MedSênior em Curitiba"
                      className="pointer-events-none h-full w-full select-none object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                      decoding="async"
                      fetchPriority="high"
                      {...imgBlockSaveAttrs}
                    />
                    <div
                      className="absolute inset-0"
                      aria-hidden
                      style={{
                        background:
                          'linear-gradient(to top, rgba(2, 22, 14, 0.72) 0%, rgba(2, 22, 14, 0.55) 24%, rgba(2, 22, 14, 0.28) 46%, rgba(2, 22, 14, 0.12) 64%, transparent 82%)',
                      }}
                    />
                    <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col gap-2.5 p-4 pb-4 sm:gap-3 sm:p-5 sm:pb-5 md:p-6 md:pb-6">
                      <div className="max-w-md rounded-xl border border-white/20 bg-[#02160E]/65 px-2.5 py-2 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.45)] backdrop-blur-md sm:rounded-2xl sm:px-3 sm:py-2.5 md:px-4 md:py-3 [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]">
                        <span className={`${eyebrowClassName} mb-1.5 !inline text-[#B8DC6F]`}>
                          Localização Estratégica
                        </span>
                        <h3 className="font-display text-base font-bold leading-snug text-white md:text-lg">
                          Unidade Própria em Curitiba focada em longevidade ativa.
                        </h3>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Container>
            </div>
          </div>
        </section>

        <Section id="planos" variant="muted" className="overflow-hidden border-t border-[#063D24]/10">
          <Container>
            <div className="mb-8 flex flex-col justify-between gap-6 sm:mb-9 md:mb-10 md:flex-row md:items-end">
              <div className="max-w-lg min-w-0">
                <p className="mb-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-[#5F6F67]">Planos</p>
                <h2 className="font-display text-2xl font-semibold tracking-tight text-[#063D24] md:text-3xl">
                  MedSênior em Curitiba
                </h2>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-[#5F6F67]">
                  Compare as linhas e peça orientação comercial quando quiser avançar.
                </p>
              </div>
              <div className="flex shrink-0 gap-2 self-end sm:self-auto md:self-end">
                <button
                  type="button"
                  onClick={() => setFocusedIndex((prev) => (prev <= 0 ? planMaxSlide : prev - 1))}
                  className="inline-flex h-11 w-11 touch-manipulation items-center justify-center rounded-md border border-[#063D24]/20 text-[#063D24]/80 transition-colors hover:bg-[#FDFDFD]"
                  aria-label="Slide anterior"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => setFocusedIndex((prev) => (prev >= planMaxSlide ? 0 : prev + 1))}
                  className="inline-flex h-11 w-11 touch-manipulation items-center justify-center rounded-md border border-[#063D24]/20 text-[#063D24]/80 transition-colors hover:bg-[#FDFDFD]"
                  aria-label="Slide seguinte"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            <div ref={planCarouselOuterRef} className="w-full min-w-0 px-0">
              <div
                className="mx-auto max-w-full min-w-0 overflow-x-hidden"
                style={{ width: planOuterW > 0 ? `${Math.round(planViewportW)}px` : '100%' }}
              >
                <motion.div
                  drag={planMaxScrollPx > 0 ? 'x' : false}
                  dragConstraints={{
                    left: -planMaxScrollPx,
                    right: 0,
                  }}
                  dragElastic={0.02}
                  dragMomentum={false}
                  onDragEnd={(_, info) => {
                    const threshold = 56;
                    if (info.offset.x < -threshold) {
                      setFocusedIndex((prev) => (prev >= planMaxSlide ? 0 : prev + 1));
                    } else if (info.offset.x > threshold) {
                      setFocusedIndex((prev) => (prev <= 0 ? planMaxSlide : prev - 1));
                    }
                  }}
                  className={`flex gap-4 pb-8 md:gap-4 ${planMaxScrollPx > 0 ? 'cursor-grab active:cursor-grabbing' : ''}`}
                  animate={{ x: -Math.round(planTranslateX) }}
                  transition={{ type: 'tween', duration: 0.42, ease: [0.22, 0.94, 0.38, 1] }}
                  style={{ width: 'fit-content' }}
                >
                  {plans.map((plan, i) => {
                    const isPremiumBand = plan.title === 'Infinite' || plan.title === 'Black';
                    const topBandClass =
                      plan.title === 'PR4' || plan.title === 'PR3' ? 'bg-[#B8DC6F]/80' : 'bg-transparent';

                    return (
                      <motion.div
                        key={plan.title}
                        onClick={() =>
                          setFocusedIndex(
                            Math.min(
                              planMaxSlide,
                              Math.max(
                                0,
                                Math.round(
                                  ((i * planCardStride) / Math.max(planMaxScrollPx, 1)) * planMaxSlide,
                                ),
                              ),
                            ),
                          )
                        }
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.06 }}
                        style={{ width: planCardWidthPx, flex: '0 0 auto' }}
                        className="relative flex min-h-[380px] shrink-0 cursor-pointer select-none flex-col overflow-hidden rounded-xl border border-[#063D24]/10 bg-[#FDFDFD] p-5 shadow-[0_12px_35px_-28px_rgba(6,61,36,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-24px_rgba(6,61,36,0.4)] sm:min-h-[420px] sm:p-6 md:min-h-[440px] md:p-7"
                      >
                        {isPremiumBand ? (
                          <div
                            className={`-mx-5 -mt-5 mb-6 flex min-h-[92px] flex-col justify-center border-b px-5 py-2.5 sm:-mx-6 sm:-mt-6 sm:px-6 md:-mx-7 md:-mt-7 md:px-7 ${
                              plan.title === 'Black'
                                ? 'border-white/10 bg-black/95 text-white'
                                : 'border-white/10 bg-[#031F14] text-[#F7F8F1]'
                            }`}
                          >
                            <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-white/70">{plan.badge}</p>
                            <h3 className="mt-1 font-display text-xl font-semibold tracking-tight text-white md:text-2xl">
                              {plan.title}
                            </h3>
                            <p className="mt-1.5 text-[10px] leading-snug text-white/65">{plan.technical}</p>
                          </div>
                        ) : (
                          <>
                            <div className={`absolute inset-x-0 top-0 h-1.5 ${topBandClass}`} aria-hidden />
                            <div className="mb-6 min-h-[92px] pt-2">
                              <p className="text-[10px] font-medium uppercase tracking-wide text-[#5F6F67]">{plan.badge}</p>
                              <h3 className="mt-1 font-display text-xl font-semibold tracking-tight text-[#063D24] md:text-2xl">
                                {plan.title}
                              </h3>
                              <p className="mt-1.5 text-[10px] leading-snug text-[#5F6F67]/75">{plan.technical}</p>
                            </div>
                          </>
                        )}
                        <p className="mb-6 text-sm leading-relaxed text-[#5F6F67]">{plan.description}</p>
                        <ul className="mb-6 space-y-2.5">
                          {plan.highlights.map((h) => (
                            <li key={h} className="flex items-start gap-2.5 text-sm text-[#063D24]/85">
                              <CheckCircle2
                                size={16}
                                className="mt-0.5 shrink-0 text-[#0D6B3C]/60"
                                aria-hidden
                              />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-auto space-y-3 border-t border-[#063D24]/10 pt-4">
                          <p className="flex items-start gap-2 text-xs leading-snug text-[#5F6F67]">
                            <MapPin size={14} className="mt-0.5 shrink-0 text-[#0D6B3C]/55" aria-hidden />
                            {plan.area}
                          </p>
                          <CtaButton
                            typebot
                            variant={
                              plan.title === 'Infinite' ? 'gradient' : plan.title === 'Black' ? 'dark' : 'muted'
                            }
                            fullWidth
                          >
                            {plan.cta}
                            <ArrowRight
                              size={16}
                              className="shrink-0 transition-transform group-hover/cta:translate-x-0.5"
                              aria-hidden
                            />
                          </CtaButton>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-center gap-3 md:mt-6">
              <div className="flex gap-1.5">
                {Array.from({ length: planMaxSlide + 1 }, (_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Slide ${i + 1}`}
                    aria-current={focusedIndex === i ? 'true' : undefined}
                    onClick={() => setFocusedIndex(i)}
                    className="inline-flex h-11 min-w-11 touch-manipulation items-center justify-center px-1.5"
                  >
                    <span
                      className={`block h-1 rounded-full transition-all duration-300 ${
                        focusedIndex === i ? 'w-8 bg-[#063D24]' : 'w-1.5 bg-[#063D24]/20 hover:bg-[#063D24]/35'
                      }`}
                    />
                  </button>
                ))}
              </div>
              <span className="text-[11px] tabular-nums text-[#5F6F67]">
                {focusedIndex + 1} / {planMaxSlide + 1}
              </span>
            </div>
          </Container>
        </Section>

        <Section variant="dark">
          <Container>
            <div className="grid items-start gap-8 md:gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12">
              <div className="order-2 min-w-0 lg:order-1">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                  {benefits.map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="group rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-[0_12px_35px_-24px_rgba(0,0,0,0.75)] transition-all hover:bg-white/[0.09] hover:shadow-[0_18px_40px_-24px_rgba(184,220,111,0.2)] md:rounded-3xl md:p-7"
                    >
                      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-[#B8DC6F] transition-all group-hover:bg-[#B8DC6F]/20">
                        {i === 0 && <Clock size={20} />}
                        {i === 1 && <Activity size={20} />}
                        {i === 2 && <Users size={20} />}
                        {i === 3 && <ShieldCheck size={20} />}
                      </div>
                      <h4 className="mb-2 font-display text-lg font-bold leading-snug tracking-tight text-[#F7F8F1]">
                        {item.title}
                      </h4>
                      <p className="mb-4 text-sm leading-relaxed text-white/70">{item.description}</p>
                      {item.micro && (
                        <p className="text-[9px] font-medium uppercase tracking-wide text-[#B8DC6F]/75">{item.micro}</p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="order-1 min-w-0 lg:order-2 lg:pl-2">
                <Eyebrow className="mb-3 text-[#B8DC6F]/90">Ecossistema MedSênior</Eyebrow>
                <SectionTitle tone="light" className="mb-4 text-pretty">
                  O padrão ouro em <br />
                  <span className="font-medium italic text-[#B8DC6F]">medicina preventiva.</span>
                </SectionTitle>
                <p className="lp-prose-light mb-6 max-w-xl lg:max-w-none">
                  Criado para quem entende que a saúde é o maior ativo. Nosso modelo de cuidado ativo foca em longevidade com
                  qualidade, reduzindo surpresas e garantindo conforto.
                </p>
                <div className="mb-6 rounded-2xl border border-white/15 bg-white/[0.03] p-3 shadow-[0_20px_50px_-28px_rgba(0,0,0,0.65)] md:rounded-3xl md:p-4">
                  <img
                    src={LANDING_DIFFERENCIAL_IMAGE_SRC}
                    width={1080}
                    height={1080}
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    alt="Diferenciais MedSênior — cuidado preventivo e bem-estar"
                    className="pointer-events-none mx-auto block h-auto w-full max-w-[520px] select-none object-contain"
                    loading="lazy"
                    decoding="async"
                    {...imgBlockSaveAttrs}
                  />
                </div>
                <CtaButton typebot variant="primary" className="w-full justify-center sm:inline-flex sm:w-auto sm:min-w-[12rem]">
                  <MessageCircle size={16} className="shrink-0" aria-hidden />
                  Falar com Especialista
                </CtaButton>
              </div>
            </div>
          </Container>
        </Section>

        <Section id="rede" variant="default" className="bg-[#F7F8F1]">
          <Container>
            <div className="mx-auto mb-8 max-w-3xl px-0 text-center sm:mb-9 md:mb-10">
              <Eyebrow className="mb-2">Infraestrutura em Curitiba</Eyebrow>
              <SectionTitle center className="mb-3">
                Rede de Excelência
              </SectionTitle>
              <p className="lp-prose mx-auto max-w-2xl text-base">
                Hospitais de referência, centros de diagnóstico e a nossa unidade exclusiva no coração da cidade.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-5">
              <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#0D6B3C]/15 bg-[#FDFDFD] p-4 shadow-[0_10px_35px_-26px_rgba(6,61,36,0.35)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_38px_-24px_rgba(6,61,36,0.35)] md:rounded-3xl md:p-5">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#B8DC6F] via-[#0D6B3C]/70 to-transparent" />
                <div className="mb-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#063D24] text-[#B8DC6F] shadow-md transition-transform group-hover:scale-105">
                  <StethIcon size={20} />
                </div>
                <h3 className="mb-3 font-display text-base font-bold tracking-tight text-[#063D24]">Hospitais</h3>
                <ul className="space-y-0">
                  {[
                    'Hospital Santa Casa de Curitiba',
                    'Hospital XV',
                    'Hospital Vita Curitiba',
                    'Hospital da Maternidade Brígida',
                    'Hospital Ônix Batel',
                  ].map((item) => (
                    <li
                      key={item}
                      className="group/item flex cursor-default items-center gap-3 border-b border-[#063D24]/8 py-2 text-left last:border-0 hover:border-[#B8DC6F]/45"
                    >
                      <div className="h-0.5 w-5 origin-left scale-x-50 rounded-full bg-[#B8DC6F] transition-transform group-hover/item:scale-x-100" />
                      <span className="text-sm font-medium leading-snug text-[#063D24]/80 transition-colors group-hover/item:text-[#063D24]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#0D6B3C]/15 bg-[#FDFDFD] p-4 shadow-[0_10px_35px_-26px_rgba(6,61,36,0.35)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_38px_-24px_rgba(6,61,36,0.35)] md:rounded-3xl md:p-5">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0D6B3C]/80 via-[#B8DC6F]/70 to-transparent" />
                <div className="mb-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#063D24] text-[#B8DC6F] shadow-md transition-transform group-hover:scale-105">
                  <Activity size={20} />
                </div>
                <h3 className="mb-3 font-display text-base font-bold tracking-tight text-[#063D24]">Diagnóstico</h3>
                <ul className="space-y-0">
                  {['Fischmann Aisengart', 'Lanc Laboratório', 'DAPI Diagnóstico', 'CETAC'].map((item) => (
                    <li
                      key={item}
                      className="group/item flex cursor-default items-center gap-3 border-b border-[#063D24]/5 py-2 last:border-0 hover:border-[#0D6B3C]/40"
                    >
                      <div className="h-0.5 w-5 origin-left scale-x-50 rounded-full bg-[#0D6B3C] transition-transform group-hover/item:scale-x-100" />
                      <span className="text-sm font-medium leading-snug text-[#063D24]/80 transition-colors group-hover/item:text-[#063D24]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="group relative flex min-h-0 flex-col overflow-hidden rounded-2xl border border-[#0D6B3C]/15 bg-[#FDFDFD] p-4 shadow-[0_10px_35px_-26px_rgba(6,61,36,0.35)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_38px_-24px_rgba(6,61,36,0.35)] md:col-span-2 md:mx-auto md:max-w-xl md:rounded-3xl md:p-5 lg:col-span-1 lg:mx-0 lg:max-w-none">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#063D24]/80 via-[#B8DC6F]/60 to-transparent" />
                <div className="mb-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#063D24] text-[#B8DC6F] shadow-md transition-transform group-hover:scale-105">
                  <Building2 size={20} aria-hidden />
                </div>
                <h3 className="mb-2 font-display text-base font-bold tracking-tight text-[#063D24]">Unidade Própria</h3>
                <p className="mb-4 text-sm font-medium leading-relaxed text-[#5F6F67]">
                  Cuidado multidisciplinar com oficinas de saúde e acompanhamento preventivo personalizado.
                </p>
                <ul className="mb-5 space-y-0">
                  {['Unidade MedSênior Curitiba', 'Oficinas de Arte e Terapia', 'Programas de Nutrição', 'Medicina Preventiva'].map(
                    (item) => (
                      <li
                        key={item}
                        className="group/item flex cursor-default items-center gap-3 border-b border-[#063D24]/5 py-2 last:border-0 hover:border-[#B8DC6F]/40"
                      >
                        <div className="h-0.5 w-5 origin-left scale-x-50 rounded-full bg-[#B8DC6F] transition-transform group-hover/item:scale-x-100" />
                        <span className="text-sm font-medium leading-snug text-[#063D24]/80 transition-colors group-hover/item:text-[#063D24]">
                          {item}
                        </span>
                      </li>
                    ),
                  )}
                </ul>
                <CtaButton typebot variant="muted" className="mt-auto self-center !px-6 sm:!px-7">
                  <MessageCircle size={16} className="shrink-0" aria-hidden />
                  Consultar via WhatsApp
                </CtaButton>
              </div>
            </div>
          </Container>
        </Section>

        <Section variant="dark" className="py-10 sm:py-12 md:py-16">
          <Container narrow className="max-w-4xl">
            <div className="mb-6 text-center sm:mb-8 md:mb-9">
              <Eyebrow className="mb-1.5 text-[#B8DC6F]/80">Assistência</Eyebrow>
              <SectionTitle center tone="light" className="text-[1.75rem] md:text-[2rem] lg:text-[2.1rem]">
                Perguntas Frequentes
              </SectionTitle>
            </div>
            <div className="space-y-2.5">
              {faqItems.map((faq, i) => (
                <div
                  key={faq.q}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition-colors hover:border-white/20"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    className={`flex w-full touch-manipulation items-center justify-between gap-3 px-4 py-3.5 text-left transition-colors min-[400px]:px-5 md:py-3.5 ${
                      openFaq === i
                        ? 'bg-white/[0.12] text-white'
                        : 'bg-transparent text-white hover:bg-white/[0.08]'
                    }`}
                  >
                    <span className="min-w-0 flex-1 text-[15px] font-semibold leading-snug tracking-tight md:text-[15px]">
                      {faq.q}
                    </span>
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors ${
                        openFaq === i
                          ? 'rotate-180 border-white/20 bg-white/10 text-white'
                          : 'border-white/10 bg-white/[0.08] text-white/80'
                      }`}
                    >
                      {openFaq === i ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden border-t border-white/10 bg-transparent"
                      >
                        <div className="break-words px-4 py-3.5 text-[14px] leading-relaxed text-white/70 md:px-5 md:py-3.5">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      </main>

      <footer className="border-t border-white/10 bg-[#02160E] pb-[env(safe-area-inset-bottom,0px)] text-white/75">
        <Container className="py-8 md:py-10">
          <nav
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] leading-snug text-white/70"
            aria-label="Rodapé"
          >
            <Link to="/termos" className="inline-flex min-h-11 items-center px-2 py-2 text-center transition-colors hover:text-[#B8DC6F]">
              Termos de Uso
            </Link>
            <Link to="/privacidade" className="inline-flex min-h-11 items-center px-2 py-2 text-center transition-colors hover:text-[#B8DC6F]">
              Privacidade
            </Link>
          </nav>
          <p className="mt-5 text-center text-[10px] leading-snug text-white/45">© 2026 Todos os direitos reservados.</p>
        </Container>
      </footer>
    </div>
  );
}
