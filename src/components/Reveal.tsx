import React from 'react';
import { motion, type Variants } from 'motion/react';

type Direction = 'left' | 'right' | 'up';

const hidden: Record<Direction, { opacity: number; x?: number; y?: number }> = {
  left: { opacity: 0, x: -56 },
  right: { opacity: 0, x: 56 },
  up: { opacity: 0, y: 40 },
};

const shown = { opacity: 1, x: 0, y: 0 };

interface RevealProps {
  children: React.ReactNode;
  from?: Direction;
  delay?: number;
  className?: string;
  once?: boolean;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  from = 'up',
  delay = 0,
  className,
  once = true,
}) => {
  const variants: Variants = {
    hidden: hidden[from],
    show: shown,
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: '-80px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

interface StaggerProps {
  children: React.ReactNode;
  className?: string;
}

export const Stagger: React.FC<StaggerProps> = ({ children, className }) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: '-60px' }}
    variants={{
      hidden: {},
      show: { transition: { staggerChildren: 0.12 } },
    }}
  >
    {children}
  </motion.div>
);

export const StaggerItem: React.FC<{ children: React.ReactNode; className?: string; from?: Direction }> = ({
  children,
  className,
  from = 'up',
}) => (
  <motion.div
    className={className}
    variants={{
      hidden: hidden[from],
      show: { ...shown, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
    }}
  >
    {children}
  </motion.div>
);
