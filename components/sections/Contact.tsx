'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi';
import { siteConfig } from '../../lib/config';
import SectionHeading from '../ui/SectionHeading';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Static-site friendly: compose a mailto with the form contents.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${formData.name || 'someone'}`);
    const body = encodeURIComponent(`${formData.message}\n\n— ${formData.name} (${formData.email})`);
    window.location.href = `mailto:${siteConfig.author.email}?subject=${subject}&body=${body}`;
  };

  const contactItems = [
    { icon: FiMail, label: 'Email', value: siteConfig.author.email, href: `mailto:${siteConfig.author.email}` },
    { icon: FiPhone, label: 'Phone', value: siteConfig.author.phone, href: `tel:${siteConfig.author.phone.replace(/[^0-9+]/g, '')}` },
    { icon: FiMapPin, label: 'Location', value: siteConfig.author.location },
    { icon: FiLinkedin, label: 'LinkedIn', value: 'in/nico-cabral', href: siteConfig.author.linkedin },
  ];

  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Say Hello"
          title="Get In"
          accent="Touch"
          subtitle="Have a project in mind or an opportunity to discuss? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Info */}
          <motion.div
            className="lg:col-span-2 space-y-3"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {contactItems.map((item) => {
              const content = (
                <div className="glass glass-hover p-5 flex items-center gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-accent-blue/20 to-accent-violet/20 text-accent-cyan">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wider text-slate-500">{item.label}</p>
                    <p className="truncate text-slate-200">{item.value}</p>
                  </div>
                </div>
              );
              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="block"
                >
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}

            <div className="flex gap-3 pt-2">
              <a
                href={siteConfig.author.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 transition-all hover:border-accent-cyan/50 hover:text-white"
              >
                <FiGithub className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.author.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 transition-all hover:border-accent-cyan/50 hover:text-white"
              >
                <FiLinkedin className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass card-glow p-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-slate-300">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Jane Doe"
                  className="w-full rounded-lg border border-white/10 bg-white/[0.03] p-3 text-sm text-slate-100 placeholder-slate-500 outline-none transition focus:border-accent-cyan/50 focus:ring-2 focus:ring-accent-cyan/20"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-slate-300">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="jane@example.com"
                  className="w-full rounded-lg border border-white/10 bg-white/[0.03] p-3 text-sm text-slate-100 placeholder-slate-500 outline-none transition focus:border-accent-cyan/50 focus:ring-2 focus:ring-accent-cyan/20"
                />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="message" className="mb-2 block text-sm text-slate-300">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project or opportunity…"
                className="w-full resize-none rounded-lg border border-white/10 bg-white/[0.03] p-3 text-sm text-slate-100 placeholder-slate-500 outline-none transition focus:border-accent-cyan/50 focus:ring-2 focus:ring-accent-cyan/20"
              />
            </div>
            <button
              type="submit"
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-accent-blue to-accent-violet px-6 py-3.5 font-medium text-white transition-all hover:shadow-glow-blue hover:scale-[1.02]"
            >
              Send Message
              <FiSend className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
