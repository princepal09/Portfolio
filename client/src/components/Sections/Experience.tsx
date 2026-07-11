import { experiences } from "@/constants";
import { motion } from "framer-motion";
import { BriefcaseBusiness, ExternalLink } from "lucide-react";
import { Card } from "../ui/card";

const Experience = () => {
  return (
    <section id="experience" className="container mx-auto px-10 py-10">
      <h2 className="text-3xl font-bold text-center mb-12">
        Professional <span className="text-primary">Experience</span>
      </h2>

      <div className="mx-auto">
        {experiences.map((exp, idx) => (
          <motion.div
            key={`${exp.company}-${idx}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
          >
            <Card className="p-8 bg-card border-border/50 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
              {/* Icon */}
              <div className="mb-6">
                <BriefcaseBusiness className="w-8 h-8 text-primary opacity-80" />
              </div>

              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-primary">
                    {exp.role}
                  </h3>

                  <p className="text-muted-foreground mt-1">
                    {exp.company} • {exp.location}
                  </p>
                </div>

                <span className="w-fit rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                  {exp.duration}
                </span>
              </div>

              {/* Description */}
              <p className="mt-6 text-muted-foreground leading-7">
                {exp.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-6">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Footer */}
              {exp.certificate && (
                <div className="flex items-center justify-between border-t border-border/50 mt-8 pt-5">
                  <span className="text-sm text-muted-foreground">
                    Internship Certificate
                  </span>

                  <a
                    href={exp.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary transition-all hover:gap-3"
                  >
                    View
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;