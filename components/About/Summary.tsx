import React from 'react';

import HeartIcon from '../Icons/Heart';
import GlobeIcon from '../Icons/Globe';
import AcademicIcon from '../Icons/Academic';
import StarIcon from '../Icons/Star';
import { Technologies } from '../../typescript/enums';

interface SummaryProps {}

const Summary: React.FC<SummaryProps> = ({}) => {
  const rows = [
    {
      title: [
        Technologies.REACT,
        Technologies.REACT_NATIVE,
        Technologies.TS,
        Technologies.NEXTJS,
        Technologies.GRAPHQL,
        Technologies.REDUX,
      ].join(' / '),
      subtitle: 'Frontend - my first love!',
      icon: HeartIcon,
    },
    {
      title: [
        Technologies.NODE,
        Technologies.SERVERLESS,
        Technologies.HASURA,
        Technologies.LARAVEL,
      ].join(' / '),
      subtitle: 'Backend - competent and improving',
      icon: HeartIcon,
    },
    {
      title: 'Byron Bay, Australia',
      subtitle: 'UTC/GMT+11',
      icon: GlobeIcon,
    },
    {
      title:
        '<a href="https://www.usebookex.com" target="_blank" rel="noopener noreferrer">Bookex</a>',
      subtitle: 'Co-founder and CTO/Lead Developer',
      icon: StarIcon,
    },
    {
      title:
        '<a href="https://www.bookinglayer.com" target="_blank" rel="noopener noreferrer">Bookinglayer</a>',
      subtitle: 'CTO and Developer',
      icon: StarIcon,
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
