export enum Views {
  HOME = '/',
  ABOUT = '/about',
  WORK = '/work',
  CONTACT = '/contact',
}
export type SetActiveView = (view: Views) => void;
