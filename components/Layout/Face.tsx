import Image from 'next/image';
import React from 'react';
import { ImageSide } from '../../interfaces';

interface FaceProps {
  imageSide: ImageSide;
}

const Face: React.FC<FaceProps> = ({ imageSide }) => {
  const imageClasses = imageSide === ImageSide.LEFT ? 'left-0' : 'right-0';

  return (
    <div
      className={`absolute ${imageClasses}`}
      style={{ height: '100vh', width: 'calc(100vh / 2)' }}
    >
      {imageSide === ImageSide.LEFT && (
        <Image src="/ollie-face-left.png" alt="Ollie" layout="fill" />
      )}
      {imageSide === ImageSide.RIGHT && (
        <Image src="/ollie-face-right.png" alt="Ollie" layout="fill" />
      )}
    </div>
  );
};

export default Face;
