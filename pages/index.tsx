import React, { useState } from 'react';

import Layout from '../components/Layout/Layout';
import Landing from '../components/Landing/Landing';

import { ImageSide, Views } from '../interfaces';
import Works from '../components/Works/Works';

interface HomeProps {
  imageSide: ImageSide;
}

const Home: React.FC<HomeProps> = () => {
  return (
    <Layout>
      <Landing />
    </Layout>
  );
};

export default Home;
