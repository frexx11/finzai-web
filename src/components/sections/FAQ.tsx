import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What exactly is Finzai?",
    answer: "Finzai is a proactive AI investment agent that learns your financial profile — your goals, risk tolerance, and preferences — to deliver personalized, real-time market insights and recommendations.",
  },
  {
    question: "Is Finzai a trading platform?",
    answer: "No. Finzai is an intelligence layer, not a broker. We provide the insights and analysis; you make the decisions and execute trades on your preferred platform.",
  },
  {
    question: "How does personalization work?",
    answer: "When you onboard, Finzai builds a comprehensive profile based on your financial goals, risk appetite, investment timeline, and market interests. Every insight is filtered through this lens.",
  },
  {
    question: "Is my financial data safe?",
    answer: "Absolutely. We use end-to-end encryption, never sell your data, and follow the strictest privacy standards. Your financial information is yours — always.",
  },
  {
    question: "When will Finzai launch?",
    answer: "We're currently in development with early access planned soon. Join our waitlist to be among the first to experience Finzai.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="relative py-32 lg:py-40">
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
            FAQ
          </span>
          <h2 className="mt-5 font-display text-3xl font-medium tracking-tight sm:text-4xl lg:text-[2.75rem]" style={{ letterSpacing: '-0.02em' }}>
            Common{" "}
            <span className="text-gradient">questions.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mx-auto mt-16 max-w-2xl"
        >
          <Accordion type="single" collapsible className="space-y-0">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b-0 py-1"
                style={{ borderBottom: '1px solid hsl(210 14% 91% / 0.06)' }}
              >
                <AccordionTrigger className="py-5 text-left font-display text-base font-medium text-foreground hover:text-foreground hover:no-underline transition-colors duration-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-[1.7] text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
