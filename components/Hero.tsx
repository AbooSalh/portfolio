'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, Sparkles, Code2, Zap } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript } from 'react-icons/si';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Floating tech icons */}
        <motion.div
          className="absolute top-20 left-20"
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <FaReact className="w-12 h-12 text-cyan-400 opacity-20" />
        </motion.div>
        <motion.div
          className="absolute top-40 right-32"
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <SiNextdotjs className="w-10 h-10 text-white opacity-20" />
        </motion.div>
        <motion.div
          className="absolute bottom-40 left-40"
          animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 5.5, repeat: Infinity }}
        >
          <FaNodeJs className="w-14 h-14 text-green-400 opacity-20" />
        </motion.div>
        <motion.div
          className="absolute bottom-32 right-20"
          animate={{ y: [0, 15, 0], rotate: [0, -15, 0] }}
          transition={{ duration: 4.5, repeat: Infinity }}
        >
          <SiTypescript className="w-10 h-10 text-blue-400 opacity-20" />
        </motion.div>
        <motion.div
          className="absolute top-1/2 right-1/4"
          animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
        >
          <FaPython className="w-11 h-11 text-yellow-400 opacity-20" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Animated greeting */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30 mb-6"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300">Welcome to my portfolio</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
          >
            Ahmed Saleh
          </motion.h1>
          
          {/* Typing animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-3xl text-gray-300 mb-4 h-16 flex items-center justify-center"
          >
            <TypeAnimation
              sequence={[
                'Full Stack Developer 💻',
                2000,
                'Creative Problem Solver 🎨',
                2000,
                'UI/UX Enthusiast ✨',
                2000,
                'Open Source Contributor 🚀',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold"
            />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-md md:text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Building elegant solutions with modern technologies. 
            Passionate about creating exceptional digital experiences that make a difference.
          </motion.p>

          {/* Tech stack badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap gap-3 justify-center mb-8"
          >
            {[
              { icon: <Code2 className="w-4 h-4" />, text: 'Clean Code' },
              { icon: <Zap className="w-4 h-4" />, text: 'Fast Performance' },
              { icon: <Sparkles className="w-4 h-4" />, text: 'Modern Design' },
            ].map((badge, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10"
              >
                {badge.icon}
                <span className="text-sm text-gray-300">{badge.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex gap-4 justify-center mb-12"
          >
            <motion.a
              href="https://github.com/AbooSalh"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all relative group"
            >
              <Github className="w-6 h-6" />
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                GitHub
              </span>
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all relative group"
            >
              <Linkedin className="w-6 h-6" />
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                LinkedIn
              </span>
            </motion.a>
            <motion.a
              href="mailto:contact@example.com"
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all relative group"
            >
              <Mail className="w-6 h-6" />
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Email
              </span>
            </motion.a>
          </motion.div>

          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all relative overflow-hidden group"
          >
            <span className="relative z-10">Learn More</span>
            <ArrowDown className="w-4 h-4 relative z-10" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </motion.div>
    </section>
  );
};

export default Hero;
