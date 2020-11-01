import React from 'react';

import Layout from '../components/Layout';
import Profile from '../components/Home/Profile';
import Introduction from '../components/Home/Introduction';
import Frontend from '../components/Home/Skills/Frontend';
import Backend from '../components/Home/Skills/Backend';
import Misc from '../components/Home/Skills/Misc';
import Facts from '../components/Home/Facts';
import Experience from '../components/Home/Experiences/Experiences';
import Skills from '../components/Home/Skills';

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  const sections = [
    <Profile />,
    <Introduction />,
    <Skills />,
    <Experience />,
    <Frontend />,
    <Backend />,
    <Misc />,
    <Facts />,
  ];

  return (
    <Layout>
      {sections.map((section, index) => (
        <div key={`section-${index}`} className="pt-16">
          {section}
        </div>
      ))}
    </Layout>
  );
};

export default Home;
