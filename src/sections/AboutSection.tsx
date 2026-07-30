import { motion } from "framer-motion";
import { Download, MapPin, Sparkles, Code, Server, Globe } from "lucide-react";
import SectionWrapper, { SectionHeading } from "@/components/SectionWrapper";
import { personalInfo } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const highlights = [
    { icon: Code, text: "Frontend Architecture (React, TS, Tailwind)" },
    { icon: Server, text: "Backend APIs & Microservices (Node, Nest, Express)" },
    { icon: Globe, text: "Scalable Full Stack Solutions" },
  ];

  return (
    <SectionWrapper id="about">
      <SectionHeading
        title="About Me"
        subtitle="Passionate developer turning complex problems into elegant web software."
      />

      <div className="grid md:grid-cols-5 gap-10 items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:col-span-3 space-y-6 flex flex-col justify-between"
        >
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              {personalInfo.bio}
            </p>

            {/* Highlights List */}
            <div className="grid sm:grid-cols-1 gap-3 pt-2">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-xl glass border border-border/40 text-sm text-foreground/90"
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <h.icon size={18} />
                  </div>
                  <span>{h.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <div className="flex items-center gap-2 text-muted-foreground px-3 py-2 rounded-lg glass border border-border/40 text-sm">
              <MapPin size={16} className="text-primary" />
              <span>{personalInfo.location}</span>
            </div>

            <Button
              asChild
              variant="outline"
              className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 text-foreground font-medium"
            >
              <a href={personalInfo.resumeUrl} target="_blank" rel="noreferrer">
                <Download size={16} className="mr-2 text-primary" />
                Download CV
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="md:col-span-2"
        >
          <div className="glass rounded-2xl p-6 space-y-6 glow-border h-full flex flex-col justify-between">
            <div className="flex items-center gap-2 border-b border-border/50 pb-4">
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              <h3 className="font-bold text-lg text-foreground">Quick Stats</h3>
            </div>

            <div className="space-y-4">
              {[
                { label: "Years Experience", value: "1+" },
                { label: "Projects Completed", value: "5+" },
                { label: "Happy Clients", value: "3+" },
                { label: "Open Source Contributions", value: "10+" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex justify-between items-center p-3 rounded-xl bg-secondary/40 border border-border/40"
                >
                  <span className="text-muted-foreground text-sm font-medium">
                    {stat.label}
                  </span>
                  <span className="font-mono text-lg font-bold text-primary">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;

