'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

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
      github: 'https://github.com/AbooSalh',
      demo: '#',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, team collaboration features, and analytics.',
      tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      github: 'https://github.com/AbooSalh',
      demo: '#',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, animated portfolio website with smooth transitions and responsive design.',
      tags: ['Next.js', 'Framer Motion', 'Tailwind'],
      github: 'https://github.com/AbooSalh/portfolio',
      demo: '#',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather dashboard with interactive maps, forecasts, and location-based weather alerts.',
      tags: ['React', 'API Integration', 'Charts'],
      github: 'https://github.com/AbooSalh',
      demo: '#',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
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
              className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden group"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
