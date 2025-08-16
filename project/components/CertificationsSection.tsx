'use client';

import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, CheckCircle } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const certifications = [
    {
      id: 1,
      title: 'Deloitte Certified Virtual program',
      issuer: 'Deloitte',
      date: 'June 2025',
      credentialId: 'ouX4BZmYrnE8iq6hP',
      description: 'I have completed the Deloitte Certified Virtual program in June 2025. I gained knowledge in the field of workflow and how industries are working in the environment of Software Development.',
      logo: '💼',
      color: 'from-orange-500 to-yellow-500',
      skills: ['Python', 'Data Structures', 'Software Development'],
      verifyUrl: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_FtQbRMWM9WNupzmGK_1751192112046_completion_certificate.pdf'
    },
    {
      id: 2,
      title: 'Web Development with HTML5, CSS3, and JavaScript',
      issuer: 'edX',
      date: 'Aug 2024',
      credentialId: '5b87de7794c547229339a133798c08f1',
      description: 'Certified to design, build, and deploy applications on Google Cloud Platform.',
      logo: '🌐',
      color: 'from-blue-500 to-green-500',
      skills: ['Javscript','HTML5', 'CSS3'],
      verifyUrl: 'https://courses.edx.org/certificates/5b87de7794c547229339a133798c08f1'
    },
    {
      id: 3,
      title: 'Office Master Certification on PowerBI',
      issuer: 'Office Master',
      date: 'July 2024',
      credentialId: '',
      description: 'Comprehensive certification covering React, React Native, and modern frontend development.',
      logo: '',
      color: 'from-blue-400 to-cyan-400',
      skills: ['Microsoft Power BI', 'Data Visualization', 'Data Analysis', 'Dahboard Design'],
      verifyUrl: 'https://media.licdn.com/dms/document/media/v2/D562DAQGXsAfWiOnLvA/profile-treasury-document-pdf-analyzed/B56Ze7kffkHoAc-/0/1751198597339?e=1756339200&v=beta&t=cj0mTTpDJqolNv60rnI9TV3R8ARSXyfkh4_khAOqGmk'
    },
    {
      id: 4,
      title: 'Certificate for devops on aws: Code Build and Test',
      issuer: 'Microsoft',
      date: 'September 2023',
      credentialId: '',
      description: 'Foundation knowledge of cloud concepts and core Azure services.',
      logo: '🔷',
      color: 'from-blue-600 to-indigo-600',
      skills: ['Azure Services', 'Cloud Computing', 'Security', 'Pricing'],
      verifyUrl: 'https://courses.edx.org/certificates/3eedb12b7d7d424bb989217094955e8d'
    },
    {
      id: 5,
      title: 'Career Essentials in Software Development by Microsoft and LinkedIn',
      issuer: 'Microsoft and LinkedIn',
      date: 'February 2024',
      credentialId: '5a4a7d7f1d44c1a49b41a301c2ea3f6a6d74c396f3beef68358bb98895655ca5',
      description: 'Learned the basics of Software development, and administration.',
      logo: '🍃',
      color: 'from-green-500 to-teal-500',
      skills: ['Software Development', 'Data Structures', 'Algorithms', 'Problem Solving'],
      verifyUrl: 'https://www.linkedin.com/learning/certificates/5a4a7d7f1d44c1a49b41a301c2ea3f6a6d74c396f3beef68358bb98895655ca5'
    },
    {
      id: 6,
      title: 'Python Programming',
      issuer: 'BitLabs',
      date: '',
      credentialId: 'gROb7za4MV',
      description: 'Professional-level knowledge of python containerization and orchestration.',
      logo: '🐳',
      color: 'from-blue-500 to-blue-700',
      skills: ['Python'],
      verifyUrl: 'https://media.licdn.com/dms/document/media/v2/D562DAQGd_3zLxRtA5A/profile-treasury-document-pdf-analyzed/B56Ze7ffpxHEAg-/0/1751197290916?e=1756339200&v=beta&t=wRdR-arYrbIZQvADSKSyIuDDM_vVoG8mXWZ8eZnRmH0'
    },
    {
      id: 7,
      title: 'Full Stack Web Development',
      issuer: 'Udemy',
      date: 'Jan 2025 - present ',
      description: 'Comprehensive full-stack development certification covering frontend, backend, and database technologies.',
      logo: '🎓',
      color: 'from-purple-500 to-pink-500',
      skills: ['HTML/CSS', 'JavaScript', 'Node.js', 'React', 'MongoDB'],
      verifyUrl: 'https://www.coursera.org/account/accomplishments/verify'
    }
  ];

  const stats = [
    { number: '7+', label: 'Certifications' },
    { number: '4', label: 'Cloud Platforms' },
    { number: '20+', label: 'Verified Skills' },
    { number: '100%', label: 'Up to Date' }
  ];

  return (
    <section id="certifications" className="py-16 md:py-20 bg-gradient-to-br from-white via-gray-50 to-red-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-16 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-r from-red-200/20 to-orange-200/20 rounded-full blur-xl floating-element" />
      <div className="absolute bottom-28 left-20 w-20 h-20 md:w-28 md:h-28 bg-gradient-to-r from-red-200/20 to-pink-200/20 rounded-full blur-xl floating-element-delayed" />
      
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6 font-poppins">
            Certifications & Achievements
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Professional certifications that validate my expertise and commitment to excellence
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1, type: "spring" }}
              className="text-center bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100"
            >
              <div className="text-2xl md:text-3xl font-bold text-red-600 mb-2 font-poppins">
                {stat.number}
              </div>
              <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Header with logo and badge */}
              <div className={`h-20 md:h-24 bg-gradient-to-r ${cert.color} relative flex items-center justify-center`}>
                <div className="text-3xl md:text-4xl">{cert.logo}</div>
                <div className="absolute top-2 md:top-3 right-2 md:right-3">
                  <CheckCircle className="text-white md:w-5 md:h-5" size={16} />
                </div>
              </div>

              {/* Content */}
              <div className="p-4 md:p-6 space-y-3 md:space-y-4">
                <div className="space-y-2">
                  <h3 className="text-base md:text-lg font-bold text-gray-800 group-hover:text-red-600 transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 font-medium">{cert.issuer}</p>
                </div>

                {/* Date and credential */}
                <div className="flex items-center justify-between text-xs md:text-sm text-gray-500">
                  <div className="flex items-center space-x-1 md:space-x-2">
                    <Calendar size={12} className="md:w-4 md:h-4" />
                    <span>{cert.date}</span>
                  </div>
                  <div className="flex items-center space-x-1 md:space-x-2">
                    <Award size={12} className="md:w-4 md:h-4" />
                    <span>Verified</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="space-y-2">
                  <h4 className="text-xs md:text-sm font-semibold text-gray-700">Skills Covered:</h4>
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {cert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Credential ID */}
                <div className="pt-2 border-t border-gray-100">
                  <p className="text-xs text-gray-500">
                    Credential ID: {cert.credentialId}
                  </p>
                </div>

                {/* Verify button */}
                <motion.a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 w-full mt-3 md:mt-4 py-2 md:py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 text-sm md:text-base"
                >
                  <ExternalLink size={14} className="md:w-4 md:h-4" />
                  Verify Certificate
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;