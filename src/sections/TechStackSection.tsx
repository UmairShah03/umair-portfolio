import { motion } from "framer-motion";
import SectionWrapper, { SectionHeading } from "@/components/SectionWrapper";
import { techStack } from "@/data/portfolio";
import type { IconType } from "react-icons";

interface TechItemProps {
  name: string;
  icon: IconType;
  color: string;
  index: number;
}

const TechItem = ({ name, icon: Icon, color, index }: TechItemProps) => {
  const brandColor = color.startsWith("#") ? color : `#${color}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      viewport={{ once: true }}
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

const TechStackSection = () => {
  return (
    <SectionWrapper id="tech">
      <SectionHeading
        title="Tech Stack & Skills"
        subtitle="Technologies and tools I work with daily to craft scalable web solutions."
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {techStack.map((tech, i) => (
          <TechItem key={tech.name} {...tech} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default TechStackSection;

