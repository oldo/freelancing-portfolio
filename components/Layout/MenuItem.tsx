import React from 'react';
import cx from 'classnames';
import Link from 'next/link';
import { Views } from '../../interfaces';

interface MenuItemProps {
  path: Views;
  label: string;
  isActive: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ path, label, isActive }) => {
  const buttonClasses = cx('p-4 mx-2 text-2xl cursor-pointer font-black', {
    'text-accent border-b-8 border-accent': isActive,
  });

  return (
    <Link href={path}>
      <div className={buttonClasses}>{label}</div>
    </Link>
  );
};

export default MenuItem;
