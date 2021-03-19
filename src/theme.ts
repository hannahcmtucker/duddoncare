const colors = {
  // Neutral Colors
  white: "#fff",
  black: "#000",
  ivoryBlack: "#1D2731",
  // Primary Colors
  skyBlue: "#328CC1",
  prussianBlue: "#0B3C5D",
  // Secondary Colors
  gold: "#D9B310",
};

const theme = {
  fontSize: {
    nano: "14px",
    centi: "16px",
    deci: "18px",
    hecto: "20px",
    kilo: "24px",
    mega: "26px",
    giga: "32px",
  },
  spacing: {
    small: " 8px",
    medium: "12px",
    normal: "16px",
    large: "24px",
    xLarge: "32px",
  },
  colors: {
    primary: colors.skyBlue,
    primaryAlt: colors.prussianBlue,
    secondary: colors.gold,
    text: colors.ivoryBlack,
  },
  media: {
    small: "320px",
    medium: "375px",
    large: "720px",
    xLarge: "900px",
    xxLarge: "1050px",
    xxxLarge: "1440px",
  },
};

export default theme;