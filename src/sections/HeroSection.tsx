import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, Mail, Github, Linkedin, Twitter } from "lucide-react";
import { personalInfo, socialLinks, siteContent } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import InteractiveRevealText from "@/components/InteractiveRevealText";

const HeroSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20">
      {/* Interactive Cursor Spotlight Glow */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(174, 72, 56, 0.15), transparent 80%)`,
        }}
      />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-[30rem] h-[30rem] bg-primary/35 rounded-full blur-[130px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-[30rem] h-[30rem] bg-accent/30 rounded-full blur-[130px] animate-pulse [animation-delay:1.5s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/12 rounded-full blur-[110px]" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-primary/20 bg-primary/5 mb-6"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono font-medium text-foreground/90">
            {siteContent.hero.badge}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="w-full flex justify-center overflow-visible"
        >
          <InteractiveRevealText
            line1={siteContent.hero.line1}
            line2={siteContent.hero.line2}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-lg md:text-2xl font-medium text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md"
        >
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border font-medium px-8 w-full sm:w-auto"
          >
            <a href="#projects">
              <ExternalLink size={18} className="mr-2" />
              {siteContent.hero.viewProjects}
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-border hover:bg-secondary font-medium px-8 w-full sm:w-auto"
          >
            <a href="#contact">
              <Mail size={18} className="mr-2" />
              {siteContent.hero.getInTouch}
            </a>
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="flex items-center gap-4 mt-10"
        >
          {[
            { icon: Github, href: socialLinks.github, label: "GitHub" },
            { icon: Linkedin, href: socialLinks.linkedin, label: "LinkedIn" },
            { icon: Twitter, href: socialLinks.twitter, label: "Twitter" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-full glass border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:scale-110 transition-all duration-300"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex flex-col items-center text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;

