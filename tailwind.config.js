/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/Navbar.jsx",
    "./src/components/pages/LandingPage.jsx",
    "./src/components/pages/SkinTrivia.jsx",
    "./src/components/pages/InputSkinTrivia.jsx",
    "./src/components/Footer.jsx",
    "./src/components/pages/LoginPage.jsx",
  ],
  theme: {
    extend: {
      colors: {
        primary: {"0": "#013B31", "1":"#F0EFE1", "2":"#3BB8AA", "3":"#D4D2C5", "4":"#5EEEDD"}
      }
    },
    fontFamily: {
      'body': [
          'Inter'
      ],
      'sans': [
          'Inter', 
      ]
    }
  },
  plugins: [],
}
