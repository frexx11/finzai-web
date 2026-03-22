import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const getPrinciples = (t: any) => [
  {
    number: "01",
    title: t('philosophy.p1Title'),
    description: t('philosophy.p1Desc'),
  },
  {
    number: "02",
    title: t('philosophy.p2Title'),
    description: t('philosophy.p2Desc'),
  },
  {
    number: "03",
    title: t('philosophy.p3Title'),
    description: t('philosophy.p3Desc'),
  },
  {
    number: "04",
    title: t('philosophy.p4Title'),
    description: t('philosophy.p4Desc'),
  },
  {
    number: "05",
    title: t('philosophy.p5Title'),
    description: t('philosophy.p5Desc'),
  },
];

const Philosophy = () => {
  const { t } = useLanguage();
  const principles = getPrinciples(t);

  return (
    <section id="philosophy" className="relative py-32 lg:py-40">
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
            {t('philosophy.badge')}
          </span>
          <h2 className="mt-5 font-display text-3xl font-medium tracking-tight sm:text-4xl lg:text-[2.75rem]" style={{ letterSpacing: '-0.02em' }}>
            {t('philosophy.title1')}{" "}
            <span className="text-gradient">{t('philosophy.title2')}</span>
          </h2>
        </motion.div>

        <div className="mx-auto mt-20 grid w-full max-w-[1400px] gap-8 lg:grid-cols-2 lg:gap-x-24">
          {principles.map((principle, index) => {
            const isLastOdd = index === principles.length - 1 && principles.length % 2 !== 0;
            return (
              <motion.div
                key={principle.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className={`group relative py-10 border-b border-white/5 ${
                  isLastOdd 
                    ? "lg:col-span-2 lg:mx-auto w-full max-w-2xl flex flex-col items-center text-center gap-6" 
                    : "flex flex-col sm:flex-row items-start gap-4 sm:gap-8"
                }`}
              >
              {/* Number */}
              <span 
                className={`font-display font-bold leading-none transition-colors duration-300 ${isLastOdd ? 'text-6xl' : 'text-5xl'}`}
                style={{ color: 'hsl(210 14% 91% / 0.06)' }}
              >
                {principle.number}
              </span>

              <div className="flex-1">
                <h3 className={`font-display font-medium text-foreground ${isLastOdd ? 'text-xl' : 'text-lg'}`}>
                  {principle.title}
                </h3>
                <p className={`mt-2 text-sm leading-[1.7] text-muted-foreground ${isLastOdd ? 'mx-auto max-w-lg' : ''}`}>
                  {principle.description}
                </p>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
