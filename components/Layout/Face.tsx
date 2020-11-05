import React from 'react';
import Image from 'next/image';
import cx from 'classnames';
import { ImageSide } from '../../interfaces';

interface FaceProps {
  imageSide: ImageSide;
}

const Face: React.FC<FaceProps> = ({ imageSide }) => {
  const imageClasses = cx({
    ['left-0']: imageSide === ImageSide.LEFT,
    ['right-0']: imageSide === ImageSide.RIGHT,
  });

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
