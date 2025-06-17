'use client';

import { motion } from 'framer-motion';
import { experienceData } from '../../data/experience';


export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Professional <span className="text-blue-500">Experience</span>
        </motion.h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-600/50"></div>
          
          {experienceData.map((job, index) => (
            <motion.div 
              key={index}
              className={`mb-12 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="md:w-1/2 relative">
                <div 
                  className={`
                    bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-blue-500/50 transition-all
                    mx-6 md:mx-8 mb-6 md:mb-0
                    ${index % 2 === 0 ? 'md:mr-0' : 'md:ml-0'}
                  `}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-blue-400">{job.title}</h3>
                      <h4 className="text-lg text-gray-300">{job.company}</h4>
                    </div>
                    <span className="text-sm px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full">
                      {job.period}
                    </span>
                  </div>
                  
                  {job.techStack && (
                    <div className="mb-4">
                      <p className="text-sm text-gray-400 mb-1">Tech Stack:</p>
                      <div className="flex flex-wrap gap-2">
                        {job.techStack.split(', ').map((tech, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 bg-gray-700 rounded-md text-gray-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {job.responsibilities.map((item, idx) => (
                      <li key={idx} className="text-sm">{item}</li>
                    ))}
                  </ul>
                </div>
                
                {/* Timeline dot */}
                <div className={`absolute top-6 ${index % 2 === 0 ? 'md:right-0' : 'md:left-0'} transform translate-x-1/2 md:translate-y-0 -translate-y-1/2 w-5 h-5 rounded-full bg-blue-600 border-4 border-gray-900 z-10`}></div>
              </div>
              <div className="md:w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}