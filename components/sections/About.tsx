'use client';

import { motion } from 'framer-motion';
import { FiMapPin, FiAward, FiCode, FiCpu } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';

const stats = [
  { value: '7+', label: 'Years Experience' },
  { value: '20+', label: 'Projects Delivered' },
  { value: '6', label: 'Industries' },
  { value: '2', label: 'AI Certifications' },
];

const highlights = [
  {
    icon: FiCode,
    title: 'Full-Stack Engineering',
    text: 'React, Next.js, NestJS, Node.js and Python — from pixel-perfect UI to type-safe APIs and databases.',
  },
  {
    icon: FiCpu,
    title: 'AI-Augmented Workflow',
    text: 'Claude, Cursor and MCP (ClickUp/Jira) integrated for ticket-driven, context-aware development.',
  },
  {
    icon: FiAward,
    title: 'Design-Minded',
    text: 'Senior UI/UX sensibility — design systems, accessibility, and consistent, scalable component libraries.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Who I Am" title="About" accent="Me" />

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left — bio card */}
          <motion.div
            className="lg:col-span-3 glass card-glow p-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-2xl font-semibold text-white">
              Senior Software Engineer & UI/UX Developer
            </h3>
            <div className="mt-3 flex items-center gap-2 text-sm text-slate-400">
              <FiMapPin className="text-accent-cyan" /> Tanza, Cavite · Philippines
            </div>

            <p className="mt-6 leading-relaxed text-slate-300">
              I&apos;m a Developer Lead with 7+ years of full-stack web and API development experience,
              specialising in <span className="text-white">React, Next.js, NestJS, Node.js</span> and{' '}
              <span className="text-white">Adobe Experience Manager</span>. I&apos;ve delivered
              enterprise-grade platforms across eCommerce, insurance, telecom, pharmaceuticals, and
              business operations.
            </p>
            <p className="mt-4 leading-relaxed text-slate-400">
              I&apos;ve deeply integrated AI-assisted development into my daily workflow — leveraging
              Claude (Anthropic), Cursor, and MCP integrations with ClickUp and Jira for ticket-driven
              development, automated PR reviews, and intelligent code generation.
            </p>

            <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.02] p-5">
              <span className="eyebrow">Education</span>
              <p className="mt-2 font-medium text-white">BS in Information Technology</p>
              <p className="text-sm text-slate-400">ACLC College · 2013 – 2017</p>
            </div>
          </motion.div>

          {/* Right — highlights + stats */}
          <div className="lg:col-span-2 space-y-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                className="glass glass-hover p-5 flex gap-4"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-accent-blue/20 to-accent-violet/20 text-accent-cyan">
                  <h.icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-white">{h.title}</h4>
                  <p className="mt-1 text-sm text-slate-400">{h.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stat row */}
        <motion.div
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((s) => (
            <div key={s.label} className="glass p-6 text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-gradient">{s.value}</div>
              <div className="mt-1 text-sm text-slate-400">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
