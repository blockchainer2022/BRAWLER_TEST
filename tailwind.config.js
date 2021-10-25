module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        DEFAULT: "10px",
      },
      backgroundColor: () => ({
        primary: "#333333",
        yellow: "#FFBD14",
        dark: "#000000",
        secondary: "#971B32",
        darkPrimary: "#1E1E1E",
      }),
      borderColor: {},
      textColor: {
        primary: "#C42746",
        green: "#46DC06",
        white: "#fff",
        yellow: "#FFBE15",
        light: "#E5E5E5",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1140px",
          xl: "1140px",
          "2xl": "1320px",
        },
      },
      fontFamily: {
        sans: "Pixelar Regular W01 Regular",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
