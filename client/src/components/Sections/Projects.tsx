import { projects, type IProject } from "@/constants";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
import {Check, ExternalLink } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
const Projects = () => {
  return (
    <section id="projects" className="container mx-auto px-10 py-10">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my latest projects showcasing my expertise in fullStack
            Development, from e-commerce platforms to AI-powered applications.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {projects?.map((project: IProject, index: number) => (
    <motion.div
      key={project?.title}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group overflow-hidden border-border/5 bg-card transition-all duration-300 hover:shadow-xl h-full flex flex-col">
        {/* Project Image */}
        <div className="relative overflow-hidden aspect-video">
          <img
            src={project?.image}
            alt={project?.title}
            width={800}
            height={600}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />

          {/* Desktop Hover Buttons */}
          <div className="absolute inset-0 hidden lg:flex items-center justify-center gap-4 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button asChild variant="secondary" size="sm">
              <a
                href={project?.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            </Button>

            <Button asChild variant="secondary" size="sm">
              <a
                href={project?.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                Source Code
              </a>
            </Button>
          </div>
        </div>

        {/* Mobile & Tablet Buttons */}
        <div className="lg:hidden p-4 flex flex-row gap-3">
          <Button asChild className="flex-1">
            <a
              href={project?.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          </Button>

          <Button asChild variant="outline" className="flex-1">
            <a
              href={project?.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              Source Code
            </a>
          </Button>
        </div>

        {/* Card Content */}
        <div className="p-6 pt-0 flex flex-col flex-1">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {project?.title}
          </h3>

          <p className="text-muted-foreground mb-4">
            {project?.description}
          </p>

          <div className="space-y-4 flex-1">
            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {project?.technologies?.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-secondary/50"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            {/* Features */}
            <ul className="space-y-2">
              {project?.features?.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <Check className="w-4 h-4 text-green-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    </motion.div>
  ))}
</div>
    </section>
  );
};

export default Projects;
