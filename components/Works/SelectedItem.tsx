import { motion } from 'framer-motion';
import React from 'react';
import { Item } from './data';

interface SelectedItemProps {
  id: number | null;
  item: Item;
  setSelectedItemId: any;
}

const SelectedItem: React.FC<SelectedItemProps> = ({
  id,
  item,
  setSelectedItemId,
}) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: 'auto' }}
        className="overlay"
      />

      <motion.div
        className="modal-container"
        onClick={() => setSelectedItemId(null)}
      >
        <motion.div
          layoutId={`works-container-${id}`}
          className="container works-container selected-works-container relative"
        >
          <motion.img src={item.images[0]} className="rounded-lg" />
          <div className="absolute top-0 p-4 bg-black w-full opacity-75 rounded-t-lg">
            <motion.div
              layoutId={`works-title-${id}`}
              className="text-white font-black"
            >
              {item.title}
            </motion.div>
            <motion.div
              layoutId={`works-subtitle-${id}`}
              className="text-gray-600"
            >
              {item.subtitle}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default SelectedItem;
