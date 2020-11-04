import React from 'react';

interface SpecialisingInProps {}

const SpecialisingIn: React.FC<SpecialisingInProps> = ({}) => {
  return (
    <div className="container pt-16">
      <div className="bg-accent py-16 px-24 rounded-3xl">
        <div className="text-gray-700">Specialising in:</div>
        <div className="text-3xl">
          TypeScript / Javascript ES6 / React / React Native / GraphQL / AR & VR
          / WebGL / Three.js / Unity 3D / WebSockets / HTML & CSS / Node.js /
          Three.js
        </div>
      </div>
    </div>
  );
};

export default SpecialisingIn;
