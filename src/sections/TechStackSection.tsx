import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper, { SectionHeading } from "@/components/SectionWrapper";
import { techStack } from "@/data/portfolio";
import type { IconType } from "react-icons";

interface TechItemProps {
  name: string;
  icon: IconType;
  color: string;
}

const TechItem = ({ name, icon: Icon, color }: TechItemProps) => {
  const brandColor = color.startsWith("#") ? color : `#${color}`;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -6, scale: 1.05 }}
      className="glass rounded-xl p-4 flex flex-col items-center justify-center gap-3 cursor-pointer group transition-all duration-300 relative overflow-hidden"
      style={{
        borderColor: "rgba(255, 255, 255, 0.08)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${brandColor}80`;
        e.currentTarget.style.boxShadow = `0 10px 25px -8px ${brandColor}45`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Background radial highlight matching brand color */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-300 pointer-events-none rounded-xl"
        style={{
          background: `radial-gradient(circle at center, ${brandColor}, transparent 70%)`,
        }}
      />

      <div className="relative p-2 transition-transform duration-300 group-hover:scale-110">
        <Icon
          className="w-9 h-9 transition-all duration-300 filter group-hover:drop-shadow-[0_0_10px_currentColor]"
          style={{ color: brandColor }}
        />
      </div>
      <span className="text-xs font-semibold text-foreground/80 group-hover:text-foreground transition-colors text-center tracking-wide">
        {name}
      </span>
    </motion.div>
  );
};

const categories = ["All", "Frontend", "Backend", "Database", "Tools & DevOps"];

const TechStackSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTech =
    activeCategory === "All"
      ? techStack
      : techStack.filter((t) => t.category === activeCategory);

  return (
    <SectionWrapper id="tech">
      <SectionHeading
        title="Tech Stack & Skills"
        subtitle="Technologies and tools I work with daily to craft scalable web solutions."
      />

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((category) => {
          const isActive = activeCategory === category;
          const count =
            category === "All"
              ? techStack.length
              : techStack.filter((t) => t.category === category).length;

          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 flex items-center gap-2 ${
                isActive
                  ? "text-primary-foreground shadow-md"
                  : "glass text-muted-foreground hover:text-foreground border border-border/40"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeCategoryBg"
                  className="absolute inset-0 bg-primary rounded-xl glow-border"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{category}</span>
              <span
                className={`relative z-10 px-1.5 py-0.5 rounded-md text-[10px] font-mono ${
                  isActive ? "bg-background/20 text-primary-foreground" : "bg-secondary text-muted-foreground"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
      >
        <AnimatePresence>
          {filteredTech.map((tech) => (
            <TechItem key={tech.name} {...tech} />
          ))}
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  );
};

export default TechStackSection;


