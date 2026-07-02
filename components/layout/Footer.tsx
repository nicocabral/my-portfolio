import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { siteConfig, navItems } from '../../lib/config';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-ink-950/60 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <a href="#" className="flex items-center gap-2 font-display text-lg font-bold text-white">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-accent-cyan to-accent-violet text-sm text-ink-950">
                NC
              </span>
              Nico<span className="text-gradient">Cabral</span>
            </a>
            <p className="mt-3 max-w-sm text-sm text-slate-500">
              Senior Software Engineer & UI/UX Developer — building AI-augmented, enterprise-grade web
              platforms.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-400 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-3">
            <a
              href={siteConfig.author.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-slate-400 transition-all hover:border-accent-cyan/50 hover:text-white"
            >
              <FiGithub />
            </a>
            <a
              href={siteConfig.author.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-slate-400 transition-all hover:border-accent-cyan/50 hover:text-white"
            >
              <FiLinkedin />
            </a>
            <a
              href={`mailto:${siteConfig.author.email}`}
              aria-label="Email"
              className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-slate-400 transition-all hover:border-accent-cyan/50 hover:text-white"
            >
              <FiMail />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5 pt-6">
          <p className="text-sm text-slate-500">© {year} Nico Jay P. Cabral. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <p className="text-xs text-slate-600">Built with Next.js, Tailwind CSS & Framer Motion</p>
            <a
              href="#"
              aria-label="Back to top"
              className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-slate-400 transition-all hover:border-accent-cyan/50 hover:text-white"
            >
              <FiArrowUp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
