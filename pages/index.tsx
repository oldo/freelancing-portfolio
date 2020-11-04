import React, { useState } from 'react';

import Layout from '../components/Layout/Layout';
import Landing from '../components/Landing/Landing';

import { ImageSide, Views } from '../interfaces';

interface HomeProps {
  imageSide: ImageSide;
}

const Home: React.FC<HomeProps> = () => {
  const [imageSide, setImageSide] = useState(ImageSide.RIGHT);
  const [activeView, setActiveView] = useState(Views.HOME);

  console.log(imageSide, activeView);
  
  return (
    <Layout
      activeView={activeView}
      setActiveView={setActiveView}
      imageSide={imageSide}
      setImageSide={setImageSide}
    >
      <Landing />
    </Layout>
  );
};

export default Home;
