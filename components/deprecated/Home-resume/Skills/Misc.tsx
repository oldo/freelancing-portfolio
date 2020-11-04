import React from 'react';

import Skills from './Skills';

interface MiscProps {}

const Misc: React.FC<MiscProps> = ({}) => {
  const title = 'Keeping shit organised';
  const skills = [
    'Advanced Git usage',
    'Jira',
    'Github Issues',
    'Asana',
    'Slack',
    'GSuite'
  ];

  return <Skills title={title} skills={skills} />;
};

export default Misc;
