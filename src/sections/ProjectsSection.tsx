import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import SectionWrapper, { SectionHeading } from "@/components/SectionWrapper";
import { projects } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="glass rounded-xl overflow-hidden group hover-glow"
  >
    {/* Image placeholder */}
    <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-mono text-primary/40 text-sm">
          <img src={project.image} alt={project.title} />
        </span>
      </div>
    </div>

    <div className="p-6 space-y-4">
      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <Badge
            key={t}
            variant="secondary"
            className="text-xs font-mono bg-secondary/80"
          >
            {t}
          </Badge>
        ))}
      </div>

      <div className="flex gap-3 pt-2">
        <Button
          asChild
          size="sm"
          variant="outline"
          className="border-border hover:border-primary/50"
        >
          <a href={project.liveUrl} target="_blank" rel="noreferrer">
            <ExternalLink size={14} className="mr-1.5" />
            Live Demo
          </a>
        </Button>
        <Button
          asChild
          size="sm"
          variant="ghost"
          className="text-muted-foreground hover:text-foreground"
        >
          <a href={project.githubUrl} target="_blank" rel="noreferrer">
            <Github size={14} className="mr-1.5" />
            Code
          </a>
        </Button>
      </div>
    </div>
  </motion.div>
);

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects">
      <SectionHeading
        title="Projects"
        subtitle="A selection of things I've built."
      />
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
