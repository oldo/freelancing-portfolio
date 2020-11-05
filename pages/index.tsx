import React, { useState } from 'react';

import Layout from '../components/Layout/Layout';
import Landing from '../components/Landing/Landing';

import { ImageSide, Views } from '../interfaces';
import Works from '../components/Works/Works';

interface HomeProps {
  imageSide: ImageSide;
}

const Home: React.FC<HomeProps> = () => {
  const [imageSide, setImageSide] = useState(ImageSide.NONE);
  const [activeView, setActiveView] = useState(Views.WORK);

  return (
    <Layout
      activeView={activeView}
      setActiveView={setActiveView}
      imageSide={imageSide}
      setImageSide={setImageSide}
    >
      {activeView === Views.HOME && <Landing />}
      {activeView === Views.WORK && <Works />}
    </Layout>
  );
};

export default Home;
