/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: { 


      boxShadow: {
        'inner-sm': 'inset 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'inner': 'inset 0 0px 8px 2px rgba(0, 0, 0, 0.06)',
        'inner-md': 'inset 0 4px 17px 10px rgba(0, 0, 0, 0.1)',
        'inner-lg': 'inset 0px 2px 13px 4px rgba(0, 0, 0, 0.1)',
        'inner-xl': 'inset 0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      },
      colors: {
        customPurple: '#2F1C48',
        purpleLigth: '#7A21B1',
        overlay: '#6AA392',
        laranja: '#EE654A',
        mindaro: '#E9F995',
        roxo: '#4C2A85',
        blueBt: '#0057FF',
        azul: '#0F687C',
        
      },
     },

     fontFamily: {
      'sans': ['Inter'],
      'arya':['Arya'],
      'amaranth' :['Amaranth'],
      'caveat':['Caveat'],
      'karla': ['Karla'],
      'plus' : ['Plus Jakarta Sans'],
      'antonio' : ['Antonio'],
      'logo' : ['Allerta Stencil'],
    },
  },
  plugins: [],
}

