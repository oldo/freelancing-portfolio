import React from 'react';

import SectionHeader from '../../SectionHeader';

interface SkillsProps {
  title: string;
  skills: string[];
}

const Skills: React.FC<SkillsProps> = ({ title, skills }) => {
  return (
    <div>
      <SectionHeader title={title} subheading="Weapons of choice" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <div
            key={`${title}-${skill}`}
            className="flex flex-row items-center py-2"
          >
            <div style={{ height: 20, width: 20 }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="pl-2">{skill}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
