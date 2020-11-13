import React from 'react';
import Layout from '../components/Layout/Layout';
import About from '../components/About/About';

interface AboutContainerProps {
  isMobile: boolean;
}

const AboutContainer: React.FC<AboutContainerProps> = ({ isMobile }) => {
  return (
    <Layout title="About" isMobile={isMobile}>
      <About />
    </Layout>
  );
};

export default AboutContainer;
