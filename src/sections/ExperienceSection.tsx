import { motion } from "framer-motion";
import { Briefcase, Building2, Calendar } from "lucide-react";
import SectionWrapper, { SectionHeading } from "@/components/SectionWrapper";
import { experiences } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
  return (
    <SectionWrapper id="experience">
      <SectionHeading
        title="Work Experience"
        subtitle="My professional background and engineering career journey."
      />

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-8 top-3 bottom-3 w-0.5 bg-gradient-to-b from-primary via-accent/60 to-primary/20" />

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="relative pl-12 md:pl-20 group"
            >
              {/* Timeline dot */}
              <div className="absolute left-[10px] md:left-[26px] top-1.5 w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center group-hover:scale-125 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-[0_0_12px_rgba(174,72,56,0.4)]">
                <Briefcase size={12} className="text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              <div className="glass rounded-2xl p-6 md:p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(174,72,56,0.15)]">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                  <h3 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                    {exp.role}
                  </h3>
                  <Badge
                    variant="outline"
                    className="w-fit text-xs font-mono border-primary/30 bg-primary/10 text-primary flex items-center gap-1.5 py-1 px-3"
                  >
                    <Calendar size={12} />
                    {exp.period}
                  </Badge>
                </div>

                <div className="flex items-center gap-2 text-sm font-semibold text-accent mb-4">
                  <Building2 size={16} className="text-accent/80" />
                  <span>{exp.company}</span>
                </div>

                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
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

