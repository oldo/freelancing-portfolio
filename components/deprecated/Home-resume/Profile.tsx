import React from 'react';

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = ({}) => {
  const skills = [
    'Experienced frontend developer',
    'React and React Native wizard',
    'Extreme attention to detail',
    'Working on fullstack skills',
    'Looking to work with you!',
  ];

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start">
      <div className="flex flex-col mx-auto lg:mx-0 lg:flex-row items-center">
        <div
          className="bg-cover rounded-full border-2 border-gray-700 mb-4 lg:mb-0"
          style={{
            backgroundImage: 'url(/ollie.jpg)',
            width: 120,
            height: 120,
          }}
        />
        <div className="text-center lg:text-left lg:pl-8">
          <div className="text-3xl lg:text-4xl leading-tight font-bold">
            Ollie Nicholson
          </div>
          <div className="flex flex-row items-center text-gray-600">
            <div className="icon-drop-pin">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="pl-1 text-xs lg:text-lg font-semibold">
              Byron Bay, Australia (UTC/GMT+11)
            </div>
          </div>
        </div>
      </div>

      <div className="pt-16 mx-auto lg:pt-0 lg:mx-0">
        <div className="text-lg font-bold pb-1">TL;DR</div>
        <ul>
          {skills.map((skill) => (
            <li key={`skill-${skill}`}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
