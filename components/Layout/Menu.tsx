import React from 'react';
import { useRouter } from 'next/router';

import MenuItem from './MenuItem';
import { Views } from '../../typescript/enums';

interface MenuProps {
  isMobile: boolean;
}

const Menu: React.FC<MenuProps> = ({ isMobile }) => {
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
      externalLink: true,
    },
  ].filter((item) => (isMobile ? item.path !== Views.ABOUT : true));

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
