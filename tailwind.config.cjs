/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-1": "#2289FF",
        "blue-2": "#0FA8E2",
        "dark-blue": "#14395B",
        "blue-3": "#1E62E8",
        "blue-4": "#186AA5",
        "color-5": "#707070",
        "grey-font": "#303030",
        "badge-green": "#78C720",
        text: "8D9598"
      }
    }
  },
  plugins: []
};
