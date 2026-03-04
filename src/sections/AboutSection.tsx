import { motion } from "framer-motion";
import { Download, MapPin } from "lucide-react";
import SectionWrapper, { SectionHeading } from "@/components/SectionWrapper";
import { personalInfo } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <SectionWrapper id="about">
      <SectionHeading
        title="About Me"
        subtitle="Get to know me a little better."
      />

      <div className="grid md:grid-cols-5 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:col-span-3 space-y-6"
        >
          <p className="text-muted-foreground leading-relaxed text-lg">
            {personalInfo.bio}
          </p>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin size={16} className="text-primary" />
            <span>{personalInfo.location}</span>
          </div>
          <Button
            asChild
            variant="outline"
            className="border-primary/30 hover:bg-primary/10 hover:border-primary/50"
          >
            <a href={personalInfo.resumeUrl}>
              <Download size={16} className="mr-2" />
              Download CV
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="md:col-span-2"
        >
          <div className="glass rounded-xl p-6 space-y-4 glow-border">
            <h3 className="font-semibold text-lg">Quick Stats</h3>
            {[
              { label: "Years Experience", value: "1+" },
              { label: "Projects Completed", value: "5+" },
              { label: "Happy Clients", value: "3+" },
              { label: "Open Source Contributions", value: "10+" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex justify-between items-center border-b border-border/50 pb-3 last:border-0 last:pb-0"
              >
                <span className="text-muted-foreground text-sm">
                  {stat.label}
                </span>
                <span className="font-mono font-semibold text-primary">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
