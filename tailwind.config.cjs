const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#FC4747",
        "dark-blue": "#10141E",
        "grayish-blue": "rgb(90, 105, 143)",
        "semi-dark-blue": "#161D2F",
        "pure-white": "#FFFFFF",
        "white-smoke": "#D3D3D3",
        "white-dust": "#8C8C8C",
      },
      gridTemplateColumns: {
        mobile: "repeat(auto-fill, minmax(150px, 1fr))",
        desktop: "repeat(auto-fill, minmax(175px, 1fr))",
      },
      backgroundImage: {
        "gradient-text":
          "bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400",
      },
    },
  },
  plugins: [Myclass],
};
