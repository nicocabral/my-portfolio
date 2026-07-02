'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export default function SectionHeading({
  eyebrow,
  title,
  accent,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  subtitle?: ReactNode;
}) {
  return (
    <motion.div
      className="mb-14 flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <span className="eyebrow">
        <span className="h-px w-6 bg-accent-cyan/60" />
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold tracking-tight text-white">
        {title} {accent && <span className="text-gradient">{accent}</span>}
      </h2>
      {subtitle && <p className="mt-4 max-w-2xl text-slate-400">{subtitle}</p>}
    </motion.div>
  );
}
