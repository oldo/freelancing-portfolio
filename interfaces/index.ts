export enum Views {
  HOME,
  ABOUT,
  WORK,
  CONTACT,
}
export type SetActiveView = (view: Views) => void;

export enum ImageSide {
  LEFT,
  RIGHT,
  NONE,
}
export type SetImageSide = (imageSide: ImageSide) => void;
