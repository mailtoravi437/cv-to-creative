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
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,229,255,0.1),transparent_50%)]" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
        <div className="inline-block">
          <span className="text-primary text-sm font-mono tracking-wider uppercase">
            Backend Engineer
          </span>
        </div>
        
        <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Ravi Kumar
          </span>
        </h1>
        
        <p ref={subtitleRef} className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
          4+ years crafting scalable backend systems for fintech and enterprise platforms. 
          Specialized in microservices architecture and distributed systems.
        </p>
        
        <div ref={buttonsRef} className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="shadow-glow">
            <a href="#contact">Get In Touch</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#experience">View Experience</a>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <a href="/Ravi_Kumar_Resume.pdf" download="Ravi_Kumar_Resume.pdf">
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </Button>
        </div>
        
        <div ref={linksRef} className="flex flex-wrap justify-center gap-6 pt-8">
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
