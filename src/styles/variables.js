// MEDIA QUERIES
//
const deviceSize = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS_min: `(min-width: ${deviceSize.mobileS})`,
  mobileM_min: `(min-width: ${deviceSize.mobileM})`,
  mobileL_min: `(min-width: ${deviceSize.mobileL})`,
  tablet_min: `(min-width: ${deviceSize.tablet})`,
  laptop_min: `(min-width: ${deviceSize.laptop})`,
  laptopL_min: `(min-width: ${deviceSize.laptopL})`,
  desktop_min: `(min-width: ${deviceSize.desktop})`,
  desktopL_min: `(min-width: ${deviceSize.desktop})`,
  mobileS_max: `(max-width: ${deviceSize.mobileS})`,
  mobileM_max: `(max-width: ${deviceSize.mobileM})`,
  mobileL_max: `(max-width: ${deviceSize.mobileL})`,
  tablet_max: `(max-width: ${deviceSize.tablet})`,
  laptop_max: `(max-width: ${deviceSize.laptop})`,
  laptopL_max: `(max-width: ${deviceSize.laptopL})`,
  desktop_max: `(max-width: ${deviceSize.desktop})`,
  desktopL_max: `(max-width: ${deviceSize.desktop})`,
};