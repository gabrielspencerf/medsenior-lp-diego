import React, { useState } from 'react';
import { 
  CheckCircle2, 
  MapPin, 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  Users, 
  Plus, 
  Minus,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Stethoscope,
  HeartPulse,
  Activity,
  Award,
  CircleDot,
  Building2,
  Clock,
  Stethoscope as StethIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const WHATSAPP_URL = "<WHATSAPP_URL>";

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [windowWidth, setWindowWidth] = React.useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const plans = [
    {
      title: "Infinite",
      badge: "Inovação",
      technical: "Exclusividade | Sob Consulta",
      description: "Plano premium MedSênior para quem busca uma experiência de cuidado mais completa, com rede selecionada e atendimento diferenciado.",
      highlights: ["Atendimento VIP", "Rede Exclusiva", "Gestão de Saúde"],
      area: "Consulte disponibilidade para Curitiba",
      cta: "Cotar Infinite"
    },
    {
      title: "Black",
      badge: "Premium",
      technical: "Apartamento | ANS 502.795/25-1",
      description: "Segmento premium da MedSênior, com hospitais e clínicas de primeira linha, suporte a procedimentos complexos e atendimento mais personalizado.",
      highlights: ["Rede credenciada selecionada", "Apartamento individual", "Reembolso diferenciado"],
      area: "DF, ES, MG, PR, RJ, RS, SP e PE",
      cta: "Cotar Black"
    },
    {
      title: "PR4",
      badge: "Privacidade",
      technical: "Apartamento | ANS 492.173/22-9",
      description: "Plano com acomodação em apartamento para quem busca mais privacidade em caso de internação, com rede credenciada ampla e foco em recuperação tranquila.",
      highlights: ["Sem coparticipação", "Oficinas de saúde", "Telemedicina 24h"],
      area: "Campo Largo, Curitiba e S. J. dos Pinhais (PR)",
      cta: "Cotar PR4"
    },
    {
      title: "PR3",
      badge: "Rede Ampla",
      technical: "Enfermaria | ANS 492.174/22-7",
      description: "Opção com mensalidade mais acessível, cobertura ambulatorial e hospitalar, rede credenciada ampla e médicos de referência à disposição.",
      highlights: ["Sem coparticipação", "Oficinas de saúde", "Telemedicina 24h"],
      area: "Campo Largo, Curitiba e S. J. dos Pinhais (PR)",
      cta: "Cotar PR3"
    }
  ];

  const benefits = [
    {
      title: "Carência Zero*",
      description: "Para quem faz portabilidade de outro plano, sem cumprir novos prazos, exceto CPT.",
      micro: "Sujeito às regras da operadora."
    },
    {
      title: "Sem Coparticipação",
      description: "Consultas, exames e procedimentos cobertos sem cobrança extra por utilização."
    },
    {
      title: "Oficinas de Saúde",
      description: "Arte, nutrição, dança e memória para estimular rotina ativa e bem-estar."
    },
    {
      title: "Medicina Preventiva",
      description: "Acompanhamento contínuo para identificar riscos cedo e promover qualidade de vida."
    }
  ];

  const faqItems = [
    {
      q: "MedSênior atende em Curitiba?",
      a: "Sim. A MedSênior possui atendimento em Curitiba e região, com rede credenciada e unidade própria para clientes."
    },
    {
      q: "O plano tem coparticipação?",
      a: "Os planos destacados trabalham com mensalidade sem coparticipação, conforme condições comerciais e cobertura contratada."
    },
    {
      q: "O que significa carência zero?",
      a: "A possibilidade de carência zero se aplica principalmente em casos de portabilidade de outro plano, exceto CPT, conforme regras da operadora e legislação vigente."
    },
    {
      q: "Como faço uma cotação?",
      a: "Clique no botão de WhatsApp e fale com um consultor para receber orientação sobre opções disponíveis em Curitiba."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      {/* WhatsApp Button */}
      <a 
        href={WHATSAPP_URL} 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Falar pelo WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all flex items-center justify-center group"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-300 font-bold whitespace-nowrap">WhatsApp</span>
      </a>

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-[#063D24]/5 h-20">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-12">
            <div className="flex flex-col">
              <span className="text-[#063D24] font-black text-2xl tracking-tighter leading-none font-display">BrasCare</span>
              <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-[#5F6F67]/60 mt-1">Consultoria Premium</span>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-20">
        {/* HERO SECTION */}
        <section className="relative px-6 py-12 md:py-20 lg:py-28 overflow-hidden bg-[#FDFDFD]">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#B8DC6F]/5 blur-[160px] pointer-events-none rounded-full"></div>
          
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 bg-[#063D24]/5 border border-[#063D24]/10 px-4 py-1.5 rounded-full mb-4">
                <CircleDot size={8} className="text-[#0D6B3C] animate-pulse" />
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#0D6B3C]">MedSênior Curitiba • Premium 44+</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-[56px] font-bold text-[#063D24] leading-[1.1] lg:leading-[1] mb-5 md:mb-7 font-display tracking-tight">
                Plano de Saúde <br />
                <span className="text-[#0D6B3C] italic font-medium">sem coparticipação.</span>
              </h1>
              <p className="text-sm md:text-base text-[#5F6F67] mb-7 md:mb-9 max-w-md leading-relaxed font-medium opacity-70">
                Exclusividade em Curitiba para quem busca previsibilidade, rede hospitalar selecionada e medicina preventiva de elite.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-9">
                <a 
                  href={WHATSAPP_URL} 
                  className="bg-[#B8DC6F] text-[#063D24] px-9 py-4 rounded-full font-bold text-[12px] md:text-sm uppercase tracking-widest hover:scale-105 hover:bg-white transition-all flex items-center justify-center gap-4 shadow-xl shadow-[#B8DC6F]/10 group active:scale-95"
                >
                  Consultar Tabela <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="flex flex-wrap gap-10 opacity-60">
                <div className="flex items-center gap-3">
                  <ShieldCheck size={20} className="text-[#0D6B3C]" />
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#063D24]">Certificado Adquire</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users size={20} className="text-[#0D6B3C]" />
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#063D24]">Especialista MedSênior</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative lg:pl-10"
            >
              <div className="aspect-[5/4] bg-gray-100 rounded-[60px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(6,61,36,0.15)] border-[8px] border-white relative group">
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop" 
                  alt="Excelência em Saúde Curitiba"
                  className="w-full h-full object-cover grayscale-[0.1] transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#063D24]/80 via-[#063D24]/10 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-12 text-white max-w-md">
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] mb-4 block opacity-50">Localização Estratégica</span>
                  <h3 className="text-2xl font-bold font-display leading-[1.2]">Unidade Própria em Curitiba focada em longevidade ativa.</h3>
                </div>
              </div>
              
              {/* Floating Badge - Refined */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-8 md:-left-4 bg-white p-6 rounded-[32px] shadow-2xl flex items-center gap-5 border border-black/5"
              >
                 <div className="w-14 h-14 bg-[#B8DC6F] text-[#063D24] rounded-2xl flex items-center justify-center shadow-lg shadow-[#B8DC6F]/20">
                    <HeartPulse size={28} />
                 </div>
                 <div className="flex flex-col pr-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#5F6F67]/60">Especialidade</span>
                    <span className="text-xl font-bold text-[#063D24] tracking-tight">Cuidado 44+</span>
                 </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* PLANS SECTION - Refined Interactive Carousel */}
        <section id="planos" className="py-16 md:py-24 px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 md:gap-8 mb-12 md:mb-16 px-4">
              <div className="max-w-2xl">
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-[9px] font-black uppercase tracking-[0.4em] text-[#0D6B3C] mb-4 block"
                >
                  Nossos Planos
                </motion.span>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#063D24] font-display tracking-tight leading-[1]"
                >
                  Escolha o MedSênior <br /> ideal para Curitiba
                </motion.h2>
              </div>
              <div className="hidden md:flex gap-4">
                <button 
                  onClick={() => setFocusedIndex(prev => Math.max(0, prev - 1))}
                  className="w-14 h-14 rounded-full border border-[#063D24]/10 flex items-center justify-center hover:bg-[#063D24] hover:text-white transition-all disabled:opacity-20 disabled:cursor-not-allowed group"
                  disabled={focusedIndex === 0}
                >
                  <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => setFocusedIndex(prev => Math.min(plans.length - 1, prev + 1))}
                  className="w-14 h-14 rounded-full border border-[#063D24]/10 flex items-center justify-center hover:bg-[#063D24] hover:text-white transition-all disabled:opacity-20 disabled:cursor-not-allowed group"
                  disabled={focusedIndex === plans.length - 1}
                >
                  <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="relative group/carousel">
              <motion.div 
                drag="x"
                dragConstraints={{ left: -((plans.length - 1) * (windowWidth < 768 ? windowWidth * 0.8 : 412)), right: 0 }}
                dragElastic={0.1}
                onDragEnd={(_, info) => {
                  const threshold = 50;
                  if (info.offset.x < -threshold && focusedIndex < plans.length - 1) {
                    setFocusedIndex(focusedIndex + 1);
                  } else if (info.offset.x > threshold && focusedIndex > 0) {
                    setFocusedIndex(focusedIndex - 1);
                  }
                }}
                className="flex gap-6 md:gap-8 pb-12 cursor-grab active:cursor-grabbing px-6 md:px-0"
                animate={{ x: -(focusedIndex * (windowWidth < 768 ? windowWidth * 0.82 : 412)) }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{ width: "fit-content" }}
              >
                {plans.map((plan, i) => (
                  <motion.div 
                    key={i} 
                    onClick={() => setFocusedIndex(i)}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`shrink-0 w-[78vw] md:w-[380px] p-8 md:p-10 flex flex-col h-[560px] md:h-[580px] border transition-all duration-700 relative bg-white border-black/5 rounded-[32px] md:rounded-[40px] select-none ${
                      focusedIndex === i 
                      ? "shadow-[0_40px_80px_-20px_rgba(6,61,36,0.12)] ring-1 ring-[#0D6B3C]/20 scale-100 opacity-100" 
                      : "opacity-30 scale-[0.92] border-black/5 blur-[0.5px]"
                    }`}
                  >
                    {focusedIndex === i && (
                      <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#B8DC6F]/10 blur-2xl rounded-full" />
                    )}
                    
                    <div className="mb-8 relative z-10">
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex flex-col gap-1">
                          <span className="text-[8px] font-black uppercase tracking-widest text-[#0D6B3C] bg-[#0D6B3C]/5 px-2.5 py-0.5 rounded-full w-fit">{plan.badge}</span>
                          <h3 className="text-2xl font-bold font-display text-[#063D24] tracking-tight">{plan.title}</h3>
                        </div>
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${focusedIndex === i ? "bg-[#063D24] text-[#B8DC6F]" : "bg-[#F7F8F4] text-[#063D24]"}`}>
                          <Award size={22} />
                        </div>
                      </div>
                      <div className="text-[8px] font-black text-[#5F6F67] uppercase tracking-[0.2em] opacity-40">
                        {plan.technical}
                      </div>
                    </div>

                    <p className="text-[13px] text-[#5F6F67] leading-relaxed mb-7 font-medium opacity-70">
                      {plan.description}
                    </p>
                    
                    <div className="space-y-3 mb-8">
                      {plan.highlights.map((h, hi) => (
                        <div key={hi} className="flex items-center gap-3 group/item">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-colors ${focusedIndex === i ? "bg-[#B8DC6F]/20 text-[#0D6B3C]" : "bg-black/5 text-black/20"}`}>
                            <CheckCircle2 size={12} className="transition-transform group-hover/item:scale-110" />
                          </div>
                          <span className="text-[13px] font-bold text-[#063D24]/80 tracking-tight">{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto space-y-6">
                      <div className="flex items-center gap-3 text-[9px] font-black text-[#5F6F67] uppercase tracking-widest opacity-30 border-t border-black/5 pt-6">
                        <MapPin size={10} className="text-[#0D6B3C]" />
                        {plan.area}
                      </div>
                      <a 
                        href={WHATSAPP_URL} 
                        className={`w-full py-4 rounded-full font-bold text-[11px] uppercase tracking-[0.2em] text-center block transition-all duration-500 overflow-hidden relative group/btn hover:scale-105 active:scale-95 ${
                          focusedIndex === i 
                          ? "bg-[#063D24] text-white shadow-lg shadow-[#063D24]/10" 
                          : "bg-[#F7F8F4] text-[#063D24]"
                        }`}
                      >
                        <span className="relative z-10">{plan.cta}</span>
                        <div className="absolute inset-0 bg-[#0D6B3C] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Carousel Progress Bar */}
            <div className="mt-8 flex justify-center items-center gap-4">
              <div className="flex gap-2">
                {plans.map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => setFocusedIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${focusedIndex === i ? "w-10 bg-[#0D6B3C]" : "w-2 bg-black/10 hover:bg-black/20"}`}
                  />
                ))}
              </div>
              <span className="text-[10px] font-black text-[#5F6F67] uppercase tracking-widest">
                0{focusedIndex + 1} / 0{plans.length}
              </span>
            </div>
          </div>
        </section>


        {/* BENEFITS SECTION */}
        <section className="py-16 md:py-24 px-6 bg-[#F9FAF6]">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-20 items-center">
               <div className="order-2 lg:order-1">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     {benefits.map((item, i) => (
                        <motion.div 
                          key={i} 
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="p-10 bg-white border border-black/5 rounded-[40px] shadow-sm hover:shadow-xl hover:shadow-[#063D24]/5 transition-all group"
                        >
                           <div className="w-14 h-14 bg-[#063D24]/5 rounded-3xl flex items-center justify-center mb-8 text-[#0D6B3C] group-hover:bg-[#063D24] group-hover:text-white transition-all">
                              {i === 0 && <Clock size={24} />}
                              {i === 1 && <Activity size={24} />}
                              {i === 2 && <Users size={24} />}
                              {i === 3 && <ShieldCheck size={24} />}
                           </div>
                           <h4 className="text-2xl font-bold text-[#063D24] mb-3 leading-tight font-display tracking-tight">{item.title}</h4>
                           <p className="text-[15px] text-[#5F6F67] leading-relaxed mb-6 opacity-70">{item.description}</p>
                           {item.micro && <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#0D6B3C]/50">{item.micro}</p>}
                        </motion.div>
                     ))}
                  </div>
               </div>

               <div className="order-1 lg:order-2 lg:pl-10">
                  <span className="text-[9px] font-black uppercase tracking-[0.5em] text-[#0D6B3C] mb-4 block">Ecossistema MedSênior</span>
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#063D24] mb-5 font-display leading-[1] tracking-tighter">O padrão ouro em <br /><span className="italic font-medium text-[#0D6B3C]">medicina preventiva.</span></h2>
                  <p className="text-base text-[#5F6F67] mb-8 font-medium leading-relaxed opacity-70">
                    Criado para quem entende que a saúde é o maior ativo. Nosso modelo de cuidado ativo foca em longevidade com qualidade, reduzindo surpresas e garantindo conforto.
                  </p>
                  <a 
                    href={WHATSAPP_URL} 
                    className="inline-flex items-center gap-4 bg-[#063D24] text-white px-9 py-4 rounded-full font-bold text-[11px] uppercase tracking-widest hover:bg-[#0D6B3C] hover:scale-105 transition-all shadow-lg shadow-[#063D24]/10 group active:scale-95"
                  >
                    Falar com Especialista <Plus size={16} className="group-hover:rotate-90 transition-transform" />
                  </a>
               </div>
            </div>
          </div>
        </section>

        {/* NETWORK SECTION */}
        <section id="rede" className="py-16 md:py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 md:mb-12 max-w-4xl mx-auto">
              <span className="text-[9px] font-black uppercase tracking-[0.5em] text-[#0D6B3C] mb-3 block">Infraestrutura em Curitiba</span>
              <h2 className="text-3xl lg:text-5xl font-bold text-[#063D24] mb-4 font-display tracking-tighter leading-[1]">Rede de Excelência</h2>
              <p className="text-lg text-[#5F6F67] font-medium leading-relaxed opacity-70 max-w-2xl mx-auto">Hospitais de referência, centros de diagnóstico e a nossa unidade exclusiva no coração da cidade.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-10">
              {/* Hospitals */}
              <div className="p-8 md:p-12 border border-[#063D24]/10 rounded-[32px] md:rounded-[40px] bg-[#F9FAF6]/50 flex flex-col hover:bg-[#F9FAF6] transition-colors group">
                 <div className="w-14 h-14 md:w-16 md:h-16 bg-[#063D24] text-[#B8DC6F] rounded-[16px] md:rounded-[20px] flex items-center justify-center mb-8 md:mb-10 shadow-lg group-hover:scale-110 transition-transform">
                    <StethIcon size={28} className="md:w-8 md:h-8" />
                 </div>
                 <h3 className="text-2xl md:text-3xl font-bold text-[#063D24] mb-8 md:mb-10 font-display tracking-tight">Hospitais</h3>
                 <ul className="space-y-2">
                    {["Hospital Santa Casa de Curitiba", "Hospital XV", "Hospital Vita Curitiba", "Hospital da Maternidade Brígida", "Hospital Ônix Batel"].map((item, i) => (
                      <li key={i} className="py-4 flex items-center gap-5 group/item cursor-default border-b border-[#063D24]/5 last:border-0 hover:border-[#B8DC6F]/50 transition-colors">
                         <div className="w-6 h-[2px] bg-[#B8DC6F] rounded-full scale-x-50 group-hover/item:scale-x-100 transition-transform origin-left" />
                         <span className="text-[15px] font-bold text-[#063D24]/70 tracking-tight group-hover/item:text-[#063D24] transition-colors">{item}</span>
                      </li>
                    ))}
                 </ul>
              </div>

              {/* Labs */}
              <div className="p-8 md:p-12 border border-[#063D24]/10 rounded-[32px] md:rounded-[40px] bg-[#F9FAF6]/50 flex flex-col hover:bg-[#F9FAF6] transition-colors group">
                 <div className="w-14 h-14 md:w-16 md:h-16 bg-[#063D24] text-[#B8DC6F] rounded-[16px] md:rounded-[20px] flex items-center justify-center mb-8 md:mb-10 shadow-lg group-hover:scale-110 transition-transform">
                    <Activity size={28} className="md:w-8 md:h-8" />
                 </div>
                 <h3 className="text-2xl md:text-3xl font-bold text-[#063D24] mb-8 md:mb-10 font-display tracking-tight">Diagnóstico</h3>
                 <ul className="space-y-2">
                    {["Fischmann Aisengart", "Lanc Laboratório", "DAPI Diagnóstico", "CETAC"].map((item, i) => (
                      <li key={i} className="py-4 flex items-center gap-5 group/item cursor-default border-b border-[#063D24]/5 last:border-0 hover:border-[#0D6B3C]/50 transition-colors">
                         <div className="w-6 h-[2px] bg-[#0D6B3C] rounded-full scale-x-50 group-hover/item:scale-x-100 transition-transform origin-left" />
                         <span className="text-[15px] font-bold text-[#063D24]/70 tracking-tight group-hover/item:text-[#063D24] transition-colors">{item}</span>
                      </li>
                    ))}
                 </ul>
              </div>

              {/* Own Unit */}
              <div className="p-8 md:p-12 bg-[#063D24] text-white rounded-[32px] md:rounded-[40px] shadow-2xl lg:scale-105 relative overflow-hidden flex flex-col group">
                 <div className="absolute top-0 right-0 p-8 md:p-12 opacity-[0.05] group-hover:scale-110 transition-transform duration-700">
                    <Building2 size={120} className="md:w-40 md:h-40" />
                 </div>
                 <h3 className="text-2xl md:text-3xl font-bold font-display mb-6 md:mb-8 tracking-tight">Unidade Própria</h3>
                 <p className="text-white/60 text-sm md:text-base mb-8 md:mb-10 leading-relaxed font-medium">Cuidado multidisciplinar com oficinas de saúde e acompanhamento preventivo personalizado.</p>
                 <ul className="space-y-2 mb-10">
                    {["Unidade MedSênior Curitiba", "Oficinas de Arte e Terapia", "Programas de Nutrição", "Medicina Preventiva"].map((item, i) => (
                      <li key={i} className="py-4 flex items-center gap-5 group/item cursor-default border-b border-white/10 last:border-0 hover:border-[#B8DC6F]/50 transition-colors">
                         <div className="w-6 h-[2px] bg-[#B8DC6F] rounded-full scale-x-50 group-hover/item:scale-x-100 transition-transform origin-left" />
                         <span className="text-[15px] font-bold text-white/70 tracking-tight group-hover/item:text-white transition-colors">{item}</span>
                      </li>
                    ))}
                 </ul>
                 <a href={WHATSAPP_URL} className="mt-auto w-full bg-[#B8DC6F] text-[#063D24] py-5 rounded-full font-black text-xs uppercase tracking-[0.3em] text-center block hover:bg-white hover:scale-105 transition-all shadow-xl shadow-[#B8DC6F]/10 active:scale-95">Consultar via WhatsApp</a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 md:py-24 px-6 bg-[#FDFDFD]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 md:mb-12">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#0D6B3C] mb-3 block">Assistência</span>
              <h2 className="text-3xl lg:text-5xl font-bold text-[#063D24] font-display tracking-tight">Perguntas Frequentes</h2>
            </div>
            
            <div className="space-y-4">
              {faqItems.map((faq, i) => (
                <div key={i} className="group border border-black/[0.03] rounded-[32px] overflow-hidden transition-all hover:border-[#063D24]/10">
                   <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className={`w-full text-left p-8 flex justify-between items-center transition-all ${openFaq === i ? "bg-[#063D24] text-white" : "bg-white hover:bg-[#F9FAF6]"}`}
                   >
                      <span className="font-bold text-lg pr-8 tracking-tight">{faq.q}</span>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${openFaq === i ? "bg-white text-[#063D24] rotate-180" : "bg-[#063D24]/5 text-[#063D24]"}`}>
                        {openFaq === i ? <Minus size={20} /> : <Plus size={20} />}
                      </div>
                   </button>
                   <AnimatePresence>
                     {openFaq === i && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }} 
                          animate={{ height: "auto", opacity: 1 }} 
                          exit={{ height: 0, opacity: 0 }} 
                          className="overflow-hidden bg-[#F9FAF6]"
                        >
                           <div className="p-10 text-[#5F6F67] leading-relaxed text-sm md:text-base font-medium opacity-90">
                              {faq.a}
                           </div>
                        </motion.div>
                     )}
                   </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="py-16 md:py-24 px-6 bg-[#063D24] relative overflow-hidden text-center text-white">
          <div className="max-w-4xl mx-auto relative z-10">
                 <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-5 md:mb-7 tracking-tight leading-[1]">Fale com um consultor <br /> MedSênior 44+</h2>
                 <p className="text-sm md:text-base text-white/60 mb-9 md:mb-11 font-medium max-w-xl mx-auto leading-relaxed">Receba orientação sobre planos disponíveis em Curitiba, cobertura, rede credenciada e contratação segura.</p>
                 <a 
                  href={WHATSAPP_URL} 
                  className="bg-[#B8DC6F] text-[#063D24] px-10 md:px-12 py-4 md:py-5 rounded-full font-bold text-[12px] md:text-sm uppercase tracking-widest hover:scale-105 hover:bg-white transition-all inline-flex items-center gap-4 shadow-xl shadow-[#B8DC6F]/10 active:scale-95 group"
                 >
                   Solicitar cotação agora <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                 </a>
             <p className="mt-8 text-[10px] text-white/30 uppercase tracking-[0.2em] font-black">Atendimento comercial simples, rápido e sem compromisso.</p>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-[#063D24] text-white py-24 px-6 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-16 mb-20">
            <div className="lg:col-span-2">
               <div className="flex flex-col mb-10">
                 <span className="text-3xl font-black font-display tracking-tighter leading-none">BrasCare</span>
                 <span className="text-[9px] uppercase tracking-[0.5em] font-bold text-[#B8DC6F] mt-2">Consultoria Autorizada MedSênior</span>
               </div>
               <div className="p-8 bg-white/5 border border-white/5 rounded-[32px] text-[10px] text-white/40 leading-relaxed uppercase tracking-[0.1em] font-medium max-w-xl">
                 O conteúdo deste site é de responsabilidade da Brascare Saúde e Corretora de Seguros SS LTDA - CNPJ 45.949.883/0001-19. Este site atua como canal de captação e intermediação comercial e não representa a operadora de saúde.
               </div>
            </div>

            <div>
               <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 mb-8 block">Navegação</span>
               <ul className="space-y-5 text-sm font-bold text-white/60">
                 <li><a href="#planos" className="hover:text-white transition-colors">Portfólio de Planos</a></li>
                 <li><a href="#rede" className="hover:text-white transition-colors">Infraestrutura Médica</a></li>
                 <li><a href={WHATSAPP_URL} className="hover:text-[#B8DC6F] transition-colors">Consultoria Online</a></li>
               </ul>
            </div>

            <div className="flex flex-col justify-between items-end text-right">
                <div className="flex flex-col gap-3">
                   <p className="text-[10px] font-black uppercase tracking-widest text-white/10">© 2025 – BrasCare Saúde</p>
                   <p className="text-[10px] font-black uppercase tracking-widest text-[#B8DC6F] cursor-pointer hover:text-white transition-colors">Privacidade e Termos</p>
                </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/[0.03] text-center">
             <span className="text-[9px] font-black uppercase tracking-[0.6em] text-white/10">MedSênior Curitiba • Inteligência em Seguros Saúde</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
