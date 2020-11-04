import Image from 'next/image';
import React from 'react';
import { ImageSide } from '../../interfaces';

interface FaceProps {
  imageSide: ImageSide;
}

const Face: React.FC<FaceProps> = ({ imageSide }) => {
  const filepath =
    imageSide === ImageSide.LEFT
      ? '/ollie-face-left.png'
      : '/ollie-face-right.png';

  const imageClasses = imageSide === ImageSide.LEFT ? 'left-0' : 'right-0';

  return (
    <div
      className={`absolute ${imageClasses}`}
      style={{ height: '100vh', width: 'calc(100vh / 2)' }}
    >
      <Image src={filepath} alt="Ollie" layout="fill" />
    </div>
  );
};

export default Face;
