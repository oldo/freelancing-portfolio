import Image from 'next/image';
import React from 'react';
import { Image as ImageInterface } from '../items';

interface SelectedWorkImageProps {
  image: ImageInterface;
}

const SelectedWorkImage: React.FC<SelectedWorkImageProps> = ({ image }) => {
  return (
    <Image
      src={image.src}
      className="rounded-lg"
      height={image.height}
      width={image.width}
      alt={image.alt}
    />
  );
};

export default SelectedWorkImage;
