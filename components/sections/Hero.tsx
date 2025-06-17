'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 relative overflow-hidden">
      {/* Animated background dots */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
      </div>
      
      <motion.div 
        className="z-10 text-center flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Profile Image */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.8 }}
        >
          <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto">
            <Image
              src="/images/profile.jpg"
              alt="Nico Cabral"
              fill
              className="rounded-full object-cover border-4 border-blue-500 shadow-lg shadow-blue-500/30"
              priority
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-teal-400/20"></div>
          </div>
        </motion.div>

        <motion.h1 
          className="text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Nico Cabral
        </motion.h1>
        
        <motion.h2 
          className="text-xl md:text-3xl font-bold mb-6 text-gray-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Developer Lead
        </motion.h2>
        
        <motion.p 
          className="text-md md:text-lg text-gray-300 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          7+ years building scalable web applications & APIs with React, Next.js, and Node.js.
          Specialized in delivering exceptional digital experiences across eCommerce, insurance, and telecom.
        </motion.p>
        
        <motion.div
          className="flex gap-6 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <a href="#contact" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/30">
            Get in Touch
          </a>
          <a href="#projects" className="px-8 py-3 bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-900/20 font-medium rounded-lg transition-all transform hover:scale-105">
            See My Work
          </a>
        </motion.div>
        
        <motion.div 
          className="mt-12 flex gap-6 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          <a href="https://github.com/nicocabral" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-white transition-colors">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/nicocabral" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-white transition-colors">
            <FaLinkedin />
          </a>
        </motion.div>
      </motion.div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}