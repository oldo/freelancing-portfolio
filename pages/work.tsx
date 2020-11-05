import React from 'react';
import WorksComponent from '../components/Works/Works';

import { whiteDotGrid } from '../styles/background-patterns';

interface WorksProps {}

const Works: React.FC<WorksProps> = ({}) => {
  return (
    <>
      <div className="container w-screen h-screen bg-pattern">
        <WorksComponent />
      </div>
      <style jsx>{`
        .bg-pattern {
          ${whiteDotGrid()}
        }
      `}</style>
    </>
  );
};

export default Works;
