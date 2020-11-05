import React from 'react';
import cx from 'classnames';

import MenuItem from './MenuItem';
import { ImageSide, Views } from '../../interfaces';
import { useRouter } from 'next/router';

interface MenuProps {}

const Menu: React.FC<MenuProps> = ({}) => {
  const router = useRouter();
  const activeView = router.pathname;

  const items = [
    {
      path: Views.HOME,
      label: 'Hello',
    },
    {
      path: Views.ABOUT,
      label: 'About',
    },
    {
      path: Views.WORK,
      label: 'Work',
    },
    {
      path: Views.CONTACT,
      label: 'Contact',
    },
  ];

  return (
    <div className={`absolute top-0 w-full mb-8 flex flew-row justify-center`}>
      {items.map(({ path, label }) => (
        <MenuItem
          key={path}
          path={path}
          label={label}
          isActive={activeView === path}
        />
      ))}
    </div>
  );
};

export default Menu;
