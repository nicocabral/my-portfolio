'use client';

import { motion } from 'framer-motion';
import { FiCpu } from 'react-icons/fi';
import { experienceData } from '../../data/experience';
import SectionHeading from '../ui/SectionHeading';

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          eyebrow="Career"
          title="Professional"
          accent="Experience"
          subtitle="A track record of leading frontend and full-stack delivery across enterprise platforms."
        />

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-4 md:left-5 top-2 bottom-2 w-px bg-gradient-to-b from-accent-cyan/60 via-accent-blue/40 to-transparent" />

          <div className="space-y-8">
            {experienceData.map((job, index) => (
              <motion.div
                key={`${job.company}-${index}`}
                className="relative pl-12 md:pl-16"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                {/* node */}
                <span className="absolute left-[9px] md:left-[13px] top-6 grid h-5 w-5 place-items-center rounded-full bg-ink-950 ring-2 ring-accent-cyan/70">
                  <span className="h-2 w-2 rounded-full bg-accent-cyan" />
                </span>

                <div className="glass card-glow p-6 md:p-7">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-white">{job.title}</h3>
                      <p className="text-accent-cyan">
                        {job.company}
                        {job.type && <span className="text-slate-500"> · {job.type}</span>}
                      </p>
                    </div>
                    <span className="shrink-0 self-start rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-mono text-slate-300">
                      {job.period}
                    </span>
                  </div>

                  {job.techStack && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {job.techStack.split(', ').map((tech) => (
                        <span key={tech} className="chip">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  <ul className="mt-5 space-y-2">
                    {job.responsibilities.map((item, idx) => (
                      <li key={idx} className="flex gap-3 text-sm text-slate-300">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-violet" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {job.ai && (
                    <div className="mt-5 flex gap-3 rounded-xl border border-accent-violet/20 bg-accent-violet/[0.07] p-4">
                      <FiCpu className="mt-0.5 h-4 w-4 shrink-0 text-accent-violet" />
                      <p className="text-sm text-slate-300">
                        <span className="font-medium text-white">AI workflow — </span>
                        {job.ai}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
