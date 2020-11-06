import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Item } from './items';
import Link from 'next/link';

interface WorkProps {
  item: Item;
}

const Work: React.FC<WorkProps> = ({ item }) => {
  return (
    <Link href={`/works/${item.id}`}>
      <a>
        <AnimatePresence>
          <motion.div
            className="bg-white border rounded-lg relative cursor-pointer"
            layoutId={`work-container-${item.id}`}
          >
            <motion.img
              layoutId={`work-image-${item.id}`}
              src={item.images[0]}
              className="rounded-lg"
            />
            <div className="absolute bottom-0 p-4 bg-black w-full opacity-75 rounded-b-lg">
              <motion.div
                layoutId={`work-title-${item.id}`}
                className="text-white font-black"
              >
                {item.title}
              </motion.div>
              <motion.div
                layoutId={`work-subtitle-${item.id}`}
                className="italic text-gray-600"
              >
                {item.subtitle}
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </a>
    </Link>
  );
};

export default Work;
