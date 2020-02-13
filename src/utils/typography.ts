import Typography from "typography";

const MOBILE_MEDIA_QUERY = "@media only screen and (max-width:575px)";
const TABLET_MEDIA_QUERY = "@media only screen and (max-width:992px)";

const options = {
  baseFontSize: "18px",
  baseLineHeight: 1.45,
  blockMarginBottom: 0,
  headerFontFamily: ["Playfair Display", "sans-serif"],
  bodyFontFamily: ["Cabin", "sans-serif"],
  scaleRatio: 2.15,
  googleFonts: [
    {
      name: "Source Sans Pro",
      styles: ["300", "400", "500", "600", "700", "800"],
    },
    {
      name: "Playfair Display",
      styles: ["300", "400", "500", "600", "700", "800"],
    },
    {
      name: "Cabin",
      styles: ["300", "400", "500", "600", "700", "800"],
    },
  ],
  overrideStyles: () => {
    return {
      h1: { fontSize: "37px", lineHeight: 1.6 },
      h2: { fontSize: "33px", lineHeight: 1.05 },
      h3: { fontSize: "29px", lineHeight: 1.2 },
      p: { fontSize: "20px", lineHeight: 1.2 },
      [TABLET_MEDIA_QUERY]: {
        // Make baseFontSize on mobile 17px.
        html: {
          fontSize: `${(17 / 16) * 100}%`,
        },
      },
      [MOBILE_MEDIA_QUERY]: {
        // Make baseFontSize on mobile 16px.
        html: {
          fontSize: `${(16 / 16) * 100}%`,
        },
      },
    };
  },
};

const typography = new Typography(options);

// Hot reload typography in development.
if (process.env.NODE_ENV !== "production") {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
