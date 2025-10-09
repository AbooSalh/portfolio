'use client';

import { motion } from 'framer-motion';
import styled from 'styled-components';

const CardContainer = styled(motion.div)`
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  color: white;
  cursor: pointer;
  
  &:hover {
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
  }
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  opacity: 0.9;
  line-height: 1.6;
`;

export default function StyledCard() {
  return (
    <CardContainer
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Title>Styled Component Card</Title>
      <Description>
        This card combines styled-components with Framer Motion for unique animations.
      </Description>
    </CardContainer>
  );
}
