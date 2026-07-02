'use client';

import { motion } from 'framer-motion';
import { HiOutlineSparkles } from 'react-icons/hi2';
import { FiCheckCircle, FiTerminal } from 'react-icons/fi';
import { aiCredentials, aiWorkflow } from '../../data/ai';
import SectionHeading from '../ui/SectionHeading';

export default function AI() {
  return (
    <section id="ai" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="AI-Augmented"
          title="AI"
          accent="Proficiency"
          subtitle="Certified AI proficiency, applied to real engineering — not a buzzword, a daily workflow."
        />

        {/* Credentials */}
        <div className="grid md:grid-cols-2 gap-5 mb-6">
          {aiCredentials.map((cred, i) => (
            <motion.div
              key={cred.title}
              className="glass card-glow p-7 relative overflow-hidden"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
            >
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-accent-violet/20 blur-2xl" />
              <div className="relative flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent-cyan to-accent-violet text-ink-950 shadow-glow">
                  <HiOutlineSparkles className="h-6 w-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <FiCheckCircle className="h-4 w-4 text-accent-cyan" />
                    <span className="text-xs font-mono uppercase tracking-wider text-accent-cyan">
                      Verified
                    </span>
                  </div>
                  <h3 className="mt-1 font-display text-xl font-semibold text-white">{cred.title}</h3>
                  <p className="text-sm text-slate-400">{cred.issuer}</p>
                </div>
              </div>
              <p className="relative mt-5 text-sm leading-relaxed text-slate-300">{cred.description}</p>
              <p className="relative mt-4 inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-400">
                {cred.context}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Workflow strip */}
        <motion.div
          className="glass p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <FiTerminal className="h-5 w-5 text-accent-cyan" />
            <h3 className="font-display text-lg font-semibold text-white">How I work with AI</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {aiWorkflow.map((w) => (
              <div key={w.tool} className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                <h4 className="font-medium text-white">{w.tool}</h4>
                <p className="mt-2 text-sm text-slate-400">{w.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
