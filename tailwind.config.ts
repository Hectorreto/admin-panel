import type { Config } from 'tailwindcss';

const Colors = {
  primary: {
    primary: '#6344AD',
    50: '#F0ECFA',
    100: '#DBD0F6',
    200: '#BAA2F4',
    300: '#9A7CE3',
    400: '#7A59CB',
    500: '#4F2F9C',
    600: '#391A83',
    700: '#290C6D',
    800: '#180449',
    900: '#0F0132',
  },
  secondary: {
    secondary: '#08A6B0',
    50: '#E1F4F5',
    100: '#C5EAEC',
    200: '#95DBDF',
    300: '#6ACBD0',
    400: '#4BB9BF',
    500: '#2EA2A9',
    600: '#298F95',
    700: '#17787E',
    800: '#094F54',
    900: '#022E31',
  },
  neutral: {
    '00': '#FEFEFE',
    '50': '#FBFBFB',
    '100': '#F2EFF8',
    '200': '#E2E0E8',
    '300': '#D5D2DD',
    '400': '#C6C4CF',
    '500': '#A3A0B0',
    '600': '#86848F',
    '700': '#605E69',
    '800': '#3D3B46',
    '900': '#232129',
  },
  alert: {
    green: '#FBFBFB',
    red: '#F2EFF8',
  },
  chart: {
    A: '#F8A07B',
    A1: '#F17F4F',
    B: '#A3A0B0',
    B1: '#B6AEF0',
    C: '#C5EAEC',
    C1: '#6ACBD0',
    D: '#232129',
    D1: '#232129',
    E: '#F5ACD6',
    E1: '#F991CC',
  },
};

const Shadows = {
  sm: `0px 2px 4px 0px ${Colors.primary[900]}${255 * 0.2}`,
  md: `0px 4px 8px 0px ${Colors.primary[900]}${255 * 0.2}`,
  lg: `0px 6px 12px 0px ${Colors.primary[900]}${255 * 0.2}`,
  xl: `0px 8px 16px 0px ${Colors.primary[900]}${255 * 0.2}`,
};

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: Colors,
    boxShadow: Shadows,
  },
  plugins: [],
};

export default config;
