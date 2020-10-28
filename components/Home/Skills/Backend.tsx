import React from 'react';

import Skills from './Skills';

interface BackendProps {}

const Backend: React.FC<BackendProps> = ({}) => {
  const title = 'Backend';
  const skills = [
    'Node',
    'API endpoint design',
    'Express',
    'GraphQL',
    'Can provision and secure a server',
    'Serverlesss',
    'Hasura',
    'PHP',
    'Laravel',
    'CakePHP',
  ];

  return <Skills title={title} skills={skills} />;
};

export default Backend;
