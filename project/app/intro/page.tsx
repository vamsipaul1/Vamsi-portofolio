'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const IntroPage = () => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [countdown, setCountdown] = useState(6);

  // Auto-redirect after 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          router.push('/main');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  const handleEnterJourney = () => {
    router.push('/main');
  };

  const floatingElements = [
    { size: 'w-16 h-16', position: 'top-20 left-20', delay: 0, color: 'from-red-400/20 to-orange-400/20' },
    { size: 'w-24 h-24', position: 'top-40 right-32', delay: 1, color: 'from-red-300/20 to-pink-300/20' },
    { size: 'w-20 h-20', position: 'bottom-40 left-32', delay: 2, color: 'from-orange-300/20 to-yellow-300/20' },
    { size: 'w-28 h-28', position: 'bottom-20 right-20', delay: 3, color: 'from-pink-300/20 to-red-300/20' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Floating Background Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.size} ${element.position} rounded-full bg-gradient-to-r ${element.color} blur-xl`}
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: element.delay,
          }}
        />
      ))}

      {/* AMD Logo */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-8 left-8 z-20"
      >
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 16 16">
              <path d="m.334 0 4.358 4.359h7.15v7.15l4.358 4.358V0zM.2 9.72l4.487-4.488v6.281h6.28L6.48 16H.2z"/>
            </svg>
          </div>
          <span className="text-2xl font-bold text-white">VickyVerse</span>
        </div>
      </motion.div>

      {/* Main Content */}
             <div className="container mx-auto px-4 sm:px-6 h-screen flex items-center justify-center relative z-10">
         <div className="text-center max-w-5xl px-2">
                     {/* Welcome Text */}
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, delay: 0.8 }}
             className="mb-8"
           >
             <motion.div
               animate={{ rotate: [0, 5, -5, 0] }}
               transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
               className="inline-block mb-4"
             >
               <Sparkles className="w-12 h-12 text-red-400 mx-auto" />
             </motion.div>
             <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-poppins">
               Welcome to My World
             </h1>
             
                                         {/* Welcome Message */}
               <motion.div
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 1, delay: 1 }}
                 className="mb-8"
               >
            
               </motion.div>
           </motion.div>

          {/* Name Display */}
        
    

          {/* Professional Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="mb-12"
          >
            
          </motion.div>

          {/* Countdown Display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="mb-6"
          >
            <div className="text-center">
              <p className="text-gray-400 text-lg mb-2">
                Auto-redirecting in <span className="text-red-400 font-bold">{countdown}</span> seconds
              </p>
              <div className="w-48 h-1 bg-gray-700 rounded-full mx-auto overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full"
                  initial={{ width: "100%" }}
                  animate={{ width: "0%" }}
                  transition={{ duration: 6, ease: "linear" }}
                />
              </div>
            </div>
          </motion.div>

          {/* Journey Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="mb-16"
          >
            <motion.button
              onClick={handleEnterJourney}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
                             className="group relative inline-flex items-center justify-center px-8 sm:px-12 py-4 sm:py-6 bg-gradient-to-r from-red-600 to-red-700 text-white text-lg sm:text-xl font-bold rounded-full shadow-2xl hover:shadow-red-500/25 transition-all duration-500 overflow-hidden"
            >
              {/* Button Background Animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600"
                animate={{
                  background: isHovered 
                    ? "linear-gradient(45deg, #dc2626, #b91c1c, #dc2626)"
                    : "linear-gradient(45deg, #dc2626, #b91c1c)"
                }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Button Content */}
              <div className="relative z-10 flex items-center gap-3">
                <span>Step into my journey</span>
                <motion.div
                  animate={{ x: isHovered ? 5 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight size={24} />
                </motion.div>
              </div>

              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-full blur-xl bg-red-500/30"
                animate={{
                  scale: isHovered ? 1.2 : 1,
                  opacity: isHovered ? 0.8 : 0.4,
                }}
                transition={{ duration: 0.5 }}
              />
            </motion.button>
          </motion.div>

          {/* Subtle Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
            className="text-gray-500 text-sm"
          >
           
          </motion.div>
        </div>
      </div>

      {/* Particle Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-400 rounded-full"
            initial={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default IntroPage;
