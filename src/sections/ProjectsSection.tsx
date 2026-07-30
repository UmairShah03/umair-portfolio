import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Lock, Code2 } from "lucide-react";
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
}) => {
  const [imgError, setImgError] = useState(false);
  const isPrivate = project.githubUrl === "-";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass rounded-2xl overflow-hidden group hover:border-primary/40 transition-all duration-300 flex flex-col h-full hover:shadow-[0_12px_30px_-10px_rgba(174,72,56,0.15)]"
    >
      {/* Project Banner / Logo Showcase */}
      <div className="h-52 bg-gradient-to-br from-card via-secondary/40 to-background relative overflow-hidden flex items-center justify-center p-6 border-b border-border/50">
        <div className="absolute inset-0 bg-radial from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {!imgError ? (
          <img
            src={project.image}
            alt={project.title}
            onError={() => setImgError(true)}
            className="max-h-28 w-auto max-w-[80%] object-contain filter drop-shadow-lg transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <Code2 size={36} className="text-primary/60" />
            <span className="font-mono text-xs">{project.title}</span>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
        <div className="space-y-3">
          <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-200">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="space-y-4 pt-2">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <Badge
                key={t}
                variant="secondary"
                className="text-xs font-mono bg-secondary/80 text-foreground/90 border border-border/50 hover:border-primary/30 transition-colors"
              >
                {t}
              </Badge>
            ))}
          </div>

          <div className="flex items-center gap-3 pt-2">
            <Button
              asChild
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-4 glow-border"
            >
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                <ExternalLink size={14} className="mr-1.5" />
                Live Demo
              </a>
            </Button>

            {!isPrivate ? (
              <Button
                asChild
                size="sm"
                variant="outline"
                className="border-border hover:bg-secondary hover:text-foreground text-muted-foreground font-medium px-4"
              >
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  <Github size={14} className="mr-1.5" />
                  Code
                </a>
              </Button>
            ) : (
              <Button
                disabled
                size="sm"
                variant="outline"
                className="border-border/40 text-muted-foreground/60 cursor-not-allowed font-medium px-4 opacity-70"
              >
                <Lock size={13} className="mr-1.5" />
                Private Repo
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects">
      <SectionHeading
        title="Featured Projects"
        subtitle="A selection of full-stack applications and platforms I've architected & built."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;

