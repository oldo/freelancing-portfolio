import React from 'react';
import { motion } from 'framer-motion';
import variants from '../../lib/variants';

interface SubheadingProps {}

const Subheading: React.FC<SubheadingProps> = ({}) => {
  return (
    <motion.div
      layoutId="subheading1"
      initial="hidden"
      animate="visible"
      variants={variants}
      className="text-2xl font-extrabold lg:w-3/4"
    >
      <div className="pb-8 sm:pb-2">
        My name is Ollie. I’m a <strong>React & React Native developer</strong>{' '}
        with <strong>backend skills.</strong>
      </div>
      <div>
        My passion is creating <strong>clean, efficient apps</strong> that look{' '}
        <strong>pixel perfect on all devices.</strong>
      </div>

      <style jsx>{`
        strong {
          @apply bg-accent-light bg-opacity-75;
        }
      `}</style>
    </motion.div>
  );
};

export default Subheading;
