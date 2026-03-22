import { motion } from "framer-motion";
import { Brain, TrendingUp, Shield, Bell } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const getCapabilities = (t: any) => [
  {
    icon: Brain,
    title: t('platform.cap1Title'),
    description: t('platform.cap1Desc'),
  },
  {
    icon: TrendingUp,
    title: t('platform.cap2Title'),
    description: t('platform.cap2Desc'),
  },
  {
    icon: Shield,
    title: t('platform.cap3Title'),
    description: t('platform.cap3Desc'),
  },
  {
    icon: Bell,
    title: t('platform.cap4Title'),
    description: t('platform.cap4Desc'),
  },
];

const WhatIsFinzai = () => {
  const { t } = useLanguage();
  const capabilities = getCapabilities(t);

  return (
    <section id="what-is-finzai" className="relative py-32 lg:py-40">
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
            {t('platform.badge')}
          </span>
          <h2 className="mt-5 font-display text-3xl font-medium tracking-tight sm:text-4xl lg:text-[2.75rem]" style={{ letterSpacing: '-0.02em' }}>
            {t('platform.title1')}{" "}
            <span className="text-gradient">{t('platform.title2')}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-[1.8] text-muted-foreground">
            {t('platform.desc')}
          </p>
        </motion.div>

        <div className="mx-auto mt-20 grid w-full max-w-[1400px] gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-8">
          {capabilities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="group relative"
            >
              {/* Glow effect behind card on hover */}
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 blur-xl transition duration-500 group-hover:opacity-100" />
              
              <div className="glass-card-hover relative h-full rounded-2xl p-8 shadow-sm group-hover:shadow-soft transition-all duration-300 bg-secondary/20 hover:bg-secondary/40">
                <div 
                  className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
                  style={{ background: 'var(--gradient-card)' }}
                >
                  <item.icon className="h-6 w-6 text-primary drop-shadow-md" />
                </div>
                <h3 className="font-display text-lg font-medium text-foreground tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-[1.8] text-muted-foreground group-hover:text-muted-foreground/90 transition-colors">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsFinzai;
