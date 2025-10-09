'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Star, GitFork, Eye } from 'lucide-react';
import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiMongodb } from 'react-icons/si';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform built with Next.js, featuring real-time inventory, secure payments, and an admin dashboard.',
      tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind'],
      icons: [SiNextdotjs, SiTypescript, SiTailwindcss],
      github: 'https://github.com/AbooSalh',
      demo: '#',
      gradient: 'from-purple-500 to-pink-500',
      stats: { stars: 124, forks: 32, watchers: 15 },
      image: '🛒',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, team collaboration features, and analytics.',
      tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      icons: [SiReact, SiNodedotjs, SiMongodb],
      github: 'https://github.com/AbooSalh',
      demo: '#',
      gradient: 'from-blue-500 to-cyan-500',
      stats: { stars: 89, forks: 21, watchers: 12 },
      image: '📋',
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, animated portfolio website with smooth transitions and responsive design.',
      tags: ['Next.js', 'Framer Motion', 'Tailwind'],
      icons: [SiNextdotjs, SiTailwindcss],
      github: 'https://github.com/AbooSalh/portfolio',
      demo: '#',
      gradient: 'from-green-500 to-emerald-500',
      stats: { stars: 156, forks: 45, watchers: 23 },
      image: '🎨',
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather dashboard with interactive maps, forecasts, and location-based weather alerts.',
      tags: ['React', 'API Integration', 'Charts'],
      icons: [SiReact, SiTypescript],
      github: 'https://github.com/AbooSalh',
      demo: '#',
      gradient: 'from-orange-500 to-red-500',
      stats: { stars: 67, forks: 18, watchers: 9 },
      image: '🌤️',
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-slate-800 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30">
              <Github className="w-5 h-5 text-purple-400" />
              <span className="text-purple-300">My Work</span>
            </div>
          </motion.div>
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and side projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden group relative"
            >
              {/* Animated gradient border on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
              
              {/* Top gradient bar */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              
              {/* Project Icon/Emoji */}
              <div className="absolute top-6 right-6 text-6xl opacity-10 group-hover:opacity-20 transition-opacity">
                {project.image}
              </div>
              
              <div className="p-6 relative">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  {/* Tech icons */}
                  <div className="flex gap-2">
                    {project.icons.map((Icon, iconIndex) => (
                      <motion.div
                        key={iconIndex}
                        whileHover={{ scale: 1.3, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="w-6 h-6 text-gray-400 hover:text-purple-400" />
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Stats */}
                <div className="flex gap-4 mb-4 text-sm text-gray-400">
                  <motion.div 
                    className="flex items-center gap-1"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>{project.stats.stars}</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-1"
                    whileHover={{ scale: 1.1 }}
                  >
                    <GitFork className="w-4 h-4 text-blue-400" />
                    <span>{project.stats.forks}</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-1"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Eye className="w-4 h-4 text-green-400" />
                    <span>{project.stats.watchers}</span>
                  </motion.div>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.1 + tagIndex * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-purple-500/50 text-gray-300 hover:text-purple-400 transition-all"
                  >
                    <Github className="w-5 h-5" />
                    <span className="font-medium">Code</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} rounded-lg text-white font-medium hover:shadow-lg transition-all`}
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/AbooSalh"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
          >
            <Github className="w-5 h-5" />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
