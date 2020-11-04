import React from 'react';
import SectionHeader from '../SectionHeader';

interface SkillsProps {}

const Skills: React.FC<SkillsProps> = ({}) => {
  const skills = [
    'React',
    'React Native',
    'Typescript',
    'Modern JS',
    'Expo',
    'Virtualised Grid',
    'Material-UI',
    'React Native Paper',
    'Bootstrap',
    'PHP',
    'Laravel',
    'API',
    'Website',
    'Jekyll',
    'Python',
    'Web Scraping',
    'Automated Emails',
    'Next.js',
    'Vercel',
  ];

  return (
    <div>
      <SectionHeader title="Weapons of choice" />
      {skills.join(' / ')}
    </div>
  );
};

export default Skills;
