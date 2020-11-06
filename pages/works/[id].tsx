import React from 'react';
import Layout from '../../components/Layout/Layout';
import Works from '../../components/Works/Works';

interface WorksContainerProps {}

const WorksContainer: React.FC<WorksContainerProps> = ({}) => {
  return (
    <Layout>
      <Works />
    </Layout>
  );
};

export default WorksContainer;
