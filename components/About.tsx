'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Palette, Rocket, Users, Award, Target, Zap, Heart } from 'lucide-react';

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
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Crafting beautiful and intuitive user interfaces',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Rocket,
      title: 'Fast Performance',
      description: 'Optimizing applications for speed and efficiency',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Users,
      title: 'User-Centric',
      description: 'Focusing on exceptional user experience',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const achievements = [
    { icon: Award, value: '50+', label: 'Projects Completed', color: 'text-yellow-400' },
    { icon: Target, value: '100%', label: 'Client Satisfaction', color: 'text-green-400' },
    { icon: Zap, value: '3+', label: 'Years Experience', color: 'text-blue-400' },
    { icon: Heart, value: '1000+', label: 'Commits This Year', color: 'text-pink-400' },
  ];

  return (
    <section id="about" className="min-h-screen py-20 bg-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 12,
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
              <Users className="w-5 h-5 text-purple-400" />
              <span className="text-purple-300">Get to know me</span>
            </div>
          </motion.div>
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm a passionate developer dedicated to creating innovative solutions 
            that make a difference. With expertise in modern web technologies, 
            I bring ideas to life through code.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all relative overflow-hidden group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
              
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.5 }}
                className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} p-2 mb-4`}
              >
                <feature.icon className="w-full h-full text-white" />
              </motion.div>
              
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center"
            >
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              >
                <achievement.icon className={`w-8 h-8 ${achievement.color} mx-auto mb-2`} />
              </motion.div>
              <div className={`text-3xl font-bold ${achievement.color} mb-1`}>
                {achievement.value}
              </div>
              <div className="text-gray-400 text-sm">{achievement.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Journey Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-8 rounded-2xl border border-purple-500/20 backdrop-blur-sm relative overflow-hidden"
        >
          {/* Animated corner accents */}
          <motion.div
            className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          />
          
          <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
            <Rocket className="w-6 h-6 text-purple-400" />
            My Journey
          </h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            My journey in software development has been driven by curiosity and a passion 
            for solving complex problems. I constantly explore new technologies and 
            methodologies to stay at the forefront of the industry. When I'm not coding, 
            you'll find me contributing to open-source projects, learning new skills, 
            or sharing knowledge with the developer community.
          </p>
          <div className="flex flex-wrap gap-3">
            {['Problem Solver', 'Team Player', 'Quick Learner', 'Creative Thinker'].map((trait, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
              >
                {trait}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
