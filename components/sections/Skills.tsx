'use client';

import { motion } from 'framer-motion';
import { skillsData } from '../../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Technical <span className="text-blue-500">Skills</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillsData.map((category, idx) => (
            <motion.div 
              key={idx}
              className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-blue-500/40 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-blue-400">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    className="px-4 py-2 bg-gray-700/50 rounded-lg hover:bg-blue-900/30 transition-all text-sm text-gray-100 flex items-center gap-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + (index * 0.05) }}
                  >
                    {/* You can add icons here if you want */}
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
          
          <motion.div 
            className="md:col-span-2 bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-xl p-8 border border-blue-800/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-blue-300">AI Integration Experience</h3>
            <p className="text-gray-300 leading-relaxed">
              I've leveraged AI-assisted coding tools and prompt-based automation to accelerate development, reduce repetitive tasks, 
              and improve overall productivity in feature delivery. By integrating AI into my workflow, I've been able to enhance 
              code quality, streamline project delivery, and focus more on creative problem-solving aspects of development.
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <RatingCard title="React/Next.js" rating={8} />
          <RatingCard title="Node.js" rating={7} />
          <RatingCard title="AWS" rating={6} />
          <RatingCard title="SQL" rating={7} />
        </motion.div>
      </div>
    </section>
  );
}

function RatingCard({ title, rating }: { title: string, rating: number }) {
  return (
    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 hover:border-blue-500/40 transition-all">
      <h4 className="text-lg font-medium text-gray-200 mb-2">{title}</h4>
      <div className="flex gap-1">
        {[...Array(10)].map((_, idx) => (
          <div 
            key={idx} 
            className={`h-1.5 rounded-full ${idx < rating ? 'bg-blue-500' : 'bg-gray-700'}`}
            style={{ width: '10%' }}
          ></div>
        ))}
      </div>
      <div className="text-right mt-1 text-sm text-blue-400 font-semibold">{rating}/10</div>
    </div>
  );
}