'use client';

import { motion } from 'framer-motion';
import { FiLayout, FiServer, FiDatabase, FiCloud, FiZap } from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi2';
import { skillsData, coreStack } from '../../data/skills';
import SectionHeading from '../ui/SectionHeading';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  layout: FiLayout,
  server: FiServer,
  database: FiDatabase,
  cloud: FiCloud,
  plug: FiZap,
  sparkles: HiOutlineSparkles,
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Toolbox"
          title="Technical"
          accent="Skills"
          subtitle="The technologies I use to design, build, and ship production software."
        />

        {/* Proficiency meters — strongest stack */}
        <motion.div
          className="glass p-8 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-display text-lg font-semibold text-white mb-6">Core Proficiency</h3>
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
            {coreStack.map((s, i) => (
              <div key={s.title}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-200">{s.title}</span>
                  <span className="font-mono text-accent-cyan">{s.rating}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.rating}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + i * 0.08, ease: 'easeOut' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Category grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillsData.map((category, idx) => {
            const Icon = iconMap[category.icon] ?? FiLayout;
            return (
              <motion.div
                key={category.title}
                className="glass glass-hover card-glow p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-accent-blue/20 to-accent-violet/20 text-accent-cyan">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display font-semibold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="chip chip-hover">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
