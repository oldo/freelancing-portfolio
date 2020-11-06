import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';

interface FaceProps {}

const Face: React.FC<FaceProps> = () => {
  const router = useRouter();

  const style = {
    height: router.pathname === '/' ? '100vh' : '80vh',
    width: router.pathname === '/' ? '100vh' : '80vh',
    right: router.pathname === '/' ? '-30vh' : '-40vh',
  };

  // @TODO ken burns effect
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className={`fixed bottom-0`}
        style={style}
        layoutId="myFace"
      >
        <Image src="/ollie-large.png" alt="Ollie" layout="fill" priority />
      </motion.div>
    </AnimatePresence>
  );
};

export default Face;
