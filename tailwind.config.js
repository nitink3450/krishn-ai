/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // For Custom screens
    screens: {
      '5xx': { "max": '500px' },
      // => @media (max-width: 500px) { ... }

      '4xx': { "max": '400px' },
      // => @media (max-width:360px) { ... }

      '3xxx': { "max": '360px' },
      // => @media (max-width: 360px) { ... }
      
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
       // custom colors for tailwind classes
      colors: {
        white: "#ffffff",
        "light-green": "#37E6C6",
        "faded-white": {
          100: "#ffffff1a",
          200: "#ffffff0d",
        },
        "bg-dark": {
          200: "#191B1D",
          300: "#060707",
        },
      },
    },
    fontFamily: {
      Mohave: ["Mohave", "sans-serif"],
      Montserrat: ["Montserrat", "sans-serif"],
    },
  },
  // Daisyui plugin to chnage componnets
  daisyui: {
    themes: false,
    themes: [
      {
        // custom colors for daisyuo componnets:
        mytheme: {
          primary: "#37e6c6",
          warning: "#FBBD23",
          secondary: "#D926A9",
          accent: "#1FB2A6",
          neutral: "#191D24",
          "base-100": "#2A303C",
          ghost: "#fff0",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}