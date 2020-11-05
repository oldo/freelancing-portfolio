import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { ImageSide } from '../../interfaces';
import Face from '../Layout/Face';

interface LandingProps {}

const Landing: React.FC<LandingProps> = ({}) => {
  return (
    <AnimatePresence>
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        // transition={{ duration: 1 }}
        className="h-screen flex flex-col justify-center container mx-auto"
      >
        <div
          className="text-5xl leading-tight pb-12 font-black"
          style={{ fontSize: '5rem' }}
        >
          <div>CLEAN</div>
          <div>EFFICIENT</div>
          <div>PIXEL PERFECT</div>
        </div>
        <div className="text-xl font-extrabold">
          <p>
            My name is Ollie. I’m a{' '}
            <strong>React & React Native developer</strong> with{' '}
            <strong>backend skills.</strong>
          </p>
          <p>
            I have a passion for creating <strong>clean, efficient UI</strong>{' '}
            that look <strong>pixel perfect on all devices.</strong>
          </p>
        </div>
  
        {/* <Face imageSide={ImageSide.RIGHT} /> */}
  
        <style jsx>{`
          p {
            @apply text-2xl;
          }
        `}</style>
      </motion.div>
    </AnimatePresence>
  );
};

export default Landing;
