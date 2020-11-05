import React from 'react';
import cx from 'classnames';
import { Views } from '../../interfaces';

interface MenuItemProps {
  view: Views;
  label: string;
  activeView: Views,
  handleSetActiveView: (view: Views) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({
  view,
  label,
  activeView,
  handleSetActiveView,
}) => {
  const buttonClasses = cx('p-4 mx-2 text-2xl cursor-pointer', {
    'text-accent border-b-8 border-accent': view === activeView,
  });

  return (
    <div onClick={() => handleSetActiveView(view)} className={buttonClasses}>
      {label}
    </div>
  );
};

export default MenuItem;
