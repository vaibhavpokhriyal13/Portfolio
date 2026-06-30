import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Fix coordinate logic to toggle scrolled styles
      if (currentScrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide navbar when scrolling down, show when scrolling up (with 10px threshold)
      const scrollDiff = currentScrollY - lastScrollY;
      if (Math.abs(scrollDiff) > 10) {
        if (scrollDiff > 0 && currentScrollY > 100 && !isMenuOpen) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMenuOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed w-full z-50 transition-all duration-300 transform",
          isScrolled
            ? "py-3 bg-background/95 backdrop-blur-md shadow-md border-b border-border/20"
            : "py-5 bg-transparent",
          isVisible ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="container flex items-center justify-between">
          <a
            className="text-xl font-bold text-primary flex items-center"
            href="#hero"
            onClick={() => setIsVisible(true)}
          >
            <span className="relative z-10">
              <span className="text-glow text-foreground"> VP </span>{" "}
              Portfolio
            </span>
          </a>

          {/* desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsVisible(true)}
              >
                {item.name}
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* mobile nav controls */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="p-2 text-foreground z-50 cursor-pointer"
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* mobile menu overlay (rendered outside the transformed nav to preserve fixed inset-0 viewport positioning) */}
      <div
        className={cn(
          "fixed inset-0 bg-background/98 backdrop-blur-lg z-40 flex flex-col items-center justify-center",
          "transition-all duration-300 md:hidden",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col space-y-8 text-xl text-center">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium py-2"
              onClick={() => {
                setIsMenuOpen(false);
                setIsVisible(true);
              }}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
