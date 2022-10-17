export const colors = {
  white: '#FFFFFF',
  black: '#000000',
  brand: '#DA055C',
  gray: '#ABABAB',
  lightgray: '#F3F3F3',
  darkgray: '#909090 ',
};

export const deviceSizes = {
  mobile: '375px',
  tablet: '768px',
  desktop: '1024px',
};

export const device = {
  mobile: `@media only screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `@media only screen and (min-width: ${deviceSizes.tablet}) and (max-width: ${deviceSizes.desktop})`,
  desktop: `@media only screen and (min-width: ${deviceSizes.desktop})`,
};
