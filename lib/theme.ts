// exports the tailwind theme
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../tailwind.config.js';

export default resolveConfig(tailwindConfig).theme;
