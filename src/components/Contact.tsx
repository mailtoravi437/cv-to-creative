import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5" />
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">Get In Touch</h2>
          <p className="text-muted-foreground text-xl font-light">
            Let's discuss how I can contribute to your team
          </p>
        </div>
        
        <Card className="glass-card p-10 border-border/50">
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="mailto:mailtoravi437@gmail.com"
              className="flex items-center gap-4 p-5 rounded-xl glass-card hover:shadow-premium transition-smooth group hover-lift"
            >
              <div className="p-3 rounded-xl gradient-primary shadow-glow">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium">Email</p>
                <p className="font-semibold group-hover:text-primary transition-smooth">
                  mailtoravi437@gmail.com
                </p>
              </div>
            </a>
            
            <a
              href="tel:+918240627029"
              className="flex items-center gap-4 p-5 rounded-xl glass-card hover:shadow-premium transition-smooth group hover-lift"
            >
              <div className="p-3 rounded-xl gradient-primary shadow-glow">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium">Phone</p>
                <p className="font-semibold group-hover:text-primary transition-smooth">
                  +91-8240627029
                </p>
              </div>
            </a>
            
            <div className="flex items-center gap-4 p-5 rounded-xl glass-card">
              <div className="p-3 rounded-xl gradient-secondary shadow-glow">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium">Location</p>
                <p className="font-semibold">Bengaluru, India</p>
              </div>
            </div>
            
            <a
              href="https://github.com/mailtoravi437"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-xl glass-card hover:shadow-premium transition-smooth group hover-lift"
            >
              <div className="p-3 rounded-xl gradient-secondary shadow-glow">
                <Github className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium">GitHub</p>
                <p className="font-semibold group-hover:text-primary transition-smooth">
                  mailtoravi437
                </p>
              </div>
            </a>
          </div>
          
          <div className="mt-10 pt-10 border-t border-border/50">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gradient-primary shadow-glow hover:shadow-premium hover:scale-105 transition-spring text-base px-8">
                <a href="mailto:mailtoravi437@gmail.com">Send Email</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="glass-card hover:bg-primary/10 hover:scale-105 transition-spring text-base px-8">
                <a
                  href="https://linkedin.com/in/mailtoravi437"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
