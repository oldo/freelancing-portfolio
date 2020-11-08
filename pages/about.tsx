import React from 'react';
import Layout from '../components/Layout/Layout';
import About from '../components/About/About';

interface AboutContainerProps {}

const AboutContainer: React.FC<AboutContainerProps> = ({}) => {
  return (
    <Layout>
      <About />
    </Layout>
  );
};

export default AboutContainer;
