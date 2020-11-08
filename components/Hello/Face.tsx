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
      className="fixed bottom-0 hidden xl:block"
      style={style}
    >
      <Image src="/ollie-large.png" alt="Ollie" layout="fill" priority />
    </motion.div>
  );
};

export default Face;
