import React from 'react';

import Layout from '../components/Layout/Layout';
import Landing from '../components/Landing/Landing';

import { ImageSide } from '../interfaces';

interface HomeProps {
  imageSide: ImageSide;
}

const Home: React.FC<HomeProps> = ({ imageSide = ImageSide.RIGHT }) => {
  return (
    <Layout imageSide={imageSide}>
      <Landing />
    </Layout>
  );
};

export default Home;
