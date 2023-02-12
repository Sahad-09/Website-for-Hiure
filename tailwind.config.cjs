/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['Roboto'] 
      },
      backgroundImage: {
        'hero-image': 'url("https://media2.giphy.com/media/xTiTnxpQ3ghPiB2Hp6/giphy.gif?cid=ecf05e47f3he0zzdgm0d3nlf2soxejgz68uixnxvuf49kj05&rid=giphy.gif&ct=g")'

      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: false,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "",
  },
}
