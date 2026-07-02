'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUpRight, FiGithub, FiZap } from 'react-icons/fi';
import { projectsData } from '../../data/projects';
import SectionHeading from '../ui/SectionHeading';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', ...Array.from(new Set(projectsData.map((p) => p.category)))];

  const filtered =
    activeFilter === 'All' ? projectsData : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Selected Work"
          title="Featured"
          accent="Projects"
          subtitle="Enterprise platforms delivered across insurance, telecom, pharma, fintech, and internal tooling."
        />

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-accent-blue to-accent-violet text-white shadow-glow-blue'
                  : 'border border-white/10 bg-white/[0.03] text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                className="group glass card-glow flex flex-col p-6 hover:bg-white/[0.05] transition-colors"
              >
                <div className="flex items-start justify-between">
                  <span className="rounded-full border border-accent-cyan/30 bg-accent-cyan/10 px-3 py-1 text-xs font-medium text-accent-cyan">
                    {project.category}
                  </span>
                  <div className="flex gap-2 text-slate-500">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Source code"
                        className="transition-colors hover:text-white"
                      >
                        <FiGithub className="h-4 w-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live project"
                        className="transition-colors hover:text-white"
                      >
                        <FiArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="mt-4 font-display text-lg font-semibold text-white group-hover:text-gradient transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{project.description}</p>

                {project.highlight && (
                  <p className="mt-4 flex items-start gap-2 text-sm text-slate-300">
                    <FiZap className="mt-0.5 h-4 w-4 shrink-0 text-accent-violet" />
                    {project.highlight}
                  </p>
                )}

                <div className="mt-auto pt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
