import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [revealRef, isVisible] = useScrollReveal({ triggerOnce: true });
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast({
        title: "Configuration Needed",
        description: "EmailJS credentials are not configured in the .env file.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(
        () => {
          toast({
            title: "Message sent!",
            description: "Thank you for your message. I'll get back to you soon.",
          });
          if (formRef.current) formRef.current.reset();
          setIsSubmitting(false);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          toast({
            title: "Error sending message",
            description: "Something went wrong. Please try again later.",
            variant: "destructive",
          });
          setIsSubmitting(false);
        }
      );
  };
  return (
    <section
      id="contact"
      ref={revealRef}
      className={`py-24 px-4 relative bg-secondary/30 transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-0.5">
                    Email
                  </span>
                  <a
                    href="mailto:vaibhavpokhriyal13@gmail.com"
                    className="text-foreground hover:text-primary transition-colors font-medium text-sm md:text-base break-all"
                  >
                    vaibhavpokhriyal13@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-0.5">
                    Location
                  </span>
                  <span className="text-foreground font-medium text-sm md:text-base">
                    New Delhi, India
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-8 text-center md:text-left">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-6 justify-center md:justify-start items-center">
                <a href="https://github.com/vaibhavpokhriyal13" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/vaibhavpokhriyal/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>

            <div className="pt-6 text-center md:text-left">
              <a
                href="/Vaibhav_Pokhriyal.pdf"
                download
                className="cosmic-button inline-flex items-center gap-2 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="John Doe..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="john@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
