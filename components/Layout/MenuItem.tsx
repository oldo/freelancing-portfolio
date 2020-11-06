import React from 'react';
import cx from 'classnames';
import Link from 'next/link';
import { Views } from '../../interfaces';
import { motion } from 'framer-motion';

interface MenuItemProps {
  path: Views;
  label: string;
  isActive: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ path, label, isActive }) => {
  const buttonClasses = cx('p-4 mx-2 text-2xl cursor-pointer font-black transition-color duration-500', {
    'text-gray-500 hover:text-gray-800': !isActive,
    'text-gray-800': isActive,
  });

  return (
    <Link href={path}>
      <a
        target={`${path[0] === '/' ? '' : '_blank'}`}
        className={buttonClasses}
      >
        {label}
        {isActive && (
          <motion.div
            layoutId="activeMenuItem"
            className="w-full h-2 mt-2 bg-accent"
          />
        )}
      </a>
    </Link>
  );
};

export default MenuItem;
