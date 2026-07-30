import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Twitter, Loader2, Mail, MapPin, MessageSquare, Copy, Check } from "lucide-react";
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

  const [copied, setCopied] = useState(false);

  const copyEmailToClipboard = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    toast.success("Email copied to clipboard!");
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

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
          toast.success("Message sent! I'll get back to you soon.");
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          toast.error("Failed to send message. Try again.");
        },
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <SectionWrapper id="contact">
      <SectionHeading
        title="Get In Touch"
        subtitle="Have a project in mind, a question, or an opportunity? Let's build something great together."
      />

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto items-start">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass rounded-2xl p-6 md:p-8 space-y-5 border border-border/50 shadow-xl"
        >
          <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
            <MessageSquare className="text-primary" size={20} />
            Send a Message
          </h3>

          <div className="space-y-1">
            <label className="text-xs font-mono text-muted-foreground">Your Name</label>
            <Input
              placeholder="e.g. John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-secondary/40 border-border/60 focus:border-primary/60"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-mono text-muted-foreground">Your Email</label>
            <Input
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="bg-secondary/40 border-border/60 focus:border-primary/60"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-mono text-muted-foreground">Message</label>
            <Textarea
              placeholder="Tell me about your project or offer..."
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
              className="bg-secondary/40 border-border/60 focus:border-primary/60 resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="bg-primary text-primary-foreground hover:bg-primary/90 w-full font-semibold py-6 glow-border transition-all duration-200"
          >
            {loading ? (
              <>
                <Loader2 size={18} className="mr-2 animate-spin" />
                Sending Message...
              </>
            ) : (
              <>
                <Send size={18} className="mr-2" />
                Send Message
              </>
            )}
          </Button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="glass rounded-2xl p-6 border border-border/50 space-y-4">
            <h3 className="text-xl font-bold text-foreground">Contact Details</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Feel free to reach out directly via email or social platforms. I typically respond within 24 hours.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-secondary/30 hover:bg-secondary/50 border border-border/40 transition-colors group">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 overflow-hidden"
                >
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-mono text-muted-foreground">Email</p>
                    <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                      {personalInfo.email}
                    </p>
                  </div>
                </a>

                <Button
                  type="button"
                  size="sm"
                  variant="ghost"
                  onClick={copyEmailToClipboard}
                  className="text-muted-foreground hover:text-primary hover:bg-primary/10 ml-2 px-2.5 py-1.5 h-auto text-xs flex items-center gap-1.5 transition-all"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-emerald-500" />
                      <span className="text-emerald-500 font-medium">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span className="hidden sm:inline">Copy</span>
                    </>
                  )}
                </Button>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/30 border border-border/40">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground">Location</p>
                  <p className="text-sm font-semibold text-foreground">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-6 border border-border/50 space-y-3">
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              Social Profiles
            </p>
            <div className="flex gap-3">
              {[
                { icon: Github, href: socialLinks.github, label: "GitHub" },
                { icon: Linkedin, href: socialLinks.linkedin, label: "LinkedIn" },
                { icon: Twitter, href: socialLinks.twitter, label: "Twitter" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 glass rounded-xl flex items-center justify-center gap-2 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-200 group"
                >
                  <Icon size={18} className="group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-medium">{label}</span>
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

