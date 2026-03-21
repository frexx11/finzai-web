import { useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import finzaiLogo from "@/assets/finzai-logo-light.png";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "#what-is-finzai", label: "What is Finzai" },
  { href: "#features", label: "Features" },
  { href: "#philosophy", label: "Philosophy" },
  { href: "#faq", label: "FAQ" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-6 inset-x-0 mx-auto z-50 w-[95%] max-w-5xl rounded-full border border-white/5 bg-background/40 backdrop-blur-xl shadow-2xl"
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

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button variant="subtle" size="sm" asChild>
            <a href="#stay-updated" className="text-[13px]">Get Early Access</a>
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
              <div className="mt-6 px-4">
                <Button variant="intelligence" size="lg" asChild className="w-full">
                  <a href="#stay-updated" onClick={() => setOpen(false)}>
                    Get Early Access
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
