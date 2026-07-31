import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Twitter, Loader2, Mail, MapPin, MessageSquare, Copy, Check, Lightbulb, FileText } from "lucide-react";
import SectionWrapper, { SectionHeading } from "@/components/SectionWrapper";
import { personalInfo, socialLinks, siteContent } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  // AI basic suggestions
  const [suggestedSubject, setSuggestedSubject] = useState("");
  const [suggestedTemplate, setSuggestedTemplate] = useState("");

  // Suggest subject when message is typed
  useEffect(() => {
    const msg = formData.message.trim().toLowerCase();
    const name = formData.name.trim() || "Visitor";
    if (msg.length > 8) {
      if (msg.includes("job") || msg.includes("hire") || msg.includes("opportunity") || msg.includes("role") || msg.includes("position")) {
        setSuggestedSubject(`Job Opportunity - ${name}`);
      } else if (msg.includes("project") || msg.includes("build") || msg.includes("collab") || msg.includes("app") || msg.includes("website")) {
        setSuggestedSubject(`Project Discussion - ${name}`);
      } else if (msg.includes("bug") || msg.includes("issue") || msg.includes("error") || msg.includes("broken")) {
        setSuggestedSubject("Feedback: Site Bug/Issue Report");
      } else {
        setSuggestedSubject(`Collaboration Inquiry - ${name}`);
      }
    } else {
      setSuggestedSubject("");
    }
  }, [formData.message, formData.name]);

  // Suggest message template when subject is typed
  useEffect(() => {
    const subj = formData.subject.trim().toLowerCase();
    const name = formData.name.trim() || "[Your Name]";
    if (subj.length > 4) {
      if (subj.includes("job") || subj.includes("hire") || subj.includes("opportunity") || subj.includes("role")) {
        setSuggestedTemplate(`Hi Umair,\n\nI was impressed by your portfolio and experience. We have a position/opportunity open for a React & NestJS developer, and I would love to connect to discuss details.\n\nBest regards,\n${name}`);
      } else if (subj.includes("project") || subj.includes("collab") || subj.includes("build") || subj.includes("website")) {
        setSuggestedTemplate(`Hi Umair,\n\nI have a project idea that I'd love to build with your help. It is a web application using modern technologies. Let me know if you have availability to chat.\n\nBest,\n${name}`);
      } else if (subj.includes("bug") || subj.includes("issue") || subj.includes("feedback")) {
        setSuggestedTemplate(`Hi Umair,\n\nI was checking out your portfolio and wanted to report a small issue/give feedback: [Write details here]. Hope it helps!\n\nBest,\n${name}`);
      } else {
        setSuggestedTemplate(`Hi Umair,\n\nI'm reaching out to you regarding: [Enter details here]. Let's connect.\n\nBest,\n${name}`);
      }
    } else {
      setSuggestedTemplate("");
    }
  }, [formData.subject, formData.name]);

  const copyEmailToClipboard = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    toast.success(siteContent.contact.details.copyToast);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      try {
        const finalSubject = formData.subject || `Portfolio Contact - Message from ${formData.name}`;
        const body = `Hi Umair,\n\nYou received a new message from your portfolio website:\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${finalSubject}\n\nMessage:\n${formData.message}`;
        
        const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(finalSubject)}&body=${encodeURIComponent(body)}`;
        
        window.location.href = mailtoUrl;
        toast.success(siteContent.contact.form.successToast);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } catch (error) {
        toast.error(siteContent.contact.form.errorToast + personalInfo.email);
      } finally {
        setLoading(false);
      }
    }, 800);
  };

  return (
    <SectionWrapper id="contact">
      <SectionHeading
        title={siteContent.contact.title}
        subtitle={siteContent.contact.subtitle}
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
            {siteContent.contact.form.heading}
          </h3>

          <div className="space-y-1">
            <label className="text-xs font-mono text-muted-foreground">{siteContent.contact.form.nameLabel}</label>
            <Input
              placeholder={siteContent.contact.form.namePlaceholder}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-secondary/40 border-border/60 focus:border-primary/60"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-mono text-muted-foreground">{siteContent.contact.form.emailLabel}</label>
            <Input
              type="email"
              placeholder={siteContent.contact.form.emailPlaceholder}
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="bg-secondary/40 border-border/60 focus:border-primary/60"
            />
          </div>

          <div className="space-y-1 relative">
            <label className="text-xs font-mono text-muted-foreground">{siteContent.contact.form.subjectLabel}</label>
            <Input
              placeholder={siteContent.contact.form.subjectPlaceholder}
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="bg-secondary/40 border-border/60 focus:border-primary/60"
            />
            {/* AI Suggested Subject Badge */}
            {suggestedSubject && !formData.subject && (
              <motion.button
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                type="button"
                onClick={() => setFormData({ ...formData, subject: suggestedSubject })}
                className="mt-1.5 text-xs text-primary hover:underline flex items-center gap-1.5 font-medium bg-primary/5 border border-primary/20 px-2.5 py-1.5 rounded-full w-fit cursor-pointer transition-colors hover:bg-primary/10"
              >
                <Lightbulb size={12} className="text-primary animate-pulse" />
                {siteContent.contact.form.suggestedSubjectPrefix}: "{suggestedSubject}"
              </motion.button>
            )}
          </div>

          <div className="space-y-1">
            <label className="text-xs font-mono text-muted-foreground">{siteContent.contact.form.messageLabel}</label>
            <Textarea
              placeholder={siteContent.contact.form.messagePlaceholder}
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
              className="bg-secondary/40 border-border/60 focus:border-primary/60 resize-none"
            />
            {/* AI Suggested Message Template Badge */}
            {suggestedTemplate && !formData.message && (
              <motion.button
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                type="button"
                onClick={() => setFormData({ ...formData, message: suggestedTemplate })}
                className="mt-1.5 text-xs text-primary hover:underline flex items-center gap-1.5 font-medium bg-primary/5 border border-primary/20 px-2.5 py-1.5 rounded-full w-fit cursor-pointer transition-colors hover:bg-primary/10"
              >
                <FileText size={12} className="text-primary animate-pulse" />
                {siteContent.contact.form.prefillTemplateLabel}
              </motion.button>
            )}
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="bg-primary text-primary-foreground hover:bg-primary/90 w-full font-semibold py-6 glow-border transition-all duration-200"
          >
            {loading ? (
              <>
                <Loader2 size={18} className="mr-2 animate-spin" />
                {siteContent.contact.form.sendingBtn}
              </>
            ) : (
              <>
                <Send size={18} className="mr-2" />
                {siteContent.contact.form.sendBtn}
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
            <h3 className="text-xl font-bold text-foreground">{siteContent.contact.details.heading}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              {siteContent.contact.details.description}
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
                    <p className="text-xs font-mono text-muted-foreground">{siteContent.contact.details.emailLabel}</p>
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
                      <span className="text-emerald-500 font-medium">{siteContent.contact.details.copiedBtn}</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span className="hidden sm:inline">{siteContent.contact.details.copyBtn}</span>
                    </>
                  )}
                </Button>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/30 border border-border/40">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground">{siteContent.contact.details.locationLabel}</p>
                  <p className="text-sm font-semibold text-foreground">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-6 border border-border/50 space-y-3">
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              {siteContent.contact.details.socialsLabel}
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
