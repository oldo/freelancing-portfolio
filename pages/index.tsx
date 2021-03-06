import React from 'react';
import Layout from '../components/Layout/Layout';
import Hello from '../components/Hello/Hello';
import About from '../components/About/About';

interface HomeProps {
  isMobile: boolean;
}

const Home: React.FC<HomeProps> = ({ isMobile }) => {
  return isMobile ? (
    <Layout title="Hello" isMobile={isMobile}>
      <About />
    </Layout>
  ) : (
    <Layout title="Hello" isMobile={isMobile} isScreenHeight>
      <Hello />
    </Layout>
  );
};

export default Home;
