import { useState } from "react";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";

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
  { id: "all", label: "All" },
  { id: "languages", label: "Languages" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "databases", label: "Databases" },
  { id: "ai", label: "AI" },
  { id: "datascience", label: "Data Science & ML" },
  { id: "tools", label: "Tools & Platforms" },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [revealRef, isVisible] = useScrollReveal({ triggerOnce: true });

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

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

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize text-sm font-medium",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
          {filteredSkills.map((skill, index) => (
            <div
              key={`${activeCategory}-${skill.name}`}
              className={cn(
                "bg-card px-5 py-2.5 rounded-full shadow-xs border border-border/40 flex items-center justify-center transition-all duration-500 hover:border-primary/50 hover:scale-105 hover:shadow-md transform",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: `${index * 25}ms` }}
            >
              <span className="font-semibold text-sm sm:text-base text-foreground">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
