import React from 'react';
import { motion } from 'framer-motion';
import Subheading from './Subheading';
import Summary from './Summary';
import Face from './Face';
import variants from '../../lib/variants';
import AboutData from './about.mdx';
import Image from 'next/image';

interface AboutProps {}

const About: React.FC<AboutProps> = ({}) => {
  return (
    <>
      <div className="sm:hidden w-2/4 mx-auto rounded-full bg-white border-4 border-gray-700 mb-8">
        <Image
          className="rounded-full"
          src="/ollie-large.png"
          height={1200}
          width={1200}
        />
      </div>
      
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
    </>
  );
};

export default About;
