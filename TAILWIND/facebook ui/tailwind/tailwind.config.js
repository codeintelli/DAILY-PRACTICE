module.exports = {
  purge: ["../*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "dark-main": "#18191A",
        "dark-second": "#242526",
        "dark-third": "#3a3b3c",
        "dark-txt": "#b8bbbf",
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
      transform: ["group-hover"],
      scale: ["group-hover"],
    },
  },
  plugins: [],
};
