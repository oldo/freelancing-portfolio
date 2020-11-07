import React from 'react';
import { motion } from 'framer-motion';
import Subheading from './Subheading';
import variants from '../../lib/variants';
import AboutData from './about.mdx';
import Summary from './Summary';

interface AboutProps {}

const About: React.FC<AboutProps> = ({}) => {
  return (
    <div className="container mx-auto pt-40 pb-32">
      <div className="pb-12">
        <Subheading />
      </div>
      <motion.div variants={variants} initial="hidden" animate="visible">
        <div className="max-w-5xl">
          <Summary />
          <AboutData />
        </div>
      </motion.div>
    </div>
  );
};

export default About;
