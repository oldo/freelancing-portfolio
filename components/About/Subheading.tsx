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
      className="leading-loose"
    >
      <div className="pb-4">
        My name is Ollie. I’m a <strong>React & React Native developer</strong>{' '}
        with <strong>backend skills.</strong>
      </div>
      <div>
        I have a passion for creating <strong>clean, efficient UI</strong> that
        look <strong>pixel perfect on all devices.</strong>
      </div>

      <style jsx>{`
        strong {
          @apply font-bold;
        }
      `}</style>
    </motion.div>
  );
};

export default Subheading;
