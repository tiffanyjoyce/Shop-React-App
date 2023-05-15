/** @type {import('tailwindcss').Config} */
/* ^ ignore this line ^ -- its used for TypeScript only */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};

