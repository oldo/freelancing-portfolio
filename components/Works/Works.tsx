import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';

import { items } from './data';
import SelectedItem from './SelectedItem';
import Work from './Work';

interface WorksProps {}

const Works: React.FC<WorksProps> = ({}) => {
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const selectedItem = selectedItemId !== null && items[selectedItemId];
  console.log(selectedItemId, selectedItem);

  return (
    <AnimateSharedLayout type="crossfade">
      <div className="grid grid-cols-2 gap-4">
        {items.map((item, id) => (
          <Work
            key={`item-${id}`}
            id={id}
            item={item}
            setSelectedItemId={setSelectedItemId}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedItem && (
          <SelectedItem
            id={selectedItemId}
            item={selectedItem}
            setSelectedItemId={setSelectedItemId}
          />
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
};

export default Works;
