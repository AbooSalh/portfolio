'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, 
  SiNodedotjs, SiPython, SiDocker, SiGit, SiMongodb,
  SiPostgresql, SiRedis, SiGraphql, SiJavascript, SiHtml5,
  SiCss3, SiAmazon, SiVercel, SiGithub
} from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      category: 'Frontend',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React/Next.js', level: 90, icon: SiReact, color: '#61DAFB' },
        { name: 'TypeScript', level: 85, icon: SiTypescript, color: '#3178C6' },
        { name: 'Tailwind CSS', level: 90, icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'HTML/CSS', level: 95, icon: SiHtml5, color: '#E34F26' },
      ],
    },
    {
      category: 'Backend',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 85, icon: SiNodedotjs, color: '#339933' },
        { name: 'Python', level: 80, icon: SiPython, color: '#3776AB' },
        { name: 'MongoDB', level: 75, icon: SiMongodb, color: '#47A248' },
        { name: 'PostgreSQL', level: 75, icon: SiPostgresql, color: '#4169E1' },
      ],
    },
    {
      category: 'Tools & Others',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Git/GitHub', level: 90, icon: SiGit, color: '#F05032' },
        { name: 'Docker', level: 75, icon: SiDocker, color: '#2496ED' },
        { name: 'AWS', level: 70, icon: SiAmazon, color: '#FF9900' },
        { name: 'Vercel', level: 85, icon: SiVercel, color: '#ffffff' },
      ],
    },
  ];

  return (
    <section id="skills" className="min-h-screen py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
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
              <SiReact className="w-5 h-5 text-cyan-400 animate-spin" style={{ animationDuration: '3s' }} />
              <span className="text-purple-300">My Expertise</span>
            </div>
          </motion.div>
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all relative overflow-hidden group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
              
              <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.5 }}
                        >
                          <skill.icon className="w-5 h-5" style={{ color: skill.color }} />
                        </motion.div>
                        <span className="text-gray-300">{skill.name}</span>
                      </div>
                      <span className="text-gray-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden relative">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                        className={`h-full bg-gradient-to-r ${category.color} relative`}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white"
                          animate={{
                            x: ['-100%', '100%'],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                          style={{ opacity: 0.3 }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-8 rounded-2xl border border-purple-500/20 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold mb-6 text-white text-center">Also Working With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: SiGraphql, name: 'GraphQL', color: '#E10098' },
              { icon: SiRedis, name: 'Redis', color: '#DC382D' },
              { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
              { icon: SiCss3, name: 'CSS3', color: '#1572B6' },
              { icon: SiGithub, name: 'GitHub Actions', color: '#ffffff' },
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.2, rotate: 360 }}
                className="flex flex-col items-center gap-2 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-purple-500/50 transition-all group"
              >
                <tech.icon className="w-8 h-8 group-hover:scale-110 transition-transform" style={{ color: tech.color }} />
                <span className="text-xs text-gray-400 group-hover:text-gray-300">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
