import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Item } from './items';
import Image from 'next/image';

interface WorkProps {
  item: Item;
}

const Work: React.FC<WorkProps> = ({ item }) => {
  const image = item.images[0];

  return (
    <Link href={`/works/${item.id}`} scroll={false}>
      <a>
        <motion.div
          className="bg-white rounded-lg relative cursor-pointer"
          layoutId={`work-container-${item.id}`}
        >
          <motion.div layoutId={`work-image-${item.id}`} className="rounded-lg">
            <Image
              src={image.src}
              height={image.height}
              width={image.width}
              alt={image.alt}
              className="rounded-lg"
            />
          </motion.div>
          {/* <motion.img
            layoutId={`work-image-${item.id}`}
            src={item.images[0]}
            className="rounded-lg"
          /> */}
          <div
            className="absolute py-4 px-6 bg-black w-full bg-opacity-75 rounded-b-lg"
            style={{ bottom: 8 }}
          >
            <motion.div
              layoutId={`work-title-${item.id}`}
              className="text-white font-black"
            >
              {item.title}
            </motion.div>
            <motion.div
              layoutId={`work-technologies-${item.id}`}
              className="italic text-gray-500"
            >
              {item.technologies.join(' / ')}
            </motion.div>
          </div>
        </motion.div>
      </a>
    </Link>
  );
};

export default Work;
