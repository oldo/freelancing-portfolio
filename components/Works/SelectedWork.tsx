import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Item } from './items';
import variants from '../Introduction/variants';

interface SelectedWorkProps {
  item: Item;
}

const SelectedWork: React.FC<SelectedWorkProps> = ({ item }) => {
  return (
    <>
      <Link href="/works">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.15 } }}
          transition={{ duration: 0.2 }}
          className="overlay"
        />
      </Link>

      <div className="fixed top-0 left-0 w-screen h-screen z-10 flex pointer-events-none">
        <motion.div
          layoutId={`work-container-${item.id}`}
          className="relative m-auto bg-white rounded-lg border pointer-events-auto overflow-y-auto hide-scrollbars"
          style={{ maxHeight: '90vh' }}
        >
          <div className="container mx-auto p-12">
            <div className="pb-12">
              <motion.div
                layoutId={`work-title-${item.id}`}
                className="font-black text-2xl"
              >
                {item.title}
              </motion.div>
              <motion.div
                layoutId={`work-subtitle-${item.id}`}
                className="text-gray-600 italic pb-8"
              >
                {item.subtitle}
              </motion.div>
              <motion.p
                initial="hidden"
                animate="visible"
                variants={variants}
                className="max-w-4xl text-gray-600"
              >
                {item.description}
              </motion.p>
            </div>

            <div className="grid grid-cols-2 gap-8 pb-12">
              {item.images.map((image, i) => (
                <motion.img
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                  layoutId={i === 0 ? `work-image-${item.id}` : undefined}
                  src={image}
                  className="rounded-lg"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{``}</style>
    </>
  );
};

export default SelectedWork;
