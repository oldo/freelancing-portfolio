import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Home/Hero';
import Introduction from '../components/Home/Introduction';
import Description from '../components/Home/Description';
import { ImageSide } from '../interfaces';

interface HomeProps {
  imageSide: ImageSide;
}

const Home: React.FC<HomeProps> = ({ imageSide }) => {
  return (
    <Layout imageSide={imageSide}>
      <Header />
      <Introduction />
      <Description />
    </Layout>
  );
};

export default Home;
