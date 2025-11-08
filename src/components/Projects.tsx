import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Global Worker Onboarding Platform",
    description:
      "Led architecture and development of a microservices platform for international worker onboarding with compliance automation and document processing. Serving 120+ countries with 99.9% reliability.",
    technologies: ["Spring Boot", "Kafka", "Redis", "PostgreSQL", "AWS"],
    highlights: [
      "5000+ monthly onboarding requests",
      "120+ countries supported",
      "Reduced onboarding time from 2 weeks to 3 days",
    ],
  },
  {
    title: "Digital Banking System",
    description:
      "Built core banking APIs and transaction processing for customer-facing banking applications. Implemented OAuth2 security and high-volume transaction processing capabilities.",
    technologies: ["Spring Boot", "Camunda", "Kafka", "Redis", "OAuth2"],
    highlights: [
      "Thousands of active customers",
      "High-volume transaction processing",
      "Automated KYC verification",
    ],
  },
  {
    title: "Healthcare Analytics Platform",
    description:
      "Developed data processing and reporting system for healthcare compliance and analytics. Built ETL pipelines and optimized data retrieval for complex reporting needs.",
    technologies: ["Spring Batch", "GraphQL", "Kafka Streams", "PostgreSQL"],
    highlights: [
      "Complex healthcare data processing",
      "Compliance reporting automation",
      "Optimized query performance",
    ],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Key Projects</h2>
          <p className="text-muted-foreground text-lg">
            Impactful solutions for real-world challenges
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 gradient-card border-border/50 hover:border-primary/50 transition-smooth hover:shadow-glow group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-smooth" />
              </div>
              
              <p className="text-muted-foreground mb-4">{project.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-foreground mb-2">Key Highlights:</h4>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="text-primary">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="bg-background/50 text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
