import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionWrapper, { SectionHeading } from "@/components/SectionWrapper";
import { experiences } from "@/data/portfolio";

const ExperienceSection = () => {
  return (
    <SectionWrapper id="experience">
      <SectionHeading title="Experience" subtitle="My professional journey so far." />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/30 to-transparent" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="relative pl-12 md:pl-20"
            >
              {/* Timeline dot */}
              <div className="absolute left-2 md:left-6 top-1 w-5 h-5 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                <Briefcase size={10} className="text-primary" />
              </div>

              <div className="glass rounded-xl p-6 hover-glow">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1">
                  <h3 className="font-semibold text-lg">{exp.role}</h3>
                  <span className="text-xs font-mono text-primary">{exp.period}</span>
                </div>
                <p className="text-sm font-medium text-accent mb-3">{exp.company}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ExperienceSection;
