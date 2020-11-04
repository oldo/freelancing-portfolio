import React from 'react';
import Link from 'next/link'

import { ImageSide } from '../../interfaces';

interface MenuProps {
  imageSide: ImageSide;
}

const Menu: React.FC<MenuProps> = ({ imageSide }) => {
  let containerClasses = '';
  if (imageSide === ImageSide.RIGHT) containerClasses = 'ml-24 left-0';
  if (imageSide === ImageSide.LEFT) containerClasses = 'mr-24 right-0';
  if (imageSide === ImageSide.NONE) containerClasses = 'right-1/2';

  const buttonClasses = 'p-8 text-2xl';

  return (
    <div className={`absolute bottom-0 pb-8 ${containerClasses}`}>
      <Link href="/"><a className={buttonClasses}>Hello</a></Link>
      <Link href="/about"><a className={buttonClasses}>About</a></Link>
      <Link href="/work"><a className={buttonClasses}>Work</a></Link>
      <Link href="/contact"><a className={buttonClasses}>Contact</a></Link>
    </div>
  );
};

export default Menu;
