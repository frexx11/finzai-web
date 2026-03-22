import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, Globe } from "lucide-react";
import finzaiLogo from "@/assets/finzai-logo-light.png";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const getNavLinks = (t: any) => [
  { href: "#what-is-finzai", label: t('nav.platform') },
  { href: "#features", label: t('nav.features') },
  { href: "#philosophy", label: t('nav.philosophy') },
  { href: "#faq", label: t('nav.faq') },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();
  const navLinks = getNavLinks(t);

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-6 inset-x-0 mx-auto z-50 w-[95%] max-w-[1400px] rounded-full border border-white/5 bg-background/40 backdrop-blur-xl shadow-2xl"
    >
      <div className="flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <a href="/" className="group flex items-center">
          <img 
            src={finzaiLogo} 
            alt="Finzai" 
            className="h-7 transition-opacity duration-300 group-hover:opacity-70" 
          />
        </a>

        {/* Navigation Links - Centered (Desktop) */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA & Lang Toggle */}
        <div className="hidden md:flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={toggleLanguage} 
            className="px-2 text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
            title={t('common.switchLanguage')}
          >
            <Globe className="w-4 h-4 mr-1.5 opacity-70" />
            <span className="text-[12px] font-semibold tracking-wider">{language === 'es' ? 'EN' : 'ES'}</span>
          </Button>
          <div className="w-px h-4 bg-border/40 mx-1" />
          <Button variant="subtle" size="sm" asChild>
            <a href="#stay-updated" className="text-[13px]">{t('nav.earlyAccess')}</a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 border-l border-border/30 bg-background pt-16">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-muted-foreground transition-colors duration-300 hover:bg-secondary/50 hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-6 px-4 flex flex-col gap-3">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => { toggleLanguage(); setOpen(false); }} 
                  className="w-full border border-white/5 text-muted-foreground justify-center"
                >
                  <Globe className="w-4 h-4 mr-2 opacity-70" />
                  {t('common.switchLanguage')}
                </Button>
                <Button variant="intelligence" size="lg" asChild className="w-full">
                  <a href="#stay-updated" onClick={() => setOpen(false)}>
                    {t('nav.earlyAccess')}
                  </a>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  );
};

export default Navbar;
