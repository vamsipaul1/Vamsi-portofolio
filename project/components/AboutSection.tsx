'use client';

import { motion } from 'framer-motion';
import { Code2, Heart, Lightbulb, Target } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { number: '3+', label: 'Years Experience' },
    { number: '20+', label: 'Technologies' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  const values = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code is my passion.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Always exploring new technologies and creative solutions.'
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Focused on delivering results that exceed expectations.'
    },
    {
      icon: Heart,
      title: 'User-Centric',
      description: 'Creating experiences that users love and find intuitive.'
    }
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-12 bg-gradient-to-br from-white via-gray-50 to-red-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-r from-red-200/20 to-orange-200/20 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-28 h-28 md:w-40 md:h-40 bg-gradient-to-r from-red-200/20 to-pink-200/20 rounded-full blur-xl" />
      
      <div className="container flex flex-col justify-center items-center px-0 mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6 font-poppins">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Passionate developer with a love for creating digital experiences that make a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-0 items-center justify-center px-0 mx-0">
          {/* Profile Image and Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-center"
          >
            {/* Profile Image */}
            <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-[22rem] lg:h-[22rem] mx-auto">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 800 }}
                className="w-full h-full rounded-3xl bg-gradient-to-br from-red-500 to-red-700 p-2"
              >
                <div className="w-full h-full rounded-2xl bg-gray-200 overflow-hidden">
                  {/* Real Profile Image */}
                  <img 
                    src="/My profile photo -portofolio.jpg"
                    alt="My Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4 md:space-y-6 pr-0 md:pr-8 lg:pr-12 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            {/* Bio */}
            <div className="space-y-4 md:space-y-6">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Hi, I'm Vamsi, a senior undergraduate in Computer Science and Engineering at BITS Vizag.
                I'm passionate about web development and love working on projects that push the limits of technology.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                My journey in web development began during college, where I found my passion for 
                turning ideas into products. I specialize in React, 
                Next.js, and modern web technologies, always staying current with industry trends.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.
                I'm excited to learn more and connect with others in the tech community.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Feature Cards Below - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 md:mt-16"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-4 md:p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="text-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <value.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-2">{value.title}</h3>
                  <p className="text-xs md:text-sm text-gray-600 leading-tight">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;