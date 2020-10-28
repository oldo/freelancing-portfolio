import React from 'react';

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = ({}) => {
  const skills = [
    'Experienced frontend developer',
    'React and React Native wizard',
    'Extreme attention to detail',
    'Working on fullstack skills',
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
          <div className="text-4xl leading-tight font-bold">
            Ollie Nicholson
          </div>
          <div className="flex flex-row items-center text-gray-600">
            <div style={{ height: 24, width: 24 }}>
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
            <div className="pl-1 text-lg font-semibold">
              Byron Bay, Australia (UTC/GMT+11)
            </div>
          </div>
        </div>
      </div>

      <div className="pt-16 mx-auto lg:pt-0 lg:mx-0">
        {skills.map((skill) => (
          <div key={skill} className="flex flex-row items-center">
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
            <div className="text-xl pl-4">{skill}</div>
          </div>
        ))}
      </div>

      <div className="pt-16 mx-auto lg:pt-0 lg:mx-0">
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
