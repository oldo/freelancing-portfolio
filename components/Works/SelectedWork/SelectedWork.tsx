import React from 'react';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import { Item } from '../items';
import Image from './Image';
import Video from './Video';
import variants from '../../../lib/variants';

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
          className="relative m-auto bg-white rounded-lg border pointer-events-auto overflow-y-auto hide-scrollbars"
          style={{ maxHeight: '90vh', maxWidth: '90vw' }}
        >
          <div
            onClick={() => router.push('/works')}
            className="absolute cursor-pointer text-gray-500 hover:text-gray-700 transition-color duration-300"
            style={{ height: 30, width: 30, top: 15, right: 15 }}
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
          <div className="container mx-auto p-4 sm:p-8 lg:p-12">
            <div className="pb-12">
              <motion.div
                layoutId={`work-title-${item.id}`}
                className="font-black text-2xl w-11/12"
              >
                {item.title}
              </motion.div>
              <motion.div
                layoutId={`work-technologies-${item.id}`}
                className="text-gray-600 italic pb-12"
              >
                {item.technologies.join(' / ')}
              </motion.div>
              <motion.p
                initial="hidden"
                animate="visible"
                variants={variants}
                className="text-gray-600"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </div>

            <div className="grid gris-cols-1 lg:grid-cols-2 gap-2 lg:gap-4 pb-12">
              {item.images.map((image, i) => (
                <motion.div
                  key={`image-${item.id}-${i}`}
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                  layoutId={i === 0 ? `work-image-${item.id}` : undefined}
                  className="rounded-lg"
                >
                  {image.type === 'video' ? <Video video={image} /> : <Image image={image} />}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SelectedWork;
