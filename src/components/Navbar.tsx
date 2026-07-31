import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import { LogoImage, personalInfo, navItems, siteContent } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoErr, setLogoErr] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3 border-b border-border/50 shadow-lg" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto max-w-6xl flex items-center justify-between px-4 md:px-8">
        <a href="#" className="flex items-center gap-2 group">
          {!logoErr ? (
            <img
              src={LogoImage.logo}
              alt={personalInfo.name}
              onError={() => setLogoErr(true)}
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex items-center gap-2 font-bold text-xl text-foreground">
              <Code2 className="text-primary" size={24} />
              <span className="gradient-text tracking-tight">{personalInfo.name}</span>
            </div>
          )}
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
          <Button
            asChild
            size="sm"
            className="bg-primary/90 text-primary-foreground hover:bg-primary glow-border font-medium px-5"
          >
            <a href={`mailto:${personalInfo.email}`}>{siteContent.hero.hireMe}</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-foreground hover:bg-secondary transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-b border-border/50 overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <Button
                asChild
                size="sm"
                className="bg-primary text-primary-foreground w-full mt-2"
                onClick={() => setMobileOpen(false)}
              >
                <a href={`mailto:${personalInfo.email}`}>{siteContent.hero.hireMe}</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

