import { motion } from "framer-motion";
import { BarChart3, Fingerprint, Zap, Globe, Lock, LineChart } from "lucide-react";

const features = [
  {
    icon: Fingerprint,
    title: "Personal Profile Engine",
    description: "Learns your risk tolerance, goals, and preferences to create a unique investment lens.",
  },
  {
    icon: BarChart3,
    title: "Deep Market Scanning",
    description: "Continuously monitors thousands of data points across global markets in real-time.",
  },
  {
    icon: Zap,
    title: "Instant Insights",
    description: "Delivers actionable recommendations the moment an opportunity or risk is detected.",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Access intelligence across equities, crypto, commodities, and emerging markets.",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "Your financial data stays yours. End-to-end encryption with zero data selling.",
  },
  {
    icon: LineChart,
    title: "Performance Tracking",
    description: "Track how AI-driven insights perform over time with transparent analytics.",
  },
];

const Features = () => {
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
            Features
          </span>
          <h2 className="mt-5 font-display text-3xl font-medium tracking-tight sm:text-4xl lg:text-[2.75rem]" style={{ letterSpacing: '-0.02em' }}>
            Built for{" "}
            <span className="text-gradient">serious investors.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-[1.8] text-muted-foreground">
            Every feature is designed to reduce noise and amplify signal, 
            giving you the edge you need in today's markets.
          </p>
        </motion.div>

        <div className="mx-auto mt-20 grid max-w-5xl gap-6 md:grid-cols-3 md:grid-rows-3 lg:gap-8">
          {features.map((feature, index) => {
            // Bento layout classes
            const bentoSpans = [
              "md:col-span-2 md:row-span-2 flex-col justify-between", // 1st: Large feature
              "md:col-span-1 md:row-span-1",                            // 2nd: Normal
              "md:col-span-1 md:row-span-1",                            // 3rd: Normal
              "md:col-span-1 md:row-span-1",                            // 4th: Normal
              "md:col-span-2 md:row-span-1 flex-row items-center gap-6",// 5th: Wide horizontal
              "md:col-span-1 md:row-span-1",                            // 6th: Normal
            ];
            
            const isLarge = index === 0;
            const isWide = index === 4;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                className={`group relative flex ${bentoSpans[index]}`}
              >
                {/* Glow effect behind card on hover */}
                <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 blur focus-within:opacity-100 transition duration-500 group-hover:opacity-100" />
                
                <div className={`glass-card-hover relative flex w-full flex-col rounded-3xl p-8 shadow-sm group-hover:shadow-neon transition-all duration-300 bg-secondary/20 hover:bg-secondary/40 border border-white/5 ${isWide ? 'md:flex-row md:items-center' : ''}`}>
                  <div 
                    className={`flex items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-inner ${isLarge ? 'h-16 w-16 mb-8' : isWide ? 'h-14 w-14 mb-0 shrink-0' : 'h-12 w-12 mb-6'}`}
                    style={{ background: 'var(--gradient-card)' }}
                  >
                    <feature.icon className={`${isLarge ? 'h-8 w-8' : isWide ? 'h-6 w-6' : 'h-6 w-6'} text-primary drop-shadow-md`} />
                  </div>
                  
                  <div className={isWide ? 'ml-6' : ''}>
                    <h3 className={`font-display font-medium text-foreground tracking-tight ${isLarge ? 'text-2xl mt-auto' : 'text-lg'}`}>
                      {feature.title}
                    </h3>
                    <p className={`text-muted-foreground ${isLarge ? 'mt-4 text-base leading-relaxed' : 'mt-3 text-sm leading-[1.8]'}`}>
                      {feature.description}
                    </p>
                  </div>
                  
                  {isLarge && (
                    <div className="absolute top-8 right-8 h-32 w-32 rounded-full bg-primary/5 blur-[80px]" />
                  )}
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
