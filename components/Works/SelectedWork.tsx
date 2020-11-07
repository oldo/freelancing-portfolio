import React from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { Item } from './items';
import variants from '../../lib/variants';
import { useRouter } from 'next/router';

interface SelectedWorkProps {
  item: Item;
}

const SelectedWork: React.FC<SelectedWorkProps> = ({ item }) => {
  const router = useRouter();

  return (
    <>
      <AnimatePresence>
        <motion.div
          onClick={() => router.push('/works')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
          transition={{ duration: 0.2 }}
          className="overlay"
        />
      </AnimatePresence>

      <div className="fixed top-0 left-0 w-screen h-screen z-10 flex pointer-events-none">
        <motion.div
          layoutId={`work-container-${item.id}`}
          className="relative m-auto bg-white rounded-lg border pointer-events-auto overflow-y-auto hide-scrollbars"
          style={{ maxHeight: '90vh' }}
        >
          <div
            onClick={() => router.push('/works')}
            className="absolute cursor-pointer text-gray-500 hover:text-gray-700 transition-color duration-300"
            style={{ height: 40, width: 40, top: 25, right: 25 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="container mx-auto p-12">
            <div className="pb-12">
              <motion.div
                layoutId={`work-title-${item.id}`}
                className="font-black text-2xl"
              >
                {item.title}
              </motion.div>
              <motion.div
                layoutId={`work-technologies-${item.id}`}
                className="text-gray-600 italic"
              >
                {item.technologies.join(' / ')}
              </motion.div>
            </div>

            <div className="grid grid-cols-2 gap-8 pb-12">
              {item.images.map((image, i) => (
                <motion.img
                  key={`image-${item.id}-${i}`}
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                  layoutId={i === 0 ? `work-image-${item.id}` : undefined}
                  src={image}
                  className="rounded-lg"
                />
              ))}
            </div>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={variants}
              className="max-w-4xl mx-auto"
            >
              {item.description}
            </motion.p>
          </div>
        </motion.div>
      </div>

      <style jsx>{``}</style>
    </>
  );
};

export default SelectedWork;
