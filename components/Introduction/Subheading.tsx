import React from 'react';
import cx from 'classnames';
import { motion } from 'framer-motion';
import variants from '../../lib/variants';
import { Views } from '../../typescript/enums';
import { useRouter } from 'next/router';

interface SubheadingProps {}

const Subheading: React.FC<SubheadingProps> = ({}) => {
  const router = useRouter();

  const divClasses = cx({
    ['text-2xl font-extrabold']: router.pathname === Views.HOME,
    ['leading-loose']: router.pathname === Views.ABOUT,
  });
  const strongClasses = cx({
    ['bg-accent-light bg-opacity-75']: router.pathname === Views.HOME,
    ['font-bold']: router.pathname === Views.ABOUT,
  });

  return (
    <motion.div
      layoutId="subheading1"
      initial="hidden"
      animate="visible"
      variants={variants}
    >
      <div className={divClasses}>
        My name is Ollie. I’m a{' '}
        <strong className={strongClasses}>
          React & React Native developer
        </strong>{' '}
        with <strong className={strongClasses}>backend skills.</strong>
      </div>
      <div className={divClasses}>
        I have a passion for creating{' '}
        <strong className={strongClasses}>clean, efficient UI</strong> that look{' '}
        <strong className={strongClasses}>pixel perfect on all devices.</strong>
      </div>
    </motion.div>
  );
};

export default Subheading;
