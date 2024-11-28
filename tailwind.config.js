/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'offWhite': '#EFF4F5',
        'pureRed' : "#FF0000",
        'darkGreen' : "#006400"
      },
      textColor: {
        'pureRed' : "#FF0000",
        'darkGreen' : "#006400",
      },
      boxShadow: {
        "3d" : "10px 10px 15px rgb(192, 183, 183), -10px -10px 15px #ffff"
      }
    },
  },
  plugins: [],
};
