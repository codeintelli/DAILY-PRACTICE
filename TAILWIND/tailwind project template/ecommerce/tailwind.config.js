module.exports = {
  purge: ["./*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        "8xl": "6rem",
      },
      spacing: {
        144: "36rem",
      },
      fontFamily: {
        gotham: ["Gotham Pro", "sans-serif"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1590px",
      },
      colors: {
        customColor: "#fc5c65",
        customColor2: "#fd9644",
        customColor3: "#fed330",
        customSuccess: "#26de81",
        customDanger: "#eb4d4b",
        customPrimary: "#4b7bec",
        customLight: "#45aaf2",
        customPrimaryTwo: "#a55eea",
        customDark: "#2c3e50",
        customDark_10: "#95a5a6",
        customText: "#ecf0f1",
        customPurple: "#9b59b6",
        customGreen: "#16a085",
        customBlueLight: "#9c88ff",
        customLightTwo: "#dcdde1",
        customBlackDark: "#353b48",
        white: "#FFFFFF",
        orange: {
          100: "#FEEDD3",
          200: "#FE7865",
          300: "#E6604D",
          400: "#F55C46",
        },
        blue: {
          100: "#F5F8FC",
          200: "#EFEDFE",
          300: "#5BD5E6",
        },
        green: {
          100: "#FFFBF8",
          200: "#E8FBF7",
          300: "#5BE6B0",
        },
        gray: {
          100: "#ECECEE",
          200: "#DFDAFE",
          300: "#83838B",
          400: "#F2F2F4",
        },
        pink: {
          100: "#FEDAE8",
        },
        black: {
          100: "#2C2E3F",
          200: "#141517",
          300: "#2C2E3F",
          400: "#1D2539",
        },
        yellow: {
          100: "#FEC365",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
