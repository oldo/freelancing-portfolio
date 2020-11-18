import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import variants from '../../lib/variants';

interface FaceProps {}

const Face: React.FC<FaceProps> = () => {
  const style = {
    height: '100vh',
    width: '100vh',
    right: '-25vh',
  };

  // @TODO ken burns effect
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      layoutId="myFace"
      className="fixed bottom-0 hidden xl:block pointer-events-none"
      style={style}
    >
      <Image
        className="pointer-events-none"
        src="/ollie-large.png"
        alt="Oliver"
        layout="fill"
        priority
      />
    </motion.div>
  );
};

export default Face;
