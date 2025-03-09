/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    `./src/sections/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        titillium: ['"Titillium Web"', "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      colors: {
        darkBlue: "#132433",
      },
      screens: {
        "max-lg": {max: "1024px"},
        "max-md": { max: "767px" },
        "max-sm": { max: "639px" },
        "max-sm-button": { max: "425px" },
        "max-call-screen": { max: "955px" },
        "max-services-section": { max: "930px" },
      },
      backgroundImage: {
        introduction: "url('../images/introduction-background.png')",
        "about-us": "url('../images/about-us-background.png')",
        "contact-us": "url('../images/contact-us-background.png')",
        services: "url('../images/services-background.png')",
        "custom-gradient":
          "linear-gradient(to right, #FFFFFF -70%, #005245 50%, #FFFFFF 170%)",
        "custom-partners": "url('../images/partners_bg.png')",
      },
    },
  },
  plugins: [],
};
