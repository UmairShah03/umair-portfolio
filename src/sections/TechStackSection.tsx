import { motion } from "framer-motion";
import SectionWrapper, { SectionHeading } from "@/components/SectionWrapper";
import { techStack } from "@/data/portfolio";
import type { IconType } from "react-icons";

const TechItem = ({
  name,
  icon: Icon,
  index,
}: {
  name: string;
  icon: IconType;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    viewport={{ once: true }}
    whileHover={{ y: -5, scale: 1.05 }}
    className="glass rounded-xl p-4 flex flex-col items-center gap-3 cursor-default hover-glow group"
  >
    <Icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
    <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
      {name}
    </span>
  </motion.div>
);

const TechStackSection = () => {
  return (
    <SectionWrapper id="tech">
      <SectionHeading
        title="Tech Stack"
        subtitle="Technologies I work with daily."
      />
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-5 gap-4">
        {techStack.map((tech, i) => (
          <TechItem key={tech.name} {...tech} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default TechStackSection;
