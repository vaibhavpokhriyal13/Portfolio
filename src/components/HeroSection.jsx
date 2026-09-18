
import { Download } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* Background Aurora Glow Effects (Futuristic, GPU-accelerated & lightweight) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-primary/10 rounded-full blur-[120px] md:blur-[180px] pointer-events-none -z-10 animate-pulse-subtle" />
      <div className="absolute top-1/4 left-1/4 w-[200px] h-[200px] bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none -z-10 animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in inline-block"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1 inline-block ml-3">
              Vaibhav
            </span>
            <span className="text-gradient opacity-0 animate-fade-in-delay-2 inline-block ml-3">
              Pokhriyal
            </span>
          </h1>

          <p className="text-xl md:text-2xl font-semibold text-foreground/90 opacity-0 animate-fade-in-delay-2 mt-3 leading-relaxed">
            Full Stack Developer • AI & Data Science Enthusiast
          </p>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3 leading-relaxed">
            A Computer Science Engineering student focused on building intelligent web applications powered by AI and Data Science. I enjoy transforming ideas into scalable, user-focused digital solutions.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="cosmic-button w-44 h-11 inline-flex items-center justify-center border border-transparent hover:scale-105 active:scale-95 transition-all duration-300"
            >
              View My Work
            </a>
            <a
              href="/Vaibhav_Pokhriyal.pdf"
              download="Vaibhav_Pokhriyal_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Resume"
              className="w-44 h-11 inline-flex items-center justify-center gap-2 rounded-full border border-primary/50 text-foreground hover:text-primary hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(139,92,246,0.25)] hover:scale-105 active:scale-95 transition-all duration-300 font-medium bg-background/40 backdrop-blur-xs"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};
