export enum Views {
  HOME = '/',
  ABOUT = '/about',
  WORK = '/works',
  CONTACT = '/contact',
}
export type SetActiveView = (view: Views) => void;
