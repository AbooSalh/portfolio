'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Palette, Rocket, Users } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code following best practices',
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Crafting beautiful and intuitive user interfaces',
    },
    {
      icon: Rocket,
      title: 'Fast Performance',
      description: 'Optimizing applications for speed and efficiency',
    },
    {
      icon: Users,
      title: 'User-Centric',
      description: 'Focusing on exceptional user experience',
    },
  ];

  return (
    <section id="about" className="min-h-screen py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm a passionate developer dedicated to creating innovative solutions 
            that make a difference. With expertise in modern web technologies, 
            I bring ideas to life through code.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all"
            >
              <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-8 rounded-2xl border border-purple-500/20"
        >
          <h3 className="text-2xl font-bold mb-4 text-white">My Journey</h3>
          <p className="text-gray-300 leading-relaxed">
            My journey in software development has been driven by curiosity and a passion 
            for solving complex problems. I constantly explore new technologies and 
            methodologies to stay at the forefront of the industry. When I'm not coding, 
            you'll find me contributing to open-source projects, learning new skills, 
            or sharing knowledge with the developer community.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
