'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiArrowDown, FiMail } from 'react-icons/fi';
import Image from 'next/image';
import { getAssetPath } from '../../lib/utils';
import { siteConfig } from '../../lib/config';

const roles = ['Senior Software Engineer', 'Senior UI/UX Developer', 'AI-Augmented Developer'];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-24 pb-16">
      {/* grid backdrop */}
      <div className="absolute inset-0 z-0 bg-grid" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center text-center"
      >
        {/* Availability pill */}
        <motion.div variants={item}>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-mono text-slate-300 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan" />
            </span>
            Available for new opportunities
          </span>
        </motion.div>

        {/* Profile */}
        <motion.div variants={item} className="mt-8">
          <div className="relative h-32 w-32 md:h-36 md:w-36 animate-float">
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-accent-cyan via-accent-blue to-accent-violet opacity-70 blur-md" />
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-accent-cyan via-accent-blue to-accent-violet animate-spin-slow" />
            <Image
              src={getAssetPath('/images/profile.jpg')}
              alt="Nico Cabral"
              fill
              className="relative rounded-full object-cover border-2 border-ink-950"
              priority
            />
          </div>
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-8 font-display text-4xl md:text-7xl font-bold tracking-tight text-white"
        >
          Nico Jay P. <span className="text-gradient-animate">Cabral</span>
        </motion.h1>

        {/* Rotating role badges */}
        <motion.div variants={item} className="mt-6 flex flex-wrap justify-center gap-2">
          {roles.map((role) => (
            <span
              key={role}
              className="rounded-full border border-accent-blue/30 bg-accent-blue/10 px-4 py-1.5 text-sm font-medium text-slate-100"
            >
              {role}
            </span>
          ))}
        </motion.div>

        <motion.p variants={item} className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-slate-400">
          7+ years building scalable web platforms and APIs with{' '}
          <span className="text-slate-200">React, Next.js, NestJS</span> and{' '}
          <span className="text-slate-200">AEM</span> — with AI woven into every step of the workflow.
          Delivered enterprise platforms across eCommerce, insurance, telecom, and pharma.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent-blue to-accent-violet px-7 py-3.5 font-medium text-white transition-all hover:shadow-glow-blue hover:scale-105"
          >
            View My Work
            <FiArrowDown className="transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href={`mailto:${siteConfig.author.email}`}
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-7 py-3.5 font-medium text-slate-200 backdrop-blur transition-all hover:border-accent-cyan/50 hover:text-white"
          >
            <FiMail />
            Get in Touch
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-10 flex items-center gap-5">
          <a
            href={siteConfig.author.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-2xl text-slate-500 transition-colors hover:text-white"
          >
            <FaGithub />
          </a>
          <a
            href={siteConfig.author.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-2xl text-slate-500 transition-colors hover:text-white"
          >
            <FaLinkedin />
          </a>
        </motion.div>
      </motion.div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-white transition-colors"
        aria-label="Scroll to about"
      >
        <FiArrowDown className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  );
}
