import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,229,255,0.1),transparent_50%)]" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
        <div className="inline-block animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <span className="text-primary text-sm font-mono tracking-wider uppercase">
            Backend Engineer
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
          <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Ravi Kumar
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          4+ years crafting scalable backend systems for fintech and enterprise platforms. 
          Specialized in microservices architecture and distributed systems.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
          <Button asChild size="lg" className="shadow-glow">
            <a href="#contact">Get In Touch</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#experience">View Experience</a>
          </Button>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 pt-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
          <a
            href="https://github.com/mailtoravi437"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth"
          >
            <Github className="w-5 h-5" />
            <span className="text-sm">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/mailtoravi437"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth"
          >
            <Linkedin className="w-5 h-5" />
            <span className="text-sm">LinkedIn</span>
          </a>
          <a
            href="mailto:mailtoravi437@gmail.com"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth"
          >
            <Mail className="w-5 h-5" />
            <span className="text-sm">Email</span>
          </a>
          <a
            href="tel:+918240627029"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth"
          >
            <Phone className="w-5 h-5" />
            <span className="text-sm">+91-8240627029</span>
          </a>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-5 h-5" />
            <span className="text-sm">Bengaluru, India</span>
          </div>
        </div>
      </div>
    </section>
  );
};
