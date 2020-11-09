import React from 'react';
import Layout from '../../components/Layout/Layout';
import Works from '../../components/Works/Works';

interface WorksContainerProps {
  isMobile: boolean;
}

const WorksContainer: React.FC<WorksContainerProps> = ({ isMobile }) => {
  return (
    <Layout isMobile={isMobile}>
      <Works />
    </Layout>
  );
};

export default WorksContainer;
