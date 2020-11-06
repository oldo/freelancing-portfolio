export enum Views {
  HOME = '/',
  ABOUT = '/about',
  WORK = '/works',
  CONTACT = 'mailto:oldo.nicho@gmail.com',
}
export type SetActiveView = (view: Views) => void;
