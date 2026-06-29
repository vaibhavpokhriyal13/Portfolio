import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const projects = [
  {
    id: 1,
    title: "Gen-AI Job Prep Platform",
    description: "An AI-powered career preparation platform designed to help job seekers prepare for placements. Features mock interviews, ATS resume generation, feedback analysis, and user dashboards.",
    image: "/projects/project1.png",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Google Gemini API", "JWT", "Tailwind CSS"],
    demoUrl: "https://gen-ai-job-preparation-web-applicat-eta.vercel.app/",
    githubUrl: "https://github.com/vaibhavpokhriyal13/Gen-AI-Job-Preparation-Web-Application",
  },
  {
    id: 2,
    title: "AI X-Ray Analyzer (Ongoing)",
    description: "An intelligent medical imaging application utilizing Deep Learning and Computer Vision for chest X-ray analysis. Predicts diseases with confidence scores and explainable AI insights.",
    image: "/projects/project2.png",
    tags: ["Python", "TensorFlow", "MobileNetV2", "Computer Vision", "React.js", "Flask/FastAPI"],
    demoUrl: "#",
    githubUrl: "https://github.com/vaibhavpokhriyal13/AI-XRay-Analyzer",
  },
];

export const ProjectsSection = () => {
  const [revealRef, isVisible] = useScrollReveal({ triggerOnce: true });

  return (
    <section
      id="projects"
      ref={revealRef}
      className={`py-24 px-4 relative transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs border border-border/40 card-hover flex flex-col justify-between"
            >
              <div>
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6 pb-0">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag, tKey) => (
                      <span key={tKey} className="px-2 py-0.5 text-[10px] font-medium border rounded-full bg-secondary text-secondary-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-foreground text-left"> {project.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed text-left mb-4">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-2 flex justify-between items-center mt-auto">
                <div className="flex space-x-3">
                  {project.demoUrl !== "#" && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/vaibhavpokhriyal13"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
