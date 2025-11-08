import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground text-lg">
            Let's discuss how I can contribute to your team
          </p>
        </div>
        
        <Card className="p-8 gradient-card border-border/50">
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="mailto:mailtoravi437@gmail.com"
              className="flex items-center gap-4 p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-smooth group"
            >
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-semibold group-hover:text-primary transition-smooth">
                  mailtoravi437@gmail.com
                </p>
              </div>
            </a>
            
            <a
              href="tel:+918240627029"
              className="flex items-center gap-4 p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-smooth group"
            >
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-semibold group-hover:text-primary transition-smooth">
                  +91-8240627029
                </p>
              </div>
            </a>
            
            <div className="flex items-center gap-4 p-4 rounded-lg bg-background/50">
              <div className="p-3 rounded-lg bg-primary/10">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-semibold">Bengaluru, India</p>
              </div>
            </div>
            
            <a
              href="https://github.com/mailtoravi437"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-smooth group"
            >
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                <Github className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">GitHub</p>
                <p className="font-semibold group-hover:text-primary transition-smooth">
                  mailtoravi437
                </p>
              </div>
            </a>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border/50">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="shadow-glow">
                <a href="mailto:mailtoravi437@gmail.com">Send Email</a>
              </Button>
              <Button asChild variant="outline" size="lg">
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
