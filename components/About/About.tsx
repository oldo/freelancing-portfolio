import React from 'react';
import { motion } from 'framer-motion';
import Subheading from './Subheading';
import Summary from './Summary';
import Face from './Face';
import variants from '../../lib/variants';
import AboutData from './about.mdx';

interface AboutProps {}

const About: React.FC<AboutProps> = ({}) => {
  return (
    <div className="container mx-auto pt-24 md:pt-32 pb-24">
      <div className="pb-12">
        <Subheading />
      </div>

      <motion.div variants={variants} initial="hidden" animate="visible">
        <div className="max-w-4xl">
          <Summary />
          <AboutData />
        </div>
      </motion.div>

      <Face />
    </div>
  );
};

export default About;
