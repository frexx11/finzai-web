import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const N8N_WEBHOOK_URL = "https://andrea-nuclio.app.n8n.cloud/webhook/finzai-registro";

const CTA = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    const trimmedEmail = email.trim().toLowerCase();

    try {
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: trimmedEmail,
          source: "finzai-landing",
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          language: navigator.language,
          referrer: document.referrer || "direct",
          page: window.location.href,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        
        if (data.message?.includes("Ya estás al día")) {
          toast({
            title: t('toasts.alreadyOnListTitle'),
            description: t('toasts.alreadyOnListDesc'),
          });
        } else {
          setIsSuccess(true);
          toast({
            title: t('toasts.successTitle'),
            description: t('toasts.successDesc'),
          });
        }
        setEmail("");
      } else {
        toast({
          title: t('toasts.errorTitle'),
          description: t('toasts.errorDesc'),
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: t('toasts.errorTitle'),
        description: t('toasts.errorDesc'),
        variant: "destructive",
      });
    }
    
    setIsSubmitting(false);
  };

  return (
    <section id="stay-updated" className="relative py-32 lg:py-40">
      {/* Top divider */}
      <div className="section-divider absolute left-0 right-0 top-0" />

      <div className="container relative mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-xl text-center"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-2xl font-medium tracking-tight sm:text-3xl lg:text-4xl"
            style={{ letterSpacing: '-0.02em' }}
          >
            {t('cta.title1')}{" "}
            <span className="text-gradient hover-trigger">{t('cta.title2')}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-4 max-w-md text-base leading-[1.7] text-muted-foreground"
          >
            {t('cta.desc')}
          </motion.p>

          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-10 flex flex-col items-center gap-3"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full" style={{ background: 'hsl(174 58% 56% / 0.1)' }}>
                <CheckCircle className="h-6 w-6 text-accent" />
              </div>
              <p className="text-base font-medium text-foreground">{t('hero.successTitle')}</p>
              <p className="text-sm text-muted-foreground">{t('hero.successDesc')}</p>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mx-auto mt-10 flex w-full max-w-lg flex-col gap-3 sm:flex-row"
            >
              <div className="relative flex-1 group">
                {/* Subtle glow behind input */}
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary/30 to-accent/30 opacity-0 blur transition duration-500 group-focus-within:opacity-100" />
                <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-primary/80 z-10" />
                <Input
                  type="email"
                  placeholder={t('hero.emailPlaceholder')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="relative h-14 w-full rounded-xl pl-12 pr-4 text-sm border-border/40 bg-secondary/40 backdrop-blur-md placeholder:text-muted-foreground focus:border-primary/50 focus:bg-secondary/60 transition-all duration-300 shadow-xl"
                  required
                />
              </div>
              <Button 
                type="submit" 
                variant="intelligence" 
                className="group relative h-14 rounded-xl px-8 text-[15px] hover:shadow-glow transition-all duration-500 overflow-hidden"
                disabled={isSubmitting}
              >
                {/* Button shine effect */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
                {isSubmitting ? t('hero.buttonProcessing') : t('hero.buttonIdle')}
                <ArrowRight className="ml-2 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Button>
            </motion.form>
          )}

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-4 text-xs text-muted-foreground/50"
          >
            {t('hero.noSpam')}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
