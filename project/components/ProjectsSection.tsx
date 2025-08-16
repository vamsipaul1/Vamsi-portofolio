'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, X } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and Stripe integration.',
      longDescription: 'A comprehensive e-commerce platform featuring user authentication, product catalog, shopping cart, payment processing, and admin dashboard. Built with React for the frontend, Node.js/Express for the backend, MongoDB for data storage, and Stripe for secure payments.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Express'],
      githubUrl: '#',
      liveUrl: '#',
      category: 'Full Stack'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates.',
      longDescription: 'A modern task management application that enables teams to collaborate effectively. Features include real-time updates, drag-and-drop task organization, team invitations, progress tracking, and notification system. Built with Next.js, Prisma, and Supabase.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'Supabase', 'Tailwind'],
      githubUrl: '#',
      liveUrl: '#',
      category: 'Web App'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard with location-based forecasts.',
      longDescription: 'An intuitive weather dashboard that provides detailed weather information based on user location or searched cities. Features include 7-day forecasts, weather maps, historical data, and customizable widgets. Integrates with multiple weather APIs for accurate data.',
      image: 'https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Chart.js', 'Weather API', 'CSS Grid'],
      githubUrl: '#',
      liveUrl: '#',
      category: 'Frontend'
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      description: 'Still being developed.....',
      longDescription: 'A comprehensive analytics platform for social media managers to track performance across multiple platforms. Features include engagement metrics, audience insights, post scheduling, competitor analysis, and automated reporting with beautiful visualizations.',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
      githubUrl: '#',
      liveUrl: '#',
      category: 'Analytics'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website with smooth animations.',
      longDescription: 'A sleek and modern portfolio website showcasing projects, skills, and experience. Features smooth animations, responsive design, contact forms, blog integration, and optimized performance. Built with attention to detail and user experience.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'MDX'],
      githubUrl: '#',
      liveUrl: '#',
      category: 'Portfolio'
    },
    {
      id: 6,
      title: 'Booking System',
      description: 'Still being developed.....',
      longDescription: 'A full-featured booking system for service-based businesses. Includes calendar management, automated notifications, payment processing, customer management, and reporting features. Designed for scalability and easy customization.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Express', 'MySQL', 'Socket.io', 'Stripe'],
      githubUrl: '#',
      liveUrl: '#',
      category: 'Full Stack'
    }
  ];
  

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-16 md:py-20 bg-gradient-to-br from-white via-gray-50 to-red-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-20 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-red-200/20 to-orange-200/20 rounded-full blur-xl floating-element" />
      <div className="absolute bottom-32 left-16 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-r from-red-200/20 to-pink-200/20 rounded-full blur-xl floating-element-delayed" />
      
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6 font-poppins">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            A showcase of my recent work and creative solutions
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-medium transition-all duration-300 text-sm md:text-base ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:shadow-md border border-gray-200'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-40 md:h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Action Buttons */}
                <div className="absolute top-3 md:top-4 right-3 md:right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedProject(project)}
                    className="p-1.5 md:p-2 bg-white/90 rounded-full text-gray-700 hover:bg-white transition-colors duration-200"
                  >
                    <Eye size={14} className="md:w-4 md:h-4" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-1.5 md:p-2 bg-white/90 rounded-full text-gray-700 hover:bg-white transition-colors duration-200"
                  >
                    <Github size={14} className="md:w-4 md:h-4" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-1.5 md:p-2 bg-white/90 rounded-full text-gray-700 hover:bg-white transition-colors duration-200"
                  >
                    <ExternalLink size={14} className="md:w-4 md:h-4" />
                  </motion.button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-4 md:p-6 space-y-3 md:space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2 md:px-3 py-1 md:py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs md:text-sm rounded-full font-medium">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl md:rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-48 md:h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-3 md:top-4 right-3 md:right-4 p-1.5 md:p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                >
                  <X size={18} className="md:w-5 md:h-5" />
                </button>
              </div>
              
              <div className="p-6 md:p-8 space-y-4 md:space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800">{selectedProject.title}</h3>
                  <span className="px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full font-medium text-sm md:text-base">
                    {selectedProject.category}
                  </span>
                </div>
                
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  {selectedProject.longDescription}
                </p>

                <div className="flex flex-wrap gap-2 md:gap-3">
                  {selectedProject.technologies.map((tech: string) => (
                    <span
                      key={tech}
                      className="px-3 md:px-4 py-1.5 md:py-2 bg-gray-100 text-gray-700 rounded-lg font-medium text-sm md:text-base"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
                  <motion.a
                    href={selectedProject.liveUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 md:px-6 py-2.5 md:py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 text-sm md:text-base"
                  >
                    <ExternalLink size={16} className="md:w-5 md:h-5" />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={selectedProject.githubUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 px-4 md:px-6 py-2.5 md:py-3 rounded-full font-medium hover:border-gray-500 transition-all duration-300 text-sm md:text-base"
                  >
                    <Github size={16} className="md:w-5 md:h-5" />
                    Source Code
                  </motion.a>
                  
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
      {/* Add this at the end of the section */}
      <div className="text-center mt-8">
        <p className="text-lg font-semibold text-gray-600">
          🚀 New projects coming soon .....🙂
        </p>
      </div>
    </section>
  );
};

export default ProjectsSection;