import finzaiLogo from "@/assets/finzai-logo-light.png";
import { useLanguage } from "@/contexts/LanguageContext";

const getFooterLinks = (t: any) => [
  { href: "#what-is-finzai", label: t('nav.platform') },
  { href: "#features", label: t('nav.features') },
  { href: "#philosophy", label: t('nav.philosophy') },
  { href: "#faq", label: t('nav.faq') },
];

const Footer = () => {
  const { t } = useLanguage();
  const footerLinks = getFooterLinks(t);

  return (
    <footer className="relative py-12">
      <div className="section-divider absolute left-0 right-0 top-0" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <a href="/" className="group">
            <img 
              src={finzaiLogo} 
              alt="Finzai" 
              className="h-6 opacity-50 transition-opacity duration-300 group-hover:opacity-70" 
            />
          </a>

          <nav className="flex flex-wrap items-center justify-center gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-muted-foreground/60 transition-colors duration-300 hover:text-muted-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <p className="text-xs text-muted-foreground/40">
            © {new Date().getFullYear()} Finzai
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
