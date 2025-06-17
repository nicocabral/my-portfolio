'use client';

import { useState } from 'react';
import Link from 'next/link';
import { navItems } from '../../lib/config';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Filter out contact from navItems since it's handled separately
  const mainNavItems = navItems.filter(item => item.href !== '#contact');

  return (
    <header className="fixed w-full top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-white">
          Nico<span className="text-blue-500">Cabral</span>
        </Link>
          {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {mainNavItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all"
          >
            Contact
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="block md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
          {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-md border-b border-gray-800 md:hidden">
            <div className="flex flex-col p-6 space-y-4">
              {mainNavItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
