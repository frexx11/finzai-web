import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import finzaiLogo from "@/assets/finzai-logo-light.png";
import { useLanguage } from "@/contexts/LanguageContext";

const N8N_WEBHOOK_URL = "https://andrea-nuclio.app.n8n.cloud/webhook/finzai-registro";

const Hero = () => {
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
            title: "Ya estás en la lista",
            description: "¡Ya te apuntaste! No hace falta que lo hagas de nuevo.",
          });
        } else {
          setIsSuccess(true);
          toast({
            title: "¡Estás dentro!",
            description: "Revisa tu correo para confirmar el acceso.",
          });
        }
        setEmail("");
      } else {
        toast({
          title: "Algo ha fallado",
          description: "Por favor, inténtalo de nuevo más tarde.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Algo ha fallado",
        description: "Por favor, inténtalo de nuevo más tarde.",
        variant: "destructive",
      });
    }
    
    setIsSubmitting(false);
  };

  return (
    <section className="relative min-h-screen overflow-hidden pt-20 flex flex-col items-center justify-center">

      {/* Ambient glow — more pronounced premium feel */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
        className="pointer-events-none absolute left-1/2 top-1/3 z-[1] h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]" 
        style={{ background: 'var(--gradient-glow)' }}
      />      <div className="container relative z-[2] mx-auto flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="max-w-3xl text-center"
        >
          {/* Logo with subtle float */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
            transition={{ 
              opacity: { duration: 0.8, delay: 0.2 },
              scale: { duration: 0.8, delay: 0.2 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="mb-12"
          >
            <img 
              src={finzaiLogo} 
              alt="Finzai" 
              className="mx-auto h-12 sm:h-14 md:h-16 drop-shadow-2xl" 
            />
          </motion.div>

          {/* Main headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-display text-[2.5rem] font-medium leading-[1.1] sm:text-5xl md:text-6xl lg:text-[4.5rem]"
            style={{ letterSpacing: '-0.03em' }}
          >
            <span className="text-foreground">{t('hero.title1')}<br /></span>
            <motion.span 
              className="text-gradient font-bold drop-shadow-sm inline-block relative py-2"
              animate={{ 
                textShadow: [
                  "0px 0px 0px rgba(0, 255, 255, 0)",
                  "0px 0px 20px rgba(0, 255, 255, 0.5)",
                  "0px 0px 0px rgba(0, 255, 255, 0)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              {t('hero.title2')}
              {/* Subtle underline glow */}
              <span className="absolute left-0 bottom-[5px] w-full h-[3px] bg-gradient-to-r from-transparent via-accent/50 to-transparent blur-sm"></span>
            </motion.span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mx-auto mt-6 max-w-xl text-base leading-[1.7] text-muted-foreground sm:text-lg"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* Email Form — Focal Point */}
          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-12 flex flex-col items-center gap-3"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full" style={{ background: 'hsl(174 58% 56% / 0.1)' }}>
                <CheckCircle className="h-7 w-7 text-accent" />
              </div>
              <p className="text-lg font-medium text-foreground">{t('hero.successTitle')}</p>
              <p className="text-sm text-muted-foreground">{t('hero.successDesc')}</p>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="mx-auto mt-12 flex w-full max-w-lg flex-col gap-3 sm:flex-row relative z-10"
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
                <span className="relative flex items-center">
                  {isSubmitting ? t('hero.buttonProcessing') : t('hero.buttonIdle')}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Button>
            </motion.form>
          )}

          {/* Trust line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mt-5 text-[13px] text-muted-foreground/60 font-medium tracking-wide flex items-center justify-center gap-2"
          >
            {t('hero.trustLine')}
          </motion.p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-3"
        >
          <motion.div 
            animate={{ scaleY: [1, 1.3, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="h-6 w-px" 
            style={{ background: 'linear-gradient(to bottom, transparent, hsl(210 14% 91% / 0.15), transparent)' }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
