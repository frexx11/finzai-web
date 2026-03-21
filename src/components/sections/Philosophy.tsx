import { motion } from "framer-motion";

const principles = [
  {
    number: "01",
    title: "Intelligence over noise",
    description: "We filter the chaos so you don't have to. Every insight is vetted, relevant, and actionable.",
  },
  {
    number: "02",
    title: "Your profile, your strategy",
    description: "No generic recommendations. Finzai adapts entirely to your financial DNA — your goals, your risk, your timeline.",
  },
  {
    number: "03",
    title: "Transparency always",
    description: "We show you why we recommend something, not just what. Full reasoning, full control, zero black boxes.",
  },
  {
    number: "04",
    title: "Privacy is non-negotiable",
    description: "Your data is yours. We don't sell, share, or monetize your financial information. Period.",
  },
];

const Philosophy = () => {
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
            Philosophy
          </span>
          <h2 className="mt-5 font-display text-3xl font-medium tracking-tight sm:text-4xl lg:text-[2.75rem]" style={{ letterSpacing: '-0.02em' }}>
            What we{" "}
            <span className="text-gradient">believe in.</span>
          </h2>
        </motion.div>

        <div className="mx-auto mt-20 grid w-full max-w-[1400px] gap-8 lg:grid-cols-2 lg:gap-x-24">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="group relative flex gap-8 py-10 border-b border-white/5"
            >
              {/* Number */}
              <span 
                className="font-display text-5xl font-bold leading-none transition-colors duration-300"
                style={{ color: 'hsl(210 14% 91% / 0.06)' }}
              >
                {principle.number}
              </span>

              <div className="flex-1">
                <h3 className="font-display text-lg font-medium text-foreground">
                  {principle.title}
                </h3>
                <p className="mt-2 text-sm leading-[1.7] text-muted-foreground">
                  {principle.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
