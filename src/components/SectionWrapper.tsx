import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id: string;
  className?: string;
}

const SectionWrapper = ({ children, id, className = "" }: SectionWrapperProps) => (
  <section id={id} className={`section-padding ${className}`}>
    <div className="container mx-auto max-w-6xl">
      {children}
    </div>
  </section>
);

export default SectionWrapper;

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="mb-12 md:mb-16"
  >
    <h2 className="text-3xl md:text-4xl font-bold mb-3">
      <span className="gradient-text">{title}</span>
    </h2>
    {subtitle && (
      <p className="text-muted-foreground text-lg max-w-2xl">{subtitle}</p>
    )}
  </motion.div>
);
