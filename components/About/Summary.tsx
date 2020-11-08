import React from 'react';

import GlobeIcon from '../Icons/Globe';
import AcademicIcon from '../Icons/Academic';
import BriefcaseIcon from '../Icons/Briefcase';

interface SummaryProps {}

const Summary: React.FC<SummaryProps> = ({}) => {
  const rows = [
    {
      title: 'Byron Bay, Australia',
      subtitle: 'UTC/GMT+11',
      icon: GlobeIcon,
    },
    {
      title:
        '<a href="https://www.usebookex.com" target="_blank" rel="noopener noreferrer">Bookex</a>',
      subtitle: 'Co-founder and CTO/Lead Developer',
      icon: BriefcaseIcon,
    },
    {
      title:
        '<a href="https://www.bookinglayer.com" target="_blank" rel="noopener noreferrer">Bookinglayer</a>',
      subtitle: 'CTO and Developer',
      icon: BriefcaseIcon,
    },
    {
      title: 'Bachelor of Mechanical Engineering (First Class Honours)',
      subtitle: 'University of Sydney',
      icon: AcademicIcon,
    },
    {
      title: 'Advanced Diploma of Marine Engineering',
      subtitle: 'Newcastle TAFE',
      icon: AcademicIcon,
    },
  ];

  return (
    <div className="pb-8">
      {rows.map((row) => {
        const Icon = row.icon;

        return (
          <div
            key={row.title}
            className="flex flex-row items-top pb-4 leading-tight"
          >
            <div className="pr-4">
              <Icon size={30} />
            </div>
            <div>
              <div
                className="font-bold"
                dangerouslySetInnerHTML={{ __html: row.title }}
              />
              {row.subtitle && (
                <div className="text-gray-600 italic">{row.subtitle}</div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Summary;
