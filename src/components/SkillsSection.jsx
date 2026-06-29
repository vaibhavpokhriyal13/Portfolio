import { useState } from "react";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronDown } from "lucide-react";

const skills = [
  // Programming Languages
  { name: "JavaScript (ES6+)", level: 90, category: "languages" },
  { name: "Python", level: 88, category: "languages" },
  { name: "Java", level: 85, category: "languages" },
  { name: "C++", level: 80, category: "languages" },
  { name: "SQL", level: 85, category: "languages" },
  { name: "R", level: 70, category: "languages" },

  // Frontend Development
  { name: "React.js", level: 90, category: "frontend" },
  { name: "HTML5 / CSS3", level: 95, category: "frontend" },
  { name: "Tailwind CSS", level: 92, category: "frontend" },
  { name: "Bootstrap", level: 80, category: "frontend" },

  // Backend Development
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Express.js", level: 85, category: "backend" },
  { name: "REST APIs", level: 90, category: "backend" },
  { name: "JWT Authentication", level: 85, category: "backend" },

  // Databases
  { name: "MongoDB", level: 85, category: "databases" },
  { name: "MySQL", level: 80, category: "databases" },

  // Artificial Intelligence
  { name: "Generative AI", level: 88, category: "ai" },
  { name: "Google Gemini API", level: 85, category: "ai" },
  { name: "Prompt Engineering", level: 90, category: "ai" },
  { name: "LLM Integration", level: 85, category: "ai" },

  // Data Science & Machine Learning
  { name: "Pandas & NumPy", level: 85, category: "datascience" },
  { name: "Matplotlib & Seaborn", level: 80, category: "datascience" },
  { name: "Scikit-learn", level: 80, category: "datascience" },
  { name: "Exploratory Data Analysis (EDA)", level: 85, category: "datascience" },
  { name: "Machine Learning (Model Training)", level: 78, category: "datascience" },

  // Tools & Platforms
  { name: "Git & GitHub", level: 90, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Jupyter Notebook", level: 85, category: "tools" },
  { name: "Postman", level: 85, category: "tools" },
  { name: "Vercel & Render", level: 80, category: "tools" },
];

const categories = [
  { id: "languages", label: "Languages" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "databases", label: "Databases" },
  { id: "ai", label: "AI" },
  { id: "datascience", label: "Data Science & ML" },
  { id: "tools", label: "Tools & Platforms" },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [revealRef, isVisible] = useScrollReveal({ triggerOnce: true });

  const toggleCategory = (categoryId) => {
    setActiveCategory((prev) => (prev === categoryId ? null : categoryId));
  };

  return (
    <section
      id="skills"
      ref={revealRef}
      className={`py-24 px-4 relative bg-secondary/30 transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Technical <span className="text-primary">Toolkit</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {categories.map((category) => {
            const isExpanded = activeCategory === category.id;
            const filtered = skills.filter((s) => s.category === category.id);

            return (
              <div
                key={category.id}
                className={cn(
                  "bg-card rounded-xl border border-border/40 overflow-hidden transition-all duration-300 shadow-xs h-fit",
                  isExpanded ? "ring-1 ring-primary/30 border-primary/30 shadow-md" : "hover:border-primary/30"
                )}
              >
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left font-semibold text-foreground hover:bg-secondary/20 transition-colors cursor-pointer"
                >
                  <div className="flex flex-col">
                    <span className="text-base md:text-lg">{category.label}</span>
                    <span className="text-xs font-normal text-muted-foreground mt-0.5">
                      {filtered.length} skills
                    </span>
                  </div>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-muted-foreground transition-transform duration-300",
                      isExpanded && "rotate-180 text-primary"
                    )}
                  />
                </button>

                {/* Collapsible Content */}
                <div
                  className={cn(
                    "transition-all duration-300 ease-in-out overflow-hidden",
                    isExpanded ? "max-h-[500px] border-t border-border/30 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <div className="p-5 flex flex-wrap gap-2">
                    {filtered.map((skill, index) => (
                      <span
                        key={skill.name}
                        className={cn(
                          "bg-secondary/40 text-foreground px-3.5 py-1.5 rounded-full text-xs md:text-sm font-medium border border-border/20 transition-all duration-300 hover:border-primary/30 hover:scale-105 hover:bg-secondary flex items-center justify-center transform",
                          isExpanded && isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                        )}
                        style={{ transitionDelay: `${index * 25}ms` }}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
