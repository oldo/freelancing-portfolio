import { ImageSide } from '../interfaces';

const toggleImageSide = (imageSide: ImageSide) =>
  imageSide === ImageSide.RIGHT ? ImageSide.LEFT : ImageSide.RIGHT;

export { toggleImageSide };
