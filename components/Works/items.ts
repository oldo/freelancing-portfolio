import { Technologies } from '../../typescript/enums';

const images = [
  {
    type: 'image',
    src: '/temp/unsplash-1.jpg',
    width: 4608,
    height: 3072,
    alt: 'image 1',
    caption: 'test',
  },
  {
    type: 'image',
    src: '/temp/unsplash-2.jpg',
    width: 5184,
    height: 3456,
    alt: 'image 2',
    caption: 'test',
  },
  {
    type: 'image',
    src: '/temp/unsplash-3.jpg',
    width: 5472,
    height: 3648,
    alt: 'image 3',
    caption: 'test',
  },
  {
    type: 'image',
    src: '/temp/unsplash-4.jpg',
    width: 5438,
    height: 3625,
    alt: 'image 4',
    caption: 'test',
  },
  {
    type: 'video',
    src: '/works/test/test-movie1.mp4',
    width: 5438,
    height: 3625,
    alt: 'image 4',
    caption: 'test',
  },
];

export const items = [
  {
    id: 'reservation-calendar',
    title: 'Reservation Management Calendar',
    images: [
      {
        src: '/works/calendar-1.jpg',
        type: 'image',
        width: 2880,
        height: 1800,
        alt: 'Calendar 1',
      },
      {
        src: '/works/calendar-2.jpg',
        type: 'image',
        width: 2880,
        height: 1800,
        alt: 'Calendar 2',
      },
      {
        src: '/works/calendar-3.jpg',
        type: 'image',
        width: 2880,
        height: 1800,
        alt: 'Calendar 3',
      },
    ],
    technologies: [
      Technologies.REACT,
      Technologies.JS,
      Technologies.STYLED_COMPONENTS,
      Technologies.REACT_VIRTUALIZED,
    ],
    description: [
      `A calendar component for making and managing bookings.`,
      `Bookings can be edited by dragging and dropping into different rooms and by extending length to extend duration of stay.`,
      `Calendar grid is 'virtualized' so that only what is in view is rendered at any time. This allows for extremely massive inventories on an infinite timescale to be displayed in a single view without running into performance issues.`,
    ],
  },
  {
    id: 'booking-engine',
    title: 'Booking Engine',
    images: [
      {
        src: '/works/booking-engine-1.jpg',
        type: 'image',
        width: 2880,
        height: 1800,
        alt: 'Booking Engine 1',
      },
      {
        src: '/works/booking-engine-2.jpg',
        type: 'image',
        width: 2880,
        height: 1800,
        alt: 'Booking Engine 2',
      },
      {
        src: '/works/booking-engine-3.jpg',
        type: 'image',
        width: 2880,
        height: 1800,
        alt: 'Booking Engine 3',
      },
      {
        src: '/works/booking-engine-4.jpg',
        type: 'image',
        width: 2880,
        height: 1800,
        alt: 'Booking Engine 4',
      },
    ],
    description: [
      `A frontoffice booking tool to allow accommodation providers to accept direct bookings for their inventory.`,
      `The customer enters their search criteria, and available options are shown in both a list and map view. A detail view shows further information about the listing and then guest information can be collected and payment made via a Stripe integration.`,
    ],
    technologies: [
      Technologies.REACT,
      Technologies.TS,
      Technologies.MATERIAL_UI,
      Technologies.FORMIK,
      Technologies.STRIPE,
    ],
  },
  {
    id: 'bookex-mobile-app',
    title: 'Bookex Business Mobile App',
    images: [
      {
        src: '/works/business-app-1.jpg',
        type: 'image',
        width: 2880,
        height: 1800,
        alt: 'Business App 1',
      },
      {
        src: '/works/business-app-2.jpg',
        type: 'image',
        width: 2880,
        height: 1800,
        alt: 'Business App 2',
      },
      {
        src: '/works/business-app-3.jpg',
        type: 'image',
        width: 2880,
        height: 1800,
        alt: 'Business App 3',
      },
    ],
    technologies: [
      Technologies.REACT_NATIVE,
      Technologies.TS,
      Technologies.REACT_NATIVE_PAPER,
    ],
    description: [
      `A mobile application to allow Bookex clients to manage their reservations and housekeeping tasks when on the move.`,
    ],
  },
  {
    id: 'bookinglayer-frontoffice',
    title: 'Bookinglayer Frontoffice',
    images: [
      {
        src: '/works/BL-FO-1.jpg',
        type: 'image',
        width: 2880,
        height: 1800,
        alt: 'Bookinglayer Frontoffice 1',
      },
      {
        src: '/works/BL-FO-2.jpg',
        type: 'image',
        width: 2880,
        height: 1800,
        alt: 'Bookinglayer Frontoffice 2',
      },
      {
        src: '/works/BL-FO-3.jpg',
        type: 'image',
        width: 2880,
        height: 1800,
        alt: 'Bookinglayer Frontoffice 3',
      },
      {
        src: '/works/BL-FO-4.jpg',
        type: 'image',
        width: 2880,
        height: 1800,
        alt: 'Bookinglayer Frontoffice 4',
      },
      {
        src: '/works/BL-FO-5.jpg',
        type: 'image',
        width: 2880,
        height: 1800,
        alt: 'Bookinglayer Frontoffice 5',
      },
    ],
    technologies: [Technologies.REACT, Technologies.JS, Technologies.BOOTSTRAP],
    description: [
      `A frontoffice booking interface for reservation of package based holidays for surf camps.`,
      `Of particular interest is the package configurator which allows guests to specify exactly when in their stay they would like surf lessons, gear rental, excursions, etc.`,
      `Relevant items can also be shown and upsold to the customer depending on the products that they have in their cart.`,
    ],
  },
  {
    id: 'public-api',
    title: 'Public API Schema Design & Documentation Site',
    images: [
      {
        src: '/works/public-api-1.jpg',
        type: 'image',
        width: 2880,
        height: 1800,
        alt: 'Bookex Public API 1',
      },
      {
        src: '/works/public-api-2.jpg',
        type: 'image',
        width: 2880,
        height: 1800,
        alt: 'Bookex Public API 2',
      }
    ],
    technologies: [Technologies.API, Technologies.LARAVEL],
    description: [
      `Schema design and <a href="https://developers.bookex.io/" target="_blank" rel="noopener noreferrer">API documentation</a> for Bookex's public API, allowing clients to create their own custom booking experience.`,
    ],
  },
  {
    id: 'my-portfolio',
    title: 'This Portfolio site!',
    images: [{
      src: '/works/portfolio-1.jpg',
      type: 'image',
      width: 2880,
      height: 1800,
      alt: 'Portfolio 1',
    }],
    technologies: [
      Technologies.TS,
      Technologies.NEXTJS,
      Technologies.TAILWIND,
      Technologies.FRAMER,
    ],
    description: [
      `This portfolio website. <a href="https://github.com/oldo/freelancing-portfolio" target="_blank" rel="noopener noreferrer">Checkout the code</a> 🤓`,
    ],
  },
];

export interface Image {
  type: string;
  src: string;
  alt: string;
  height: number;
  width: number;
  caption?: string;
}

export interface Item {
  id: string;
  title: string;
  description: string[];
  images: Image[];
  technologies: Technologies[];
}
