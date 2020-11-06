import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import About from '../components/Introduction/About';
import Heading from '../components/Introduction/Heading';
import Subheading from '../components/Introduction/Subheading';
import Face from '../components/Layout/Face';
import Layout from '../components/Layout/Layout';

interface AboutContainerProps {}

const AboutContainer: React.FC<AboutContainerProps> = ({}) => {
  return (
    <Layout>
      <About />
    </Layout>
  );
};

export default AboutContainer;
