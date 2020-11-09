import { motion } from 'framer-motion';
import React from 'react';
import Face from './Face';
import Heading from './Heading';
import Subheading from './Subheading';

interface LandingProps {}

const Landing: React.FC<LandingProps> = ({}) => {
  return (
    <motion.div className="h-screen flex flex-col justify-center container mx-auto">
      <div className="leading-tight pb-12 font-black text-gray-800 text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
        <Heading />
      </div>

      <Subheading />

      <Face />
    </motion.div>
  );
};

export default Landing;
