import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    company: "Papaya Global",
    role: "Software Development Engineer II",
    period: "Oct 2024 – Present",
    location: "Bengaluru, India",
    achievements: [
      "Architected and developed the global worker onboarding platform serving 120+ countries, handling complex international compliance and document verification workflows.",
      "Designed event-driven microservices architecture using Spring Boot and Kafka, processing 5000+ worker onboarding requests monthly with 99.9% reliability.",
      "Implemented multi-country compliance engine validating employment laws, tax regulations, and document requirements across different jurisdictions.",
      "Built real-time document processing pipeline integrating with OCR services and government APIs for automated identity verification and background checks.",
      "Developed configurable workflow engine supporting country-specific onboarding processes with dynamic form generation and approval workflows.",
      "Optimized system performance through Redis caching and database partitioning, reducing onboarding completion time from 2 weeks to 3 days.",
    ],
    current: true,
  },
  {
    company: "UNO Digital Bank",
    role: "Software Development Engineer II",
    period: "Apr 2023 – Sep 2024",
    location: "Bengaluru, India",
    achievements: [
      "Developed core banking APIs serving thousands of customers with OAuth2 security, handling high-volume transaction processing.",
      "Engineered transaction processing system using Camunda BPMN and Kafka, significantly reducing loan application processing time.",
      "Implemented comprehensive caching strategy with Redis, improving API performance and reducing database load.",
      "Built KYC verification system with external API integrations, automating document validation processes.",
      "Applied resilience patterns and circuit breakers for robust third-party service integrations.",
    ],
    current: false,
  },
  {
    company: "Cozeva",
    role: "Software Development Engineer I",
    period: "Sep 2021 – Apr 2023",
    location: "Kolkata, India",
    achievements: [
      "Designed and built ETL pipelines for healthcare data processing using Spring Batch and Kafka Streams.",
      "Developed analytics APIs with GraphQL, optimizing data retrieval for complex healthcare reporting.",
      "Optimized PostgreSQL performance through strategic indexing and query optimization techniques.",
      "Implemented data validation framework with extensive business rules, ensuring data quality for compliance reporting.",
      "Established monitoring and alerting systems for proactive incident management.",
    ],
    current: false,
  },
];

export const Experience = () => {
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
    <section ref={sectionRef} id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">Professional Experience</h2>
          <p className="text-muted-foreground text-xl font-light">Building scalable systems at leading tech companies</p>
        </div>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              ref={addToRefs}
              className="glass-card p-8 hover-lift border-border/50"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-foreground">{exp.company}</h3>
                    {exp.current && (
                      <Badge className="gradient-primary text-white border-0 shadow-glow">
                        Current
                      </Badge>
                    )}
                  </div>
                  <p className="text-lg text-primary font-semibold mb-1">{exp.role}</p>
                  <p className="text-muted-foreground text-sm">{exp.location}</p>
                </div>
                <Badge variant="outline" className="glass-card whitespace-nowrap h-fit border-border/50">
                  {exp.period}
                </Badge>
              </div>
              
              <ul className="space-y-3">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
                    <span className="text-primary mt-1.5 font-bold">▹</span>
                    <span className="font-light">{achievement}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
