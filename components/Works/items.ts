import { Technologies } from '../../typescript/enums';

const images = [
  {
    src: '/temp/unsplash-1.jpg',
    width: 4608,
    height: 3072,
    alt: 'image 1',
  },
  {
    src: '/temp/unsplash-2.jpg',
    width: 5184,
    height: 3456,
    alt: 'image 2',
  },
  {
    src: '/temp/unsplash-3.jpg',
    width: 5472,
    height: 3648,
    alt: 'image 3',
  },
  {
    src: '/temp/unsplash-4.jpg',
    width: 5438,
    height: 3625,
    alt: 'image 4',
  },
];

export const items = [
  {
    id: 'booking-engine',
    title: 'Booking Engine',
    images: [images[0], images[1], images[2], images[3]],
    description: `
Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vestibulum id ligula porta felis euismod semper. Sed posuere consectetur est at lobortis. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.

Maecenas sed diam eget risus varius blandit sit amet non magna. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Aenean lacinia bibendum nulla sed consectetur.
    `,
    technologies: [
      Technologies.REACT,
      Technologies.TS,
      Technologies.MATERIAL_UI,
    ],
  },
  {
    id: 'item-2',
    title: 'Parturient Pellentesque Malesuada',
    images: [images[1], images[0], images[2], images[3]],
    technologies: [
      Technologies.REACT,
      Technologies.TS,
      Technologies.MATERIAL_UI,
    ],
    description: `
Cras justo odio, dapibus ac facilisis in, egestas eget quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

Nullam quis risus eget urna mollis ornare vel eu leo. Etiam porta sem malesuada magna mollis euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed posuere consectetur est at lobortis. Curabitur blandit tempus porttitor.
    `,
  },
  {
    id: 'item-3',
    title: 'Elit Cras',
    images: [images[2], images[0], images[1], images[3]],
    technologies: [
      Technologies.REACT,
      Technologies.TS,
      Technologies.MATERIAL_UI,
    ],
    description: `
Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo.

Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas faucibus mollis interdum.
    `,
  },
  {
    id: 'item-4',
    title: 'Ipsum Vestibulum Aenean',
    images: [images[3], images[0], images[1], images[2]],
    technologies: [
      Technologies.REACT,
      Technologies.TS,
      Technologies.MATERIAL_UI,
    ],
    description: `
Nulla vitae elit libero, a pharetra augue. Curabitur blandit tempus porttitor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
    `,
  },
];

export interface Item {
  id: string;
  title: string;
  description: string;
  images: {
    src: string;
    alt: string;
    height: number;
    width: number;
  }[];
  technologies: Technologies[];
}
