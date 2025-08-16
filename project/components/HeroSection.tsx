'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = ['Frontend Developer...', 'Next.js Developer...', 'React Developer...', 'Backend Developer...', 'Problem Solver...'];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    let index = 0;
    const timer = setInterval(() => {
      setDisplayText(currentTitle.slice(0, index));
      index++;
      if (index > currentTitle.length) {
        clearInterval(timer);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const floatingElements = [
    { size: 'w-20 h-20', position: 'top-20 left-10', delay: 0 },
    { size: 'w-32 h-32', position: 'top-40 right-20', delay: 1 },
    { size: 'w-16 h-16', position: 'bottom-32 left-20', delay: 2 },
    { size: 'w-24 h-24', position: 'bottom-20 right-10', delay: 3 },
  ];

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50 relative overflow-hidden">
      {/* Floating Background Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.size} ${element.position} rounded-full bg-gradient-to-r from-red-200/20 to-orange-200/20 blur-sm`}
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: element.delay,
          }}
        />
      ))}

      <div className="container mx-auto px-4 md:px-6 h-screen flex items-center justify-center relative z-10">
        <div className="text-center max-w-3xl md:max-w-4xl">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8"
          >
            {/* Professional Greeting */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-base md:text-lg lg:text-xl text-gray-600 font-light"
            >
              Greetings, I am
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 font-poppins"
            >
              Vamsi Rangumudri
            </motion.h1>

            {/* Animated Role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="h-12 md:h-16 flex items-center justify-center"
            >
              <span className="text-xl md:text-2xl lg:text-3xl text-red-600 font-medium">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl md:max-w-3xl mx-auto px-4 leading-relaxed"
            >
              Passionate about creating innovative digital solutions and turning ideas into reality through code.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 pt-4"
            >
              <motion.button
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/Vamsi.resume[1].pdf';
                  link.download = 'Vamsi_Rangumudri_Resume.pdf';
                  link.click();
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Download size={18} className="md:w-5 md:h-5" />
                Download Resume
              </motion.button>

              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-white text-gray-800 border-2 border-gray-200 rounded-xl font-medium shadow-lg hover:shadow-xl hover:border-red-200 transition-all duration-300"
              >
                <Github size={18} className="md:w-5 md:h-5" />
                View Projects
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="flex items-center justify-center space-x-4 md:space-x-6 pt-4"
            >
              {[
                { icon: Github, href: 'https://github.com/vamsipaul1/my-auth-app.git', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/vamsi-rangumudri', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:vamsi.rangumudri.dev@gmail.com', label: 'Email' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon 
                    size={18} 
                    className="md:w-5 md:h-5 text-gray-600 group-hover:text-red-600 transition-colors duration-300" 
                  />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2 text-gray-500 cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-xs md:text-sm">Scroll Down</span>
          <ChevronDown size={20} className="md:w-6 md:h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;