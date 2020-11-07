import React from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import { items } from './items';
import Work from './Work';
import SelectedWork from './SelectedWork';

interface WorksProps {}

const Works: React.FC<WorksProps> = ({}) => {
  const router = useRouter();
  const { id } = router.query;
  const selectedWork = id ? items.find((item) => item.id === id) : null;

  return (
    <>
      <motion.div
        className="container mx-auto py-32 grid grid-cols-1 md:grid-cols-2 gap-8 hide-scrollbars"
      >
        {items.map((item) => (
          <Work key={`item-${item.id}`} item={item} />
        ))}
      </motion.div>

      {selectedWork && <SelectedWork item={selectedWork} />}
    </>
  );
};

export default Works;
