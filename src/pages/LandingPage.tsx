import React, { useLayoutEffect, useRef, useState } from 'react';
import {
  CheckCircle2,
  MapPin,
  ShieldCheck,
  Users,
  Plus,
  Minus,
  ArrowRight,
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

  const planCardWidthPx = windowWidth < 768 ? Math.min(windowWidth * 0.85, 300) : 320;
  const planCardStride = planCardWidthPx + PLAN_GAP_PX;
  /** Quantos cartões mostramos “cheios” na janela: 3 em md+, 1 em mobile. */
  const planVisibleSlots = windowWidth < 768 ? 1 : 3;
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
    <div id="inicio" className="min-h-screen bg-[#FDFDFD]">
      <main>
        {/* Hero: viewport cheia, header compacto; conteúdo centrado na área útil */}
        <section className="relative flex min-h-dvh flex-col overflow-x-clip bg-[#FDFDFD]">
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 rounded-full bg-[#B8DC6F]/5 blur-[160px]" />
          <SiteHeader />
          <div className="relative flex min-h-0 flex-1 flex-col justify-center py-5 sm:py-8 md:py-10">
            <div className="mx-auto grid w-full max-w-7xl min-h-0 items-center gap-6 px-4 sm:gap-8 sm:px-6 md:grid-cols-2 md:gap-8 lg:gap-10">
              <Container bleed className="min-h-0 min-w-0">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                  <div className="mb-4 inline-flex max-w-full flex-wrap items-center gap-x-2 gap-y-1 rounded-full border border-[#063D24]/10 bg-[#063D24]/5 px-3 py-1.5">
                    <CircleDot size={8} className="shrink-0 animate-pulse text-[#0D6B3C]" />
                    <span className={`${eyebrowClassName} !inline max-w-full`}>
                      MedSênior • Planos em Curitiba 44+
                    </span>
                  </div>
                  <h1 className="mb-5 text-balance font-display text-[1.65rem] font-bold leading-[1.12] tracking-tight text-[#063D24] min-[380px]:text-3xl md:mb-6 md:text-4xl lg:text-[52px] lg:leading-[1.05]">
                    Plano de Saúde <br />
                    <span className="font-medium italic text-[#0D6B3C]">sem coparticipação.</span>
                  </h1>
                  <p className="lp-prose mb-6 max-w-md md:mb-8">
                    Exclusividade em Curitiba para quem busca previsibilidade, rede hospitalar selecionada e medicina
                    preventiva de elite.
                  </p>
                  <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                    <CtaButton typebot variant="primary" className="w-full justify-center sm:w-auto sm:min-w-[14rem]">
                      Consultar Tabela{' '}
                      <ArrowRight size={16} className="transition-transform group-hover/cta:translate-x-0.5" />
                    </CtaButton>
                  </div>
                  <div className="flex flex-wrap gap-x-6 gap-y-3 text-[#063D24]/80 md:gap-8">
                    <div className="flex min-w-0 max-w-full items-center gap-2">
                      <MapPin size={18} className="shrink-0 text-[#0D6B3C]" aria-hidden />
                      <span className="text-[10px] font-semibold uppercase tracking-wide sm:text-[9px]">
                        Curitiba e Grande Curitiba
                      </span>
                    </div>
                    <div className="flex min-w-0 max-w-full items-center gap-2">
                      <CheckCircle2 size={18} className="shrink-0 text-[#0D6B3C]" aria-hidden />
                      <span className="text-[10px] font-semibold uppercase tracking-wide sm:text-[9px]">
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
                  <div className="group relative aspect-[5/4] max-h-[min(72vh,520px)] overflow-hidden rounded-2xl border-4 border-white bg-gray-100 shadow-[0_32px_64px_-24px_rgba(6,61,36,0.18)] sm:max-h-none md:rounded-3xl md:border-[6px]">
                    <img
                      src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop"
                      srcSet="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=640&auto=format&fit=crop 640w, https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=960&auto=format&fit=crop 960w, https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop 1200w, https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1600&auto=format&fit=crop 1600w"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      width={1200}
                      height={960}
                      alt="Excelência em Saúde Curitiba"
                      className="pointer-events-none h-full w-full select-none object-cover grayscale-[0.1] transition-transform duration-700 group-hover:scale-105"
                      decoding="async"
                      fetchPriority="high"
                      referrerPolicy="no-referrer"
                      {...imgBlockSaveAttrs}
                    />
                    <div
                      className="absolute inset-0"
                      aria-hidden
                      style={{
                        background:
                          'linear-gradient(to top, rgb(6, 61, 36) 0%, rgba(6, 61, 36, 0.94) 14%, rgba(6, 61, 36, 0.72) 32%, rgba(6, 61, 36, 0.42) 48%, rgba(6, 61, 36, 0.18) 62%, transparent 78%)',
                      }}
                    />
                    <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col gap-2.5 p-4 pb-4 sm:gap-3 sm:p-5 sm:pb-5 md:p-6 md:pb-6">
                      <div className="max-w-md rounded-xl border border-white/15 bg-black/35 px-2.5 py-2 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.45)] backdrop-blur-md sm:rounded-2xl sm:px-3 sm:py-2.5 md:px-4 md:py-3 [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]">
                        <span className={`${eyebrowClassName} mb-1.5 !inline text-white/90`}>
                          Localização Estratégica
                        </span>
                        <h3 className="font-display text-base font-bold leading-snug text-white md:text-lg">
                          Unidade Própria em Curitiba focada em longevidade ativa.
                        </h3>
                      </div>
                      <motion.div
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        className="flex max-w-full items-center gap-3 rounded-xl border border-white/20 bg-white/95 p-3 pr-4 shadow-lg backdrop-blur-sm"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#B8DC6F] text-[#063D24] shadow-sm">
                          <HeartPulse size={20} />
                        </div>
                        <div className="min-w-0">
                          <span className="block text-[9px] font-semibold uppercase tracking-wide text-[#5F6F67]">
                            Especialidade
                          </span>
                          <span className="text-sm font-bold tracking-tight text-[#063D24]">Cuidado 44+</span>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </Container>
            </div>
          </div>
        </section>

        <Section id="planos" variant="white" className="overflow-hidden border-t border-slate-200/80">
          <Container>
            <div className="mb-8 flex flex-col justify-between gap-6 sm:mb-9 md:mb-10 md:flex-row md:items-end">
              <div className="max-w-lg min-w-0">
                <p className="mb-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-slate-500">Planos</p>
                <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-800 md:text-3xl">
                  MedSênior em Curitiba
                </h2>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-500">
                  Compare as linhas e peça orientação comercial quando quiser avançar.
                </p>
              </div>
              <div className="flex shrink-0 gap-2 self-end sm:self-auto md:self-end">
                <button
                  type="button"
                  onClick={() => setFocusedIndex((prev) => (prev <= 0 ? planMaxSlide : prev - 1))}
                  className="inline-flex h-11 w-11 touch-manipulation items-center justify-center rounded-md border border-slate-200 text-slate-600 transition-colors hover:bg-slate-50"
                  aria-label="Slide anterior"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => setFocusedIndex((prev) => (prev >= planMaxSlide ? 0 : prev + 1))}
                  className="inline-flex h-11 w-11 touch-manipulation items-center justify-center rounded-md border border-slate-200 text-slate-600 transition-colors hover:bg-slate-50"
                  aria-label="Slide seguinte"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            <div ref={planCarouselOuterRef} className="w-full min-w-0">
              <div
                className="mx-auto max-w-full min-w-0 overflow-x-hidden"
                style={{ width: planOuterW > 0 ? `${planViewportW}px` : '100%' }}
              >
                <motion.div
                  drag={planMaxScrollPx > 0 ? 'x' : false}
                  dragConstraints={{
                    left: -planMaxScrollPx,
                    right: 0,
                  }}
                  dragElastic={0.06}
                  onDragEnd={(_, info) => {
                    const threshold = 40;
                    if (info.offset.x < -threshold) {
                      setFocusedIndex((prev) => (prev >= planMaxSlide ? 0 : prev + 1));
                    } else if (info.offset.x > threshold) {
                      setFocusedIndex((prev) => (prev <= 0 ? planMaxSlide : prev - 1));
                    }
                  }}
                  className={`flex gap-4 px-0.5 pb-8 md:gap-4 md:px-0 ${planMaxScrollPx > 0 ? 'cursor-grab active:cursor-grabbing' : ''}`}
                  animate={{ x: -planTranslateX }}
                  transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                  style={{ width: 'fit-content' }}
                >
                  {plans.map((plan, i) => (
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
                      className="relative flex min-h-[380px] w-[min(85vw,300px)] shrink-0 cursor-pointer select-none flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-md sm:min-h-[420px] sm:p-6 md:min-h-[440px] md:w-80 md:p-7"
                    >
                    <div className="mb-6">
                      <p className="text-[10px] font-medium uppercase tracking-wide text-slate-500">{plan.badge}</p>
                      <h3 className="mt-1 font-display text-xl font-semibold tracking-tight text-slate-800 md:text-2xl">
                        {plan.title}
                      </h3>
                      <p className="mt-2 text-[11px] leading-snug text-slate-400">{plan.technical}</p>
                    </div>
                    <p className="mb-6 text-sm leading-relaxed text-slate-600">{plan.description}</p>
                    <ul className="mb-6 space-y-2.5">
                      {plan.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <CheckCircle2
                            size={16}
                            className="mt-0.5 shrink-0 text-slate-400"
                            aria-hidden
                          />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto space-y-3 border-t border-slate-100 pt-4">
                      <p className="flex items-start gap-2 text-xs leading-snug text-slate-500">
                        <MapPin size={14} className="mt-0.5 shrink-0 text-slate-400" aria-hidden />
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
                      </CtaButton>
                    </div>
                  </motion.div>
                ))}
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
                        focusedIndex === i ? 'w-8 bg-slate-700' : 'w-1.5 bg-slate-200 hover:bg-slate-300'
                      }`}
                    />
                  </button>
                ))}
              </div>
              <span className="text-[11px] tabular-nums text-slate-400">
                {focusedIndex + 1} / {planMaxSlide + 1}
              </span>
            </div>
          </Container>
        </Section>

        <Section variant="muted">
          <Container>
            <div className="grid items-center gap-8 md:gap-10 lg:grid-cols-2 lg:gap-12">
              <div className="order-2 min-w-0 lg:order-1">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                  {benefits.map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="group rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-all hover:shadow-md md:rounded-3xl md:p-7"
                    >
                      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#063D24]/5 text-[#0D6B3C] transition-all group-hover:bg-[#063D24] group-hover:text-white">
                        {i === 0 && <Clock size={20} />}
                        {i === 1 && <Activity size={20} />}
                        {i === 2 && <Users size={20} />}
                        {i === 3 && <ShieldCheck size={20} />}
                      </div>
                      <h4 className="mb-2 font-display text-lg font-bold leading-snug tracking-tight text-[#063D24]">
                        {item.title}
                      </h4>
                      <p className="lp-prose mb-4 text-sm">{item.description}</p>
                      {item.micro && (
                        <p className="text-[9px] font-medium uppercase tracking-wide text-[#0D6B3C]/50">{item.micro}</p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="order-1 min-w-0 lg:order-2 lg:pl-4">
                <Eyebrow className="mb-3">Ecossistema MedSênior</Eyebrow>
                <SectionTitle className="mb-4 text-pretty">
                  O padrão ouro em <br />
                  <span className="font-medium italic text-[#0D6B3C]">medicina preventiva.</span>
                </SectionTitle>
                <p className="lp-prose mb-6 max-w-xl lg:max-w-none">
                  Criado para quem entende que a saúde é o maior ativo. Nosso modelo de cuidado ativo foca em longevidade com
                  qualidade, reduzindo surpresas e garantindo conforto.
                </p>
                <CtaButton typebot variant="muted" className="w-full justify-center sm:inline-flex sm:w-auto sm:min-w-[12rem]">
                  Falar com Especialista <Plus size={16} className="transition-transform group-hover/cta:rotate-90" />
                </CtaButton>
              </div>
            </div>
          </Container>
        </Section>

        <Section id="rede" variant="white">
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
              <div className="group flex flex-col rounded-2xl border border-[#063D24]/10 bg-[#F9FAF6]/50 p-4 transition-colors hover:bg-[#F9FAF6] md:rounded-3xl md:p-5">
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
                      className="group/item flex cursor-default items-center gap-3 border-b border-[#063D24]/5 py-2 text-left last:border-0 hover:border-[#B8DC6F]/40"
                    >
                      <div className="h-0.5 w-5 origin-left scale-x-50 rounded-full bg-[#B8DC6F] transition-transform group-hover/item:scale-x-100" />
                      <span className="text-sm font-medium leading-snug text-[#063D24]/80 transition-colors group-hover/item:text-[#063D24]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="group flex flex-col rounded-2xl border border-[#063D24]/10 bg-[#F9FAF6]/50 p-4 transition-colors hover:bg-[#F9FAF6] md:rounded-3xl md:p-5">
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
              <div className="group flex min-h-0 flex-col rounded-2xl border border-[#063D24]/10 bg-[#F9FAF6]/50 p-4 transition-colors hover:bg-[#F9FAF6] md:col-span-2 md:mx-auto md:max-w-xl md:rounded-3xl md:p-5 lg:col-span-1 lg:mx-0 lg:max-w-none">
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
                  Consultar via WhatsApp
                </CtaButton>
              </div>
            </div>
          </Container>
        </Section>

        <Section variant="default">
          <Container narrow>
            <div className="mb-8 text-center sm:mb-9 md:mb-10">
              <Eyebrow className="mb-2">Assistência</Eyebrow>
              <SectionTitle center>Perguntas Frequentes</SectionTitle>
            </div>
            <div className="space-y-2">
              {faqItems.map((faq, i) => (
                <div
                  key={faq.q}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-colors hover:border-slate-300"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    className={`flex w-full touch-manipulation items-center justify-between gap-3 px-4 py-4 text-left transition-colors min-[400px]:px-5 md:py-4 ${
                      openFaq === i
                        ? 'bg-slate-50 text-slate-900'
                        : 'bg-white text-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    <span className="min-w-0 flex-1 text-sm font-semibold leading-snug tracking-tight md:text-base">
                      {faq.q}
                    </span>
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-colors ${
                        openFaq === i
                          ? 'rotate-180 border-slate-200 bg-white text-slate-600'
                          : 'border-transparent bg-slate-100 text-slate-600'
                      }`}
                    >
                      {openFaq === i ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden border-t border-slate-100 bg-white"
                      >
                        <div className="break-words px-4 py-4 text-sm leading-relaxed text-slate-600 md:px-5 md:py-4 md:text-[15px]">
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

      <footer className="border-t border-slate-200 bg-white pb-[env(safe-area-inset-bottom,0px)] text-slate-600">
        <Container className="py-8 md:py-10">
          <nav
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] leading-snug text-slate-500"
            aria-label="Rodapé"
          >
            <Link to="/termos" className="inline-flex min-h-11 items-center px-2 py-2 text-center transition-colors hover:text-slate-800">
              Termos de Uso
            </Link>
            <Link to="/privacidade" className="inline-flex min-h-11 items-center px-2 py-2 text-center transition-colors hover:text-slate-800">
              Privacidade
            </Link>
          </nav>
          <p className="mt-5 text-center text-[10px] leading-snug text-slate-400">© 2026 Todos os direitos reservados.</p>
        </Container>
      </footer>
    </div>
  );
}
