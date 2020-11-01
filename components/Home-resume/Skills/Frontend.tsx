import React from 'react';

import Skills from './Skills';

interface FrontendProps {}

const Frontend: React.FC<FrontendProps> = ({}) => {
  const title = 'Frontend';
  const skills = [
    'React',
    'React Native',
    'Typescript',
    'Modern Javascript',
    'Next.js',
    'Gatsby',
    'GraphQL',
    'Apollo Client',
    'Webpack',
    'Parcel',
    'Prettier',
    'TailwindCSS',
    'Styled Components',
    'Material-UI',
    'Bootstrap',
  ];

  return <Skills title={title} skills={skills} />;
};

export default Frontend;
