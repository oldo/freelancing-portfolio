import React from 'react';
import Image from 'next/image';

interface ExperiencesProps {}

const Experiences: React.FC<ExperiencesProps> = ({}) => {
  const experiences = [
    {
      title: 'Booking Engine',
      image: '/ollie-large.png',
    },
    {
      title: 'Calendar for reservation management',
      image: '/ollie-large.png',
    },
    {
      title: 'Business Mobile App',
      image: '/ollie-large.png',
    },
  ];

  return (
    <div className="container grid grid-cols-3 gap-4 py-24">
      {experiences.map((experience, i) => (
        <div key={`experience-${i}`} className="group relative cursor-pointer border hover:border-2 border-accent-light hover:border-accent rounded-lg bg-primary-900 transform hover:-translate-y-1 transition-all duration-200">
          <Image
            src={experience.image}
            width={500}
            height={500}
            style={{ height: 250 }}
            className="rounded-lg"
          />

          <div
            className="absolute bg-gradient-to-t from-primary-900 text-primary-500 group-hover:text-accent w-full rounded-b-lg"
            style={{ bottom: 0, height: 200 }}
          >
            <div className="absolute bottom-0 p-8 w-full">{experience.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experiences;
