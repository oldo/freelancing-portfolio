import React from 'react';
import { motion } from 'framer-motion';

interface HeadingProps {}

const Heading: React.FC<HeadingProps> = ({}) => {
  return (
    <>
      <motion.div layoutId="heading2">CLEAN</motion.div>
      <motion.div layoutId="heading3">EFFICIENT</motion.div>
      <motion.div layoutId="heading4">PIXEL PERFECT</motion.div>
    </>
  );
};

export default Heading;
