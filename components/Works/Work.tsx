import React from 'react';
import { motion } from 'framer-motion';
import { Item } from './data';

interface WorkProps {
  id: number;
  item: Item;
  setSelectedItemId: any;
}

const Work: React.FC<WorkProps> = ({ id, item, setSelectedItemId }) => {
  return (
    <motion.div
      className="works-container relative"
      layoutId={`works-container-${id}`}
      onClick={() => setSelectedItemId(id)}
    >
      <motion.img src={item.images[0]} className="rounded-lg" />
      <div className="absolute bottom-0 p-4 bg-black w-full opacity-75 rounded-b-lg">
        <motion.div layoutId={`works-title-${id}`} className="text-white font-black">{item.title}</motion.div>
        <motion.div layoutId={`works-subtitle-${id}`} className="text-gray-600">{item.subtitle}</motion.div>
      </div>
    </motion.div>
  );
};

export default Work;
