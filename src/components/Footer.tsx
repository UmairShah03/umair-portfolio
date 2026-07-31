import { ArrowUp, Github, Linkedin, Twitter } from "lucide-react";
import { socialLinks, siteContent } from "@/data/portfolio";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/50 py-10 px-4 bg-background/50 relative">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-sm font-medium text-foreground">
            Umair Shah <span className="text-primary font-bold">•</span> {siteContent.footer.developerRole}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            © {new Date().getFullYear()} {siteContent.footer.rights}
          </p>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex gap-4">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter size={18} />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-2.5 rounded-xl glass border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/40 hover:scale-110 transition-all duration-200"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

