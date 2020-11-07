import React from 'react';
import { motion } from 'framer-motion';
import Subheading from './Subheading';
import variants from '../../lib/variants';
import AboutData from './about.mdx';

interface AboutProps {}

const About: React.FC<AboutProps> = ({}) => {
  return (
    <div className="container mx-auto pt-40">
      <Subheading />

      <motion.div variants={variants} initial="hidden" animate="visible">
        <div className="pt-8 max-w-5xl">
          <AboutData />
        </div>
      </motion.div>
    </div>
  );
};

export default About;
