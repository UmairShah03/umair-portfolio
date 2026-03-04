import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Twitter } from "lucide-react";
import SectionWrapper, { SectionHeading } from "@/components/SectionWrapper";
import { personalInfo, socialLinks } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   toast.success("Message sent! I'll get back to you soon.");
  //   setFormData({ name: "", email: "", message: "" });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_afilmat",
        "template_6w2l468",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "up4Ve52Y-rG6wu0p9",
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Failed to send message. Try again.");
          console.error(error);
        },
      );
  };

  return (
    <SectionWrapper id="contact">
      <SectionHeading
        title="Get In Touch"
        subtitle="Have a project in mind? Let's talk."
      />

      <div className="grid md:grid-cols-2 gap-10 max-w-4xl">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <Input
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="bg-secondary/50 border-border/50 focus:border-primary/50"
          />
          <Input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
            className="bg-secondary/50 border-border/50 focus:border-primary/50"
          />
          <Textarea
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            required
            className="bg-secondary/50 border-border/50 focus:border-primary/50 resize-none"
          />
          <Button
            type="submit"
            className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto px-8"
          >
            <Send size={16} className="mr-2" />
            Send Message
          </Button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <p className="text-muted-foreground leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-1">Email</p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-primary hover:underline font-mono"
            >
              {personalInfo.email}
            </a>
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-3">Connect</p>
            <div className="flex gap-4">
              {[
                { icon: Github, href: socialLinks.github },
                { icon: Linkedin, href: socialLinks.linkedin },
                { icon: Twitter, href: socialLinks.twitter },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 glass rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
