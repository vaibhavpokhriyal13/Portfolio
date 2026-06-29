import { Briefcase, GraduationCap } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const ExperienceSection = () => {
  const [revealRef, isVisible] = useScrollReveal({ triggerOnce: true });

  return (
    <section
      id="experience"
      ref={revealRef}
      className={`py-24 px-4 relative transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Experience & <span className="text-primary">Education</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Work Experience Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
              <div className="p-3 rounded-full bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-left">Work Experience</h3>
            </div>

            <div className="relative border-l-2 border-primary/20 pl-6 ml-3 space-y-8 text-left">
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                <div className="bg-card p-6 rounded-lg shadow-xs border border-border/50">
                  <span className="text-xs font-semibold text-primary px-2.5 py-1 rounded-full bg-primary/10">
                    July 2025 – August 2025
                  </span>
                  <h4 className="text-xl font-bold mt-4 text-foreground">Web Development Intern</h4>
                  <p className="text-primary font-medium text-sm mt-1">Cantilever Technologies</p>
                  <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                    Worked on developing responsive web applications using React.js and modern JavaScript while collaborating with a remote development team. Improved application performance through component optimization, reusable UI architecture, and responsive design, gaining practical experience in modern frontend development workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Education Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
              <div className="p-3 rounded-full bg-primary/10">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-left">Education</h3>
            </div>

            <div className="relative border-l-2 border-primary/20 pl-6 ml-3 space-y-8 text-left">
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                <div className="bg-card p-6 rounded-lg shadow-xs border border-border/50">
                  <span className="text-xs font-semibold text-primary px-2.5 py-1 rounded-full bg-primary/10">
                    2023 – 2027
                  </span>
                  <h4 className="text-xl font-bold mt-4 text-foreground">Bachelor of Technology (B.Tech)</h4>
                  <p className="text-primary font-medium text-sm mt-1">
                    Computer Science Engineering (Data Science)
                  </p>
                  <p className="text-muted-foreground font-medium text-xs mt-1">
                    Maharaja Agrasen Institute of Technology (MAIT), Delhi
                  </p>
                  <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                    Pursuing studies specialized in Data Science. Integrating full stack software development principles with Artificial Intelligence, Machine Learning techniques, Data Structures, and algorithms to construct comprehensive digital applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
