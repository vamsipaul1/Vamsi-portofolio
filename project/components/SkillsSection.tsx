'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: '⚛️',
      color: 'from-red-500 to-red-600',
      skills: [
        { name: 'React', icon: '⚛️' },
        { name: 'Next.js', icon: '▲' },
        { name: 'TypeScript', icon: '🔷' },
        { name: 'Tailwind CSS', icon: '🎨' },
        { name: 'Bootstrap', icon: '🅱️' },
        { name: 'Responsive Design', icon: '💚' }
      ]
    },
    {
      title: 'Backend Development',
      icon: '🟢',
      color: 'from-green-500 to-green-600',
      skills: [
        { name: 'Node.js', icon: '🟢' },
        { name: 'Express.js', icon: '🚀' },
        { name: 'Python', icon: '🐍' },
        { name: 'MongoDB', icon: '🍃' },
        { name: 'PostgreSQL', icon: '🐘' },
        { name: 'GraphQL', icon: '🎯' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: '☁️',
      color: 'from-blue-500 to-blue-600',
      skills: [
        { name: 'AWS', icon: '☁️' },
        { name: 'Render', icon: '💼' },
        { name: 'Git/GitHub', icon: '🐙' },
        { name: 'Vercel', icon: '◯' },
        { name: 'Netlify', icon: '🌐' },
        { name: 'CI/CD', icon: '🔄' }
      ]
    },
    {
      title: 'Tools & Others',
      icon: '🛠️',
      color: 'from-orange-500 to-orange-600',
      skills: [
        { name: 'VS Code', icon: '📝' },
        { name: 'PowerBI', icon: '📊' },
        { name: 'Postman', icon: '📮' },
        { name: 'Jest', icon: '🃏' },
        { name: 'Webpack', icon: '📦' },
        { name: 'ESLint', icon: '✅' }
      ]
    }
  ];

  const achievements = [
    { number: '5+', label: 'Projects Built', icon: '🚀' },
    { number: '10+', label: 'Technologies', icon: '💻' },
    { number: '3+', label: 'Years Coding', icon: '📅' },
    { number: '80%', label: 'Code Quality', icon: '⭐' }
  ];

  return (
    <section id="skills" className="py-16 md:py-20 bg-gradient-to-br from-white via-gray-50 to-red-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-24 left-12 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-r from-red-200/20 to-orange-200/20 rounded-full blur-xl floating-element" />
      <div className="absolute bottom-20 right-16 w-20 h-20 md:w-28 md:h-28 bg-gradient-to-r from-red-200/20 to-pink-200/20 rounded-full blur-xl floating-element-delayed" />
      
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6 font-poppins">
            Skills & Expertise
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            A comprehensive overview of my technical skills and proficiencies
          </p>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1, type: "spring" }}
              className="text-center bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100"
            >
              <div className="text-3xl md:text-4xl mb-2 md:mb-3">{achievement.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-red-600 mb-2 font-poppins">
                {achievement.number}
              </div>
              <div className="text-xs md:text-sm text-gray-600">{achievement.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r ${category.color} rounded-xl md:rounded-2xl flex items-center justify-center text-xl md:text-2xl`}>
                  {category.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">{category.title}</h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-200"
                  >
                    <span className="text-lg md:text-xl">{skill.icon}</span>
                    <span className="font-medium text-gray-700 text-sm md:text-base">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 md:mt-16 text-center"
        >
          <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">
              Additional Skills & Competencies 
            </h3>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {[
                'Agile Methodologies', 'RESTful APIs', 'Microservices', 'Test-Driven Development',
                'Performance Optimization', 'Web-Security Best Practices', 'Cross-browser Compatibility',
                'Mobile-First Design', 'SEO Optimization', 'Accessibility Standards'
              ].map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
                  className="px-3 md:px-4 py-1 md:py-2 bg-green-50 text-black-400 rounded-full text-xs md:text-sm font-medium border border-green-200"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;