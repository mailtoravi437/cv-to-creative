import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export const Education = () => {
  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
          <p className="text-muted-foreground text-lg">Academic foundation</p>
        </div>
        
        <Card className="p-8 gradient-card border-border/50 hover:border-primary/50 transition-smooth hover:shadow-glow max-w-3xl mx-auto">
          <div className="flex items-start gap-6">
            <div className="p-4 rounded-lg bg-primary/10">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    B.Tech in Computer Science & Engineering
                  </h3>
                  <p className="text-lg text-primary font-semibold">
                    RCC Institute of Information Technology
                  </p>
                </div>
                <span className="text-muted-foreground whitespace-nowrap">2017 – 2021</span>
              </div>
              <p className="text-muted-foreground">Kolkata, India</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
