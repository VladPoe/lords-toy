export const breakpoints = {
  M: 540,
  L: 780,
  XL: 1020,
};

export const adaptive = {
  M: `@media only screen and (min-width: ${breakpoints.M}px)`,
  L: `@media only screen and (min-width: ${breakpoints.L}px)`,
  XL: `@media only screen and (min-width: ${breakpoints.XL}px)`,
};
