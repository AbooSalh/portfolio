'use client';

import { motion } from 'framer-motion';
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, 
  SiNodedotjs, SiPython, SiDocker, SiGit 
} from 'react-icons/si';

const FloatingIcons = () => {
  const icons = [
    { Icon: SiReact, color: '#61DAFB', delay: 0 },
    { Icon: SiNextdotjs, color: '#ffffff', delay: 0.5 },
    { Icon: SiTypescript, color: '#3178C6', delay: 1 },
    { Icon: SiTailwindcss, color: '#06B6D4', delay: 1.5 },
    { Icon: SiNodedotjs, color: '#339933', delay: 2 },
    { Icon: SiPython, color: '#3776AB', delay: 2.5 },
    { Icon: SiDocker, color: '#2496ED', delay: 3 },
    { Icon: SiGit, color: '#F05032', delay: 3.5 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {icons.map(({ Icon, color, delay }, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: delay,
            ease: "easeInOut"
          }}
        >
          <Icon size={40 + Math.random() * 40} color={color} style={{ opacity: 0.3 }} />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingIcons;
