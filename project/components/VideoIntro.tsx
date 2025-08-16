'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const VideoIntro = () => {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      const video = videoRef.current;
      if (video) {
        video.currentTime = 0;
        video.play();
        const timer = setTimeout(() => {
          router.push('/intro');
        }, 5000);
        return () => clearTimeout(timer);
      }
    }
  }, [router, isPlaying]);

  const handlePlay = () => {
    setIsPlaying(true);
    const video = videoRef.current;
    if (video) {
      video.play();
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Video takes full screen */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        playsInline
        controls={false}
      >
        <source src="/Anime_Coding_Environment_Video_Generation.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Play button overlay */}
      {!isPlaying && (
        <button
          onClick={handlePlay}
          className="absolute inset-0 z-20 flex items-center justify-center w-full h-full bg-black bg-opacity-50 text-white text-3xl font-bold focus:outline-none"
        >
          ▶ On
        </button>
      )}
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30" />
      {/* Content overlay */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center max-w-4xl px-4">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-8"
          >
          </motion.div>
          {/* Loading text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="text-gray-200 text-lg mb-8"
          >
          </motion.div>
          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
            className="mt-4"
          >
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default VideoIntro;
