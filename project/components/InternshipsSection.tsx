'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const InternshipsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const internships = [
    {
      id: 1,
      company: 'SmartInternz',
      role: 'Web Development intern',
      duration: 'May 2024 - July 2024',
      location: 'Virtual Internship',
      description: 'Developed responsive web applications using Javascript and React. Collaborated with team members to implement user interfaces and optimize performance.',
      achievements: [
        'Improved website loading speed by 40% through optimization', 
        'Understood the basics of React and Javascript and practical learning',
        'Built 5+ responsive web components used across multiple projects'
      ],
      logo: '🚀',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      company: 'Micro IT',
      role: 'Full Stack Developer Intern',
      duration: 'june 2025 - July 2025',
      location: 'Hybrid',
      description: 'Worked on both frontend and backend development using React, Node.js, and MongoDB. Participated in developing interfaces and code reviews.',
      achievements: [
        'Developed RESTful APIs serving 1000+ daily requests',
        'Implemented user authentication and authorization systems',
        'Participated in daily standups and code solving'
      ],
      logo: '💡',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 3,
      company: 'Ongoing Internship',
      role: 'Android Developer',
      duration: 'Aug 2025 - Present',
      location: 'Virtual Internship',
      description: 'Currently working on Android development projects, learning mobile app development best practices and modern Android development tools.',
      logo: '⭐',
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section id="internships" className="py-16 md:py-20 bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-16 left-8 w-20 h-20 md:w-28 md:h-28 bg-gradient-to-r from-pink-200/30 to-rose-200/30 rounded-full blur-xl floating-element" />
      <div className="absolute bottom-24 right-12 w-24 h-24 md:w-36 md:h-36 bg-gradient-to-r from-purple-200/30 to-indigo-200/30 rounded-full blur-xl floating-element-delayed" />
      
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4 md:mb-6 font-poppins">
            Professional Experience
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            My journey through internships and professional growth
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 lg:left-1/2 transform lg:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 rounded-full"></div>

          <div className="space-y-8 md:space-y-12">
            {internships.map((internship, index) => (
              <motion.div
                key={internship.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:space-x-0`}
              >
                {/* Timeline node */}
                <div className={`absolute left-6 md:left-8 lg:left-1/2 transform lg:-translate-x-1/2 z-10 w-5 h-5 md:w-6 md:h-6 bg-gradient-to-r ${internship.color} rounded-full border-4 border-white shadow-lg`}></div>

                {/* Content card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`w-full lg:w-5/12 ${
                    index % 2 === 0 ? 'lg:mr-auto lg:ml-0 ml-12 md:ml-16' : 'lg:ml-auto lg:mr-0 ml-12 md:ml-16'
                  } glassmorphism rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300`}
                >
                  {/* Company logo and header */}
                  <div className="flex items-center space-x-3 md:space-x-4 mb-4 md:mb-6">
                    <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r ${internship.color} rounded-xl md:rounded-2xl flex items-center justify-center text-xl md:text-2xl shadow-lg`}>
                      {internship.logo}
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-800">{internship.company}</h3>
                      <p className="text-base md:text-lg font-semibold text-gray-700">{internship.role}</p>
                    </div>
                  </div>

                  {/* Duration and location */}
                  <div className="flex flex-wrap gap-3 md:gap-4 mb-4 text-xs md:text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Calendar size={14} className="md:w-4 md:h-4" />
                      <span>{internship.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin size={14} className="md:w-4 md:h-4" />
                      <span>{internship.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 leading-relaxed">
                    {internship.description}
                  </p>

                  {/* Achievements - Only show for internships with achievements */}
                  {internship.achievements && internship.achievements.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-800 flex items-center text-sm md:text-base">
                        <ArrowRight size={14} className="mr-2 text-blue-600 md:w-4 md:h-4" />
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2 ml-4 md:ml-6">
                        {internship.achievements.map((achievement, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.4, delay: index * 0.2 + idx * 0.1 }}
                            className="text-gray-600 text-xs md:text-sm flex items-start"
                          >
                            <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div> 

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block lg:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipsSection;