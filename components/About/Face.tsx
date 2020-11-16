import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import variants from '../../lib/variants';

interface FaceProps {}

const Face: React.FC<FaceProps> = () => {
  const style = {
    height: '80vh',
    width: '80vh',
    right: '-40vh',
  };

  // @TODO ken burns effect
  return (
    <motion.div
      layoutId="myFace"
      variants={variants}
      initial="hidden"
      animate="opaque"
      className={`fixed bottom-0 hidden lg:block pointer-events-none`}
      style={style}
    >
      <Image
        className="pointer-events-none"
        src="/ollie-large.png"
        alt="Ollie"
        layout="fill"
        priority
      />
    </motion.div>
  );
};

export default Face;
