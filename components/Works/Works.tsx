import React from 'react';
import { useRouter } from 'next/router';

import { items } from './items';
import SelectedWork from './SelectedWork';
import Work from './Work';

interface WorksProps {}

const Works: React.FC<WorksProps> = ({}) => {
  const router = useRouter();
  const { id } = router.query;
  const selectedWork = id ? items.find((item) => item.id === id) : null;

  return (
    <>
      <div className="container mx-auto py-32 grid grid-cols-2 gap-4 hide-scrollbars">
        {items.map((item) => (
          <Work key={`item-${item.id}`} item={item} />
        ))}
      </div>

      {selectedWork && <SelectedWork item={selectedWork} />}
    </>
  );
};

export default Works;
