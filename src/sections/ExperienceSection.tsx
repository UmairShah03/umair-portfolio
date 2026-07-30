import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, GraduationCap, Building2, Calendar, MapPin, Award } from "lucide-react";
import SectionWrapper, { SectionHeading } from "@/components/SectionWrapper";
import { experiences, education } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");

  return (
    <SectionWrapper id="experience">
      {/* Anchor for education navigation */}
      <div id="education" className="scroll-mt-24" />

      <SectionHeading
        title="Experience & Education"
        subtitle="My professional journey, engineering roles, and academic qualifications."
      />

      {/* Tab Controls */}
      <div className="flex justify-center mb-12">
        <div className="glass p-1.5 rounded-2xl border border-border/50 flex items-center gap-2 bg-secondary/30">
          <button
            onClick={() => setActiveTab("experience")}
            className={`relative px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2.5 ${
              activeTab === "experience"
                ? "text-primary-foreground shadow-lg"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {activeTab === "experience" && (
              <motion.div
                layoutId="activeTabBg"
                className="absolute inset-0 bg-primary rounded-xl glow-border"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              <Briefcase size={16} />
              Work Experience
              <span className="px-2 py-0.5 rounded-full text-xs font-mono bg-background/20">
                {experiences.length}
              </span>
            </span>
          </button>

          <button
            onClick={() => setActiveTab("education")}
            className={`relative px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2.5 ${
              activeTab === "education"
                ? "text-primary-foreground shadow-lg"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {activeTab === "education" && (
              <motion.div
                layoutId="activeTabBg"
                className="absolute inset-0 bg-primary rounded-xl glow-border"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              <GraduationCap size={18} />
              Education
              <span className="px-2 py-0.5 rounded-full text-xs font-mono bg-background/20">
                {education.length}
              </span>
            </span>
          </button>
        </div>
      </div>

      {/* Timeline Content */}
      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-8 top-3 bottom-3 w-0.5 bg-gradient-to-b from-primary via-accent/60 to-primary/20" />

        <AnimatePresence mode="wait">
          {activeTab === "experience" ? (
            <motion.div
              key="experience-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-12 md:pl-20 group"
                >
                  {/* Timeline Node Dot */}
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
            </motion.div>
          ) : (
            <motion.div
              key="education-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-12 md:pl-20 group"
                >
                  {/* Timeline Node Dot */}
                  <div className="absolute left-[10px] md:left-[26px] top-1.5 w-6 h-6 rounded-full bg-background border-2 border-accent flex items-center justify-center group-hover:scale-125 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 shadow-[0_0_12px_rgba(168,85,247,0.4)]">
                    <GraduationCap size={13} className="text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>

                  <div className="glass rounded-2xl p-6 md:p-8 hover:border-accent/40 transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(168,85,247,0.15)]">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                      <h3 className="font-bold text-xl text-foreground group-hover:text-accent transition-colors flex items-center gap-2">
                        <Award size={18} className="text-accent shrink-0" />
                        {edu.degree}
                      </h3>
                      <Badge
                        variant="outline"
                        className="w-fit text-xs font-mono border-accent/30 bg-accent/10 text-accent flex items-center gap-1.5 py-1 px-3"
                      >
                        <Calendar size={12} />
                        {edu.period}
                      </Badge>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-foreground/80 mb-4">
                      <div className="flex items-center gap-1.5 text-primary">
                        <Building2 size={16} />
                        <span>{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground text-xs">
                        <MapPin size={14} className="text-muted-foreground" />
                        <span>{edu.location}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
};

export default ExperienceSection;


