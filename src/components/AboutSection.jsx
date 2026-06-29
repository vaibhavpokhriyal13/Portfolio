import { Brain, Code, Database } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const AboutSection = () => {
  const [revealRef, isVisible] = useScrollReveal({ triggerOnce: true });

  return (
    <section
      id="about"
      ref={revealRef}
      className={`py-24 px-4 relative transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            <h3 className="text-2xl font-semibold leading-tight">
              Building intelligent software with AI, data, and modern web technologies.
            </h3>

            <p className="text-muted-foreground text-sm md:text-base">
              I'm currently pursuing a Bachelor of Technology (B.Tech) in Computer Science Engineering with a specialization in Data Science. My passion lies in combining Full Stack Development, Artificial Intelligence, and Data Science to create impactful digital solutions.
            </p>

            <p className="text-muted-foreground text-sm md:text-base">
              I enjoy developing responsive web applications, designing secure backend systems, integrating Generative AI, and exploring Machine Learning techniques to solve practical problems. Whether it's building modern user interfaces, developing REST APIs, or creating AI-powered applications, I love working across the entire software development lifecycle.
            </p>

            <p className="text-muted-foreground text-sm md:text-base">
              Beyond development, I'm constantly improving my knowledge of Data Structures & Algorithms, Machine Learning, Data Analytics, and software engineering best practices while staying updated with emerging technologies.
            </p>

            <div className="border-l-4 border-primary pl-4 py-2 italic text-muted-foreground text-sm">
              <strong>Mission:</strong> My goal is to become a skilled software engineer capable of building scalable, AI-powered applications that deliver meaningful experiences and solve real-world challenges through innovation and technology.
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a href="#contact" className="cosmic-button inline-block text-center hover:scale-105 active:scale-95 transition-all duration-300">
                {" "}
                Get In Touch
              </a>

              <a
                href="#projects"
                className="inline-block px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 hover:scale-105 active:scale-95 transition-all duration-300 text-center"
              >
                View My Work
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground text-sm">
                    Creating responsive, performant client interfaces using React.js, Tailwind CSS, and HTML5/CSS3.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Backend Engineering</h4>
                  <p className="text-muted-foreground text-sm">
                    Building secure, scalable REST APIs and databases with Node.js, Express.js, JWT, and MongoDB/MySQL.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI & Data Science</h4>
                  <p className="text-muted-foreground text-sm">
                    Integrating LLMs (Gemini API), engineering prompts, and conducting data cleaning, visualization, and ML model training.
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
