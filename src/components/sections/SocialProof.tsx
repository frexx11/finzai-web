import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const SocialProof = () => {
  const { t } = useLanguage();

  const metrics = [
    {
      value: t('socialProof.metric1Value'),
      description: t('socialProof.metric1Desc'),
    },
    {
      value: t('socialProof.metric2Value'),
      description: t('socialProof.metric2Desc'),
    },
    {
      value: t('socialProof.metric3Value'),
      description: t('socialProof.metric3Desc'),
    },
  ];

  return (
    <section className="relative py-24 z-10 bg-background/50 border-y border-white/5 backdrop-blur-sm -mt-10 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="text-center mb-12"
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
            {t('socialProof.tagline')}
          </span>
        </motion.div>
        
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex flex-col items-center justify-center text-center pt-8 md:pt-0 px-4"
            >
              <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tighter text-foreground mb-4 drop-shadow-md">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                   {metric.value}
                </span>
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-[250px]">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background glow behind metrics */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-full bg-primary/5 blur-[100px] pointer-events-none z-0" />
    </section>
  );
};

export default SocialProof;
