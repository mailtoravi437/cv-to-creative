import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, MapPin, Download } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.from(buttonsRef.current?.children || [], {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.6,
        stagger: 0.2,
        ease: "power3.out",
      });

      gsap.from(linksRef.current?.children || [], {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 1,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute inset-0 dot-pattern" />
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-10">
        <div className="inline-block">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase px-4 py-2 rounded-full glass-card">
            Backend Engineer
          </span>
        </div>
        
        <h1 ref={titleRef} className="text-6xl md:text-8xl font-bold tracking-tight leading-tight">
          <span className="text-gradient">
            Ravi Kumar
          </span>
        </h1>
        
        <p ref={subtitleRef} className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
          4+ years crafting scalable backend systems for fintech and enterprise platforms. 
          Specialized in microservices architecture and distributed systems.
        </p>
        
        <div ref={buttonsRef} className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="gradient-primary shadow-glow hover:shadow-premium hover:scale-105 transition-spring text-base px-8">
            <a href="#contact">Get In Touch</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="glass-card hover:bg-primary/10 hover:scale-105 transition-spring text-base px-8">
            <a href="#experience">View Experience</a>
          </Button>
          <Button asChild size="lg" className="gradient-secondary shadow-premium hover:shadow-glow hover:scale-105 transition-spring text-base px-8">
            <a href="/Ravi_Kumar_Resume.pdf" download="Ravi_Kumar_Resume.pdf">
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </Button>
        </div>
        
        <div ref={linksRef} className="flex flex-wrap justify-center gap-8 pt-8">
          <a
            href="https://github.com/mailtoravi437"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-muted-foreground hover:text-primary hover:scale-110 transition-spring group"
          >
            <div className="p-2 rounded-lg glass-card group-hover:shadow-glow transition-smooth">
              <Github className="w-5 h-5" />
            </div>
            <span className="text-sm font-medium">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/mailtoravi437"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-muted-foreground hover:text-secondary hover:scale-110 transition-spring group"
          >
            <div className="p-2 rounded-lg glass-card group-hover:shadow-glow transition-smooth">
              <Linkedin className="w-5 h-5" />
            </div>
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
          <a
            href="mailto:mailtoravi437@gmail.com"
            className="flex items-center gap-3 text-muted-foreground hover:text-accent hover:scale-110 transition-spring group"
          >
            <div className="p-2 rounded-lg glass-card group-hover:shadow-glow transition-smooth">
              <Mail className="w-5 h-5" />
            </div>
            <span className="text-sm font-medium">Email</span>
          </a>
          <a
            href="tel:+918240627029"
            className="flex items-center gap-3 text-muted-foreground hover:text-primary hover:scale-110 transition-spring group"
          >
            <div className="p-2 rounded-lg glass-card group-hover:shadow-glow transition-smooth">
              <Phone className="w-5 h-5" />
            </div>
            <span className="text-sm font-medium">+91-8240627029</span>
          </a>
          <div className="flex items-center gap-3 text-muted-foreground">
            <div className="p-2 rounded-lg glass-card">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="text-sm font-medium">Bengaluru, India</span>
          </div>
        </div>
      </div>
    </section>
  );
};
