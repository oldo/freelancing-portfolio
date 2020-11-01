import React from 'react';
import Button from '../../Button';

interface ExperienceProps {
  title: string;
  tech: string[];
  text: string[];
}

const Experience: React.FC<ExperienceProps> = ({ title, tech, text }) => {
  return (
    <div className="grid grid-cols-3 gap-4 pb-16">
      <div>
        <div className="font-bold text-lg pb-1">{title}</div>
        <div className="text-sm text-gray-600 pb-2">{tech.join(' / ')}</div>
        <Button text="Show me" />
      </div>
      <div className="col-span-2">
        {text.map((t) => (
          <p key={`${title}-${t}`}>{t}</p>
        ))}
      </div>
    </div>
  );
};

export default Experience;
