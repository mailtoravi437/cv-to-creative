import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    category: "Programming",
    skills: ["Java 8/11/17", "Python", "SQL", "TypeScript"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL", "Redis", "MongoDB", "DynamoDB"],
  },
  {
    category: "Frameworks",
    skills: ["Spring Boot 3", "Spring Cloud", "Hibernate", "JPA"],
  },
  {
    category: "Messaging",
    skills: ["Apache Kafka", "RabbitMQ", "AWS SQS/SNS"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS (EC2, ECS, S3, RDS)", "Docker", "Kubernetes"],
  },
  {
    category: "Architecture",
    skills: ["Microservices", "Event-Driven", "REST APIs", "Caching"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-muted-foreground text-lg">
            Modern technologies for building scalable systems
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 gradient-card border-border/50 hover:border-primary/50 transition-smooth hover:shadow-glow"
            >
              <h3 className="text-xl font-bold mb-4 text-primary">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="bg-background/50 hover:bg-background/80 transition-smooth"
                  >
                    {skill}
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
