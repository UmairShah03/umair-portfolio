import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, Mail, Github, Linkedin, Twitter } from "lucide-react";
import { personalInfo, socialLinks } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse [animation-delay:1.5s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
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
            Available for new opportunities
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <p className="text-primary font-mono text-sm md:text-base mb-3 tracking-wider font-semibold">
            Hello, I am
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 tracking-tight"
        >
          {personalInfo.name}
          <span className="gradient-text">.</span>
        </motion.h1>

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
              View Projects
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
              Get In Touch
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

