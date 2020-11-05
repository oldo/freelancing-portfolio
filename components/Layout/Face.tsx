import React from 'react';
import Image from 'next/image';
import { ImageSide } from '../../interfaces';

interface FaceProps {
  imageSide: ImageSide;
}

const Face: React.FC<FaceProps> = ({ imageSide }) => {
  const style = {
    height: '100vh',
    width: '100vh',
    right: imageSide === ImageSide.RIGHT ? '-40vh' : '',
    left: imageSide === ImageSide.LEFT ? 'calc(-100vh / 2)' : '',
  };

  return (
    <div className={`fixed top-0`} style={style}>
      <Image src="/ollie-large.png" alt="Ollie" layout="fill" />
    </div>
  );
};

export default Face;
