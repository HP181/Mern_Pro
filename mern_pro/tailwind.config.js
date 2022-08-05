module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['"Nunito Sans"', ' sans-serif']
      }
      // font-family: 'Nunito Sans', sans-serif;
    },
    screens: {
      'sm': {'min': '280px', 'max': '375px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '375px', 'max': '768px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '768px', 'max': '1024px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1024px', 'max': '1458px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      // '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}