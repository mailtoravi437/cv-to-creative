import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  }
];

export const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            opacity: 0,
            y: 50,
            duration: 0.8,
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=100",
              toggleActions: "play none none reverse",
            },
            delay: index * 0.2,
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section ref={sectionRef} id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">Key Projects</h2>
          <p className="text-muted-foreground text-xl font-light">
            Impactful solutions for real-world challenges
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              ref={addToRefs}
              className="glass-card p-8 hover-lift group border-border/50"
            >
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                <ExternalLink className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-smooth" />
              </div>
              
              <p className="text-muted-foreground mb-6 font-light leading-relaxed">{project.description}</p>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-primary mb-3">Key Highlights:</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted-foreground font-light">
                      <span className="text-primary font-bold">▹</span>
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
                    className="glass-card border-border/50 hover:border-secondary/50 hover:shadow-premium hover:scale-105 transition-spring cursor-default text-xs font-medium"
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
