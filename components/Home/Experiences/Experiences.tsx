import React from 'react';

import SectionHeader from '../../SectionHeader';
import Experience from './Experience';
import data from './data';

interface ExperiencesProps {}

const Experiences: React.FC<ExperiencesProps> = ({}) => {
  return (
    <div>
      <SectionHeader title="Experience" />
      {data.map((experience) => (
        <Experience key={experience.title} {...experience} />
      ))}
    </div>
  );
};

export default Experiences;
