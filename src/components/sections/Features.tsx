import { motion } from "framer-motion";
import { MessageCircle, LineChart, Zap, Fingerprint, Lock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Feature content aligned with Finzai-App capabilities
const getFeatures = (t: any) => [
  {
    icon: MessageCircle,
    title: t('features.feat1Title'),
    description: t('features.feat1Desc'),
    colSpan: "md:col-span-2",
    visual: () => (
      <div className="absolute right-0 bottom-0 top-0 w-1/2 overflow-hidden hidden md:block rounded-r-2xl pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-l from-primary/10 via-primary/5 to-transparent z-0" />
        
        {/* Mock Chat Interface Visual */}
        <div className="absolute right-[-5%] top-[15%] w-[90%] space-y-5 select-none opacity-80 scale-105">
           {/* User Message */}
           <div className="bg-card border border-white/5 rounded-2xl rounded-tr-none p-5 w-[85%] shadow-lg transform translate-x-4">
             <div className="flex gap-2 mb-3">
                <div className="w-4 h-4 rounded-full bg-muted-foreground/30" />
                <div className="h-3 w-32 bg-muted rounded-full" />
             </div>
             <div className="space-y-2">
                <div className="h-2 w-full bg-muted/60 rounded-full" />
                <div className="h-2 w-4/5 bg-muted/60 rounded-full" />
             </div>
           </div>
           
           {/* AI Response Message */}
           <div className="bg-gradient-to-br from-primary/20 to-accent/10 backdrop-blur-md border border-primary/30 rounded-2xl rounded-tl-none p-5 w-[95%] ml-auto shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)] transform -translate-x-4">
             <div className="flex items-center gap-3 mb-3">
               <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center shadow-glow">
                  <MessageCircle className="w-3 h-3 text-white" />
               </div>
               <div className="h-3 w-24 bg-primary/60 rounded-full" />
             </div>
             <div className="space-y-2.5">
               <div className="h-2.5 w-full bg-primary/40 rounded-full" />
               <div className="h-2.5 w-[90%] bg-primary/40 rounded-full" />
               <div className="h-2.5 w-[70%] bg-primary/40 rounded-full" />
             </div>
           </div>
        </div>
      </div>
    )
  },
  {
    icon: LineChart,
    title: t('features.feat2Title'),
    description: t('features.feat2Desc'),
    colSpan: "md:col-span-1",
    visual: () => (
       <div className="absolute inset-x-0 bottom-0 h-[60%] overflow-hidden opacity-40 select-none pointer-events-none rounded-b-2xl">
         <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent" />
         <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full stroke-accent fill-accent/10 drop-shadow-[0_0_15px_rgba(0,255,255,0.5)]">
           <path d="M0,50 L0,40 L15,35 L30,45 L50,25 L70,30 L90,10 L100,15 L100,50 Z" strokeWidth="1.5" strokeLinejoin="round" />
         </svg>
       </div>
    )
  },
  {
    icon: Zap,
    title: t('features.feat3Title'),
    description: t('features.feat3Desc'),
    colSpan: "md:col-span-1",
    visual: () => (
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/20 rounded-full blur-[50px] animate-pulse" />
        
        {/* Floating insight cards */}
        <div className="absolute -right-4 -bottom-4 bg-card/80 backdrop-blur-sm border border-white/10 p-3 rounded-xl shadow-lg w-40 opacity-50 -rotate-12">
            <div className="flex items-center gap-2 mb-2">
                <Zap className="w-3 h-3 text-accent" />
                <div className="h-1.5 w-16 bg-muted-foreground/30 rounded-full" />
            </div>
            <div className="h-1 w-full bg-muted/50 rounded-full mb-1" />
            <div className="h-1 w-3/4 bg-muted/50 rounded-full" />
        </div>
      </div>
    )
  },
  {
    icon: Fingerprint,
    title: t('features.feat4Title'),
    description: t('features.feat4Desc'),
    colSpan: "md:col-span-1",
    visual: () => (
      <div className="absolute right-[-15%] bottom-[-15%] w-56 h-56 opacity-[0.07] select-none pointer-events-none text-white transition-opacity duration-500 group-hover:opacity-[0.15]">
         <Fingerprint className="w-full h-full" strokeWidth={0.5} />
      </div>
    )
  },
  {
    icon: Lock,
    title: t('features.feat5Title'),
    description: t('features.feat5Desc'),
    colSpan: "md:col-span-1",
    visual: () => (
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl">
        {/* Layered Security Aura */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Animated Security Rings */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-primary/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-1000 ease-out" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-primary/10 rounded-full scale-0 group-hover:scale-110 transition-transform duration-700 ease-out delay-100" />
        
        {/* Lock visual pop in the background */}
        <div className="absolute right-[-10%] bottom-[-10%] w-40 h-40 opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-700 rotate-12 group-hover:rotate-0 group-hover:scale-110">
           <Lock className="w-full h-full text-white" strokeWidth={0.5} />
        </div>

        {/* Floating security particles */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
           <div className="absolute top-[20%] left-[30%] w-1 h-1 bg-primary rounded-full animate-pulse" />
           <div className="absolute top-[60%] right-[25%] w-1 h-1 bg-accent rounded-full animate-pulse delay-75" />
           <div className="absolute bottom-[20%] left-[45%] w-1 h-1 bg-primary rounded-full animate-pulse delay-150" />
        </div>
      </div>
    )
  }
];

const Features = () => {
  const { t } = useLanguage();
  const features = getFeatures(t);

  return (
    <section id="features" className="relative py-32 lg:py-40">
      {/* Top divider */}
      <div className="section-divider absolute left-0 right-0 top-0" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
            {t('features.badge')}
          </span>
          <h2 className="mt-5 font-display text-3xl font-medium tracking-tight sm:text-4xl lg:text-[2.75rem]" style={{ letterSpacing: '-0.02em' }}>
            {t('features.title1')}{" "}
            <span className="text-gradient hover-trigger">{t('features.title2')}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-[1.8] text-muted-foreground">
            {t('features.desc')}
          </p>
        </motion.div>

        {/* Highlighted Introductor Block - Integrated closer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-10 max-w-[1200px] relative rounded-2xl p-px overflow-hidden group"
        >
          {/* Animated gradient border */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/30 to-primary/0 group-hover:via-accent/60 transition-opacity duration-1000 opacity-40" />
          
          <div className="relative bg-card/60 backdrop-blur-md rounded-[15px] p-7 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8 border border-white/5">
            <div className="flex-1">
              <h3 className="font-display text-xl md:text-2xl font-medium text-foreground mb-3">
                {t('features.highlightTitle1')} <span className="text-muted-foreground font-normal">{t('features.highlightTitle2')}</span>
              </h3>
              <p className="text-muted-foreground/90 leading-relaxed text-sm md:text-base max-w-3xl">
                {t('features.highlightDesc')}
              </p>
            </div>
            <div className="shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 border border-accent/20 text-accent group-hover:bg-accent/20 transition-all duration-500">
               <Zap className="w-7 h-7 group-hover:scale-110 transition-transform duration-500" />
            </div>
          </div>
        </motion.div>

        {/* 5-Card Bento Box Grid - Closer to lead-in */}
        <div className="mx-auto mt-10 grid w-full max-w-[1200px] gap-6 md:grid-cols-3 xl:gap-8 auto-rows-fr">
          {features.map((feature, index) => {
            const isWide = index === 0;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className={`group relative flex ${feature.colSpan}`}
              >
                {/* Glow effect behind card on focus/hover */}
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 blur-md focus-within:opacity-100 transition duration-500 group-hover:opacity-100 group-hover:blur-lg" />
                
                {/* Main Card Surface */}
                <div className="relative flex w-full flex-col rounded-2xl p-8 sm:p-10 shadow-ambient transition-all duration-500 bg-card/80 backdrop-blur-sm border border-white/5 hover:border-white/10 hover:bg-card/90 overflow-hidden h-full z-10 group-hover:-translate-y-1">
                  
                  {/* Decorative internal visual block */}
                  {feature.visual()}
                  
                  <div className={`relative z-20 flex flex-col h-full ${isWide ? 'md:w-1/2 md:pr-8' : ''}`}>
                      <div className="flex items-center justify-center rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 h-14 w-14 mb-8 shrink-0 shadow-lg group-hover:shadow-glow transition-all duration-500">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      
                      <div className="flex flex-col mt-auto">
                        <h3 className="font-display font-medium text-foreground tracking-tight text-xl mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-[1.7] font-light">
                          {feature.description}
                        </p>
                      </div>
                  </div>
                  
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
