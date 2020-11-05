import React from 'react';
import Face from '../components/Layout/Face';
import Layout from '../components/Layout/Layout';
import { ImageSide } from '../interfaces';

interface AboutProps {}

const About: React.FC<AboutProps> = ({}) => {
  return (
    <Layout>
      <div className="h-screen flex flex-col justify-center container" style={{ marginLeft: '30vw' }}>
        <div>Content</div>
      </div>
      {/* <Face imageSide={ImageSide.RIGHT} /> */}
    </Layout>
  );
};

export default About;
