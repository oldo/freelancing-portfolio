import React from 'react';
import { motion } from 'framer-motion';
import variants from '../../lib/variants';

interface HeadingProps {}

const Heading: React.FC<HeadingProps> = ({}) => {
  return (
    <>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        layoutId="heading2"
      >
        CLEAN
      </motion.div>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        layoutId="heading3"
      >
        EFFICIENT
      </motion.div>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        layoutId="heading4"
      >
        PIXEL PERFECT
      </motion.div>
    </>
  );
};

export default Heading;
