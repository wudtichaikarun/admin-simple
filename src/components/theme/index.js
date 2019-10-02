import Color from "color";

const blackColor = Color.hsl("#000000");
const primaryColor = Color.hsl("#2789FF");
const greyBlue = Color.hsl("#0A274A");

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px"
};

export const fonts = {
  pro: `"SF Pro Text", 'system-ui', 'Thonburi', 'Tahoma', 'sans-serif'`,
  noto: `"Noto Sans Thai UI", 'SF Pro Text', system-ui, Thonburi, Tahoma, sans-serif`
};

export const fontSizes = {
  xxxxs: "0.625rem", // 10 px
  xxxs: "0.75rem", // 12 px
  xxs: "0.8125rem", // 13 px
  xs: "0.875rem", // 14 px
  sm: "0.9375rem", // 15 px
  md: "1rem", // 16 px
  lg: "1.125rem", // 18 px
  xl: "1.25rem", // 20 px
  xxl: "1.5rem", // 24 px
  xxxl: "2.25rem" // 36 px
};

export const palette = {
  primaryLightest: "#F2F6FF",
  primaryLigthen: primaryColor.fade(0.5).string(),
  primary: primaryColor.string(),
  primaryDarker: "#004CFF",
  primaryDarkest: "#004EFF",
  primaryGradiant: "linear-gradient(294deg, #5bc6f0, #008cff 57%, #2e6ae3);",
  grey90: blackColor.fade(0.1).string(),
  grey80: blackColor.fade(0.2).string(),
  grey50: blackColor.fade(0.5).string(),
  grey40: blackColor.fade(0.6).string(),
  grey20: blackColor.fade(0.8).string(),
  grey10: blackColor.fade(0.9).string(),
  grey5: blackColor.fade(0.95).string(),
  tooltip: greyBlue.fade(0.5).string(),
  bgPrimary: "#F6F6F6",
  textPrimary: "#0b304f",
  border: "#ebedf4",
  error: "#F20000",
  success: "#12B398",
  finalStatus: "#FFA54B",
  primaryStatus: "#8F999D",
  secondaryStatus: "#31C3FA",
  sourceStatus: "#91D339",
  activelyStatus: "#FDE000"
};

export const space = {
  xxxs: "1px",
  xxs: "2px",
  xs: "5px",
  sm: "10px",
  md: "15px",
  lg: "20px",
  xl: "25px",
  xxl: "30px",
  xxxl: "50px"
};

export const elSize = {
  navHeight: "55px",
  subNavHeight: "50px",
  navWidth: "55px",
  expandMenuWidth: "200px",
  bookingListWidth: "250px"
};

export const elFormat = {
  date: "YYYY-MM-DD HH:mm:ss"
};

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`
};
