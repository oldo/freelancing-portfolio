import React from 'react';
import cx from 'classnames';

import MenuItem from './MenuItem';
import { ImageSide, Views } from '../../interfaces';

interface MenuProps {
  imageSide: ImageSide;
  activeView: Views;
  handleSetActiveView: (view: Views) => void;
}

const Menu: React.FC<MenuProps> = ({
  imageSide,
  activeView,
  handleSetActiveView,
}) => {
  const containerClasses = cx({
    ['ml-24 left-0']: imageSide === ImageSide.RIGHT,
    ['mr-24 right-0']: imageSide === ImageSide.LEFT,
    ['right-1/2']: imageSide === ImageSide.NONE,
  });

  const items = [
    {
      view: Views.HOME,
      label: 'Hello',
    },
    {
      view: Views.ABOUT,
      label: 'About',
    },
    {
      view: Views.WORK,
      label: 'Work',
    },
    {
      view: Views.CONTACT,
      label: 'Contact',
    },
  ];

  return (
    <div className={`absolute bottom-0 mb-8 flex flew-row ${containerClasses}`}>
      {items.map(({ view, label }) => (
        <MenuItem
          key={view}
          view={view}
          label={label}
          activeView={activeView}
          handleSetActiveView={handleSetActiveView}
        />
      ))}
    </div>
  );
};

export default Menu;
