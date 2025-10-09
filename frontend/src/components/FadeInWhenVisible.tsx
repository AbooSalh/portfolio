'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

interface FadeInWhenVisibleProps {
  children: React.ReactNode;
}

export default function FadeInWhenVisible({ children }: FadeInWhenVisibleProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}
