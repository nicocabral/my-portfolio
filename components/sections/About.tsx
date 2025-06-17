'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About <span className="text-blue-500">Me</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] rounded-xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-xl z-10"></div>
            
            {/* Replace with your actual image */}
            <div className="relative h-full w-full grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105">
              <div className="absolute inset-0 bg-blue-900/30 group-hover:opacity-0 transition-opacity z-10"></div>
              <Image 
                src="/images/avatar.jpg" 
                alt="Nico Cabral" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">Developer Lead & Full Stack Engineer</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a passionate developer lead with 7 years of experience building scalable web applications 
              and APIs. I specialize in React, Next.js, Node.js, and Adobe Experience Manager, delivering 
              complex solutions across various industries including eCommerce, insurance, telecom, and pharmaceuticals.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              My expertise lies in designing scalable solutions, leading cross-functional teams, and 
              integrating AI-powered tools to optimize workflows and development processes. I'm committed 
              to creating high-performing applications with exceptional user experiences.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                <h4 className="font-semibold mb-1 text-blue-400">7+</h4>
                <p className="text-gray-400 text-sm">Years of Experience</p>
              </div>
              <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                <h4 className="font-semibold mb-1 text-blue-400">20+</h4>
                <p className="text-gray-400 text-sm">Projects Completed</p>
              </div>
              <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                <h4 className="font-semibold mb-1 text-blue-400">5+</h4>
                <p className="text-gray-400 text-sm">Industries</p>
              </div>
              <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                <h4 className="font-semibold mb-1 text-blue-400">10+</h4>
                <p className="text-gray-400 text-sm">Technologies</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}