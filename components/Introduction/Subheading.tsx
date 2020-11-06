import React from 'react';
import { motion } from 'framer-motion';

interface SubheadingProps {}

const Subheading: React.FC<SubheadingProps> = ({}) => {
  return (
    <motion.div layoutId="subheading1" className="text-2xl font-extrabold">
      <div>
        My name is Ollie. I’m a <strong>React & React Native developer</strong>{' '}
        with <strong>backend skills.</strong>
      </div>
      <div>
        I have a passion for creating <strong>clean, efficient UI</strong> that
        look <strong>pixel perfect on all devices.</strong>
      </div>
    </motion.div>
  );
};

export default Subheading;
