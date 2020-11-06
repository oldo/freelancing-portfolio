import { motion } from 'framer-motion';
import React from 'react';
import Heading from './Heading';
import Subheading from './Subheading';

interface LandingProps {}

const Landing: React.FC<LandingProps> = ({}) => {
  return (
    <motion.div className="h-screen flex flex-col justify-center container mx-auto">
      <div
        className="leading-tight pb-12 font-black text-gray-800"
        style={{ fontSize: '6rem' }}
      >
        <Heading />
      </div>

      <Subheading />
    </motion.div>
  );
};

export default Landing;
