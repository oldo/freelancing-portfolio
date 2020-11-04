const TYPESCRIPT = 'Typescript';
const JS = 'JS';
const REACT = 'React';
const REACT_NATIVE = 'React Native';
const EXPO = 'Expo';
const VIRTUALISED_GRID = 'Virtualised Grid';
const MATERIAL_UI = 'Material-UI';
const PAPER = 'React Native Paper';
const BOOTSTRAP = 'Bootstrap';
const PHP = 'PHP';
const LARAVEL = 'Laravel';
const API = 'API';
const WEBSITE = 'Website';
const JEKYLL = 'Jekyll';
const PYTHON = 'Python';
const SCRAPING = 'Web Scraping';
const EMAIL = 'Automated Emails';
const NEXT_JS = 'Next.js';
const VERCEL = 'Vercel';

const data = [
  {
    title: `Self Booking Tool`,
    tech: [REACT, TYPESCRIPT, MATERIAL_UI],
    text: [
      `Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit amet fermentum.`,
      `Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Donec sed odio dui.`,
    ],
  },
  {
    title: `Reservation Management Calendar`,
    tech: [REACT, JS, VIRTUALISED_GRID],
    text: [
      `Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit amet fermentum.`,
    ],
  },
  {
    title: `Bookex Business Mobile App`,
    tech: [REACT_NATIVE, JS, EXPO, PAPER],
    text: [
      `Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit amet fermentum.`,
      `Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Donec sed odio dui.`,
    ],
  },
  {
    title: `Bookinglayer Frontoffice`,
    tech: [REACT, JS, BOOTSTRAP],
    text: [
      `Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit amet fermentum.`,
      `Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Donec sed odio dui.`,
    ],
  },
  {
    title: `Housekeeping Management Module`,
    tech: [REACT, JS],
    text: [
      `Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit amet fermentum.`,
      `Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Donec sed odio dui.`,
    ],
  },
  {
    title: `Rate Management Module`,
    tech: [REACT, JS],
    text: [
      `Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit amet fermentum.`,
      `Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Donec sed odio dui.`,
    ],
  },
  {
    title: `Public API Schema Design`,
    tech: [PHP, LARAVEL, API],
    text: [
      `Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit amet fermentum.`,
    ],
  },
  {
    title: `3rd Party Integrations`,
    tech: [JS, TYPESCRIPT, PHP, LARAVEL, API],
    text: [
      `Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit amet fermentum.`,
    ],
  },
  {
    title: `Bookex Sales Website`,
    tech: [WEBSITE, JS, JEKYLL],
    text: [
      `Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit amet fermentum.`,
    ],
  },
  {
    title: `Bookinglayer Sales Website`,
    tech: [WEBSITE, JS],
    text: [
      `Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit amet fermentum.`,
    ],
  },
  {
    title: `American Meteorological Society Journal Scraping`,
    tech: [PYTHON, SCRAPING, EMAIL],
    text: [
      `Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit amet fermentum.`,
    ],
  },
  {
    title: `This Portfolio Website 😎`,
    tech: [NEXT_JS, TYPESCRIPT, VERCEL],
    text: [
      `Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit amet fermentum.`,
    ],
  },
];

export default data;
