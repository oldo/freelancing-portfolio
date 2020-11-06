import React from 'react';

import Layout from '../components/Layout/Layout';
import Hello from '../components/Introduction/Hello';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <Layout>
      <Hello />
    </Layout>
  );
};

export default Home;
