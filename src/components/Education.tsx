import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export const Education = () => {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">Education</h2>
          <p className="text-muted-foreground text-xl font-light">Academic foundation</p>
        </div>
        
        <Card className="glass-card p-10 border-border/50 hover-lift max-w-3xl mx-auto">
          <div className="flex items-start gap-6">
            <div className="p-5 rounded-xl gradient-primary shadow-glow">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    B.Tech in Computer Science & Engineering
                  </h3>
                  <p className="text-lg text-primary font-semibold mb-1">
                    RCC Institute of Information Technology
                  </p>
                </div>
                <span className="text-muted-foreground whitespace-nowrap font-medium">2017 – 2021</span>
              </div>
              <p className="text-muted-foreground font-light">Kolkata, India</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
