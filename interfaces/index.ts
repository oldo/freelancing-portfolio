export enum Views {
  HOME = '/',
  ABOUT = '/about',
  WORK = '/work',
  CONTACT = '/contact',
}
export type SetActiveView = (view: Views) => void;

export enum ImageSide {
  LEFT,
  RIGHT,
  NONE,
}
export type SetImageSide = (imageSide: ImageSide) => void;
