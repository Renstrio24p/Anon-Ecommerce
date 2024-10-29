import { PluginAPI } from "tailwindcss/types/config";

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      backgroundImage: {},
      height: {
        'full-screen': '100vh',
      },
      width: {
        'recaptcha': '100%',
      },
      textColor: {
        'spanish-gray': "hsl(0, 0%, 60%)",
        'sonic-silver': "hsl(0, 0%, 47%)",
        'eerie-black': "hsl(0, 0%, 13%)",
        'salmon-pink': "hsl(353, 100%, 78%)",
        'sandy-brown': "hsl(29, 29%, 29%)",
        'bittersweet': "hsl(0, 100%, 52%)",
        'ocean-green': "hsl(152, 51%, 52%)",
        'davys-gray': "hsl(0, 0%, 33%)",
        'cultured': "hsl(0, 0%, 93%)",
        'white': "hsl(0, 0%, 100%)",
        'onyx': "hsl(0, 0%, 27%)",
      },
      backgroundColor: {
        'spanish-gray': "hsl(0, 0%, 60%)",
        'sonic-silver': "hsl(0, 0%, 47%)",
        'eerie-black': "hsl(0, 0%, 13%)",
        'salmon-pink': "hsl(353, 100%, 78%)",
        'sandy-brown': "hsl(29, 29%, 29%)",
        'bittersweet': "hsl(0, 100%, 52%)",
        'ocean-green': "hsl(152, 51%, 52%)",
        'davys-gray': "hsl(0, 0%, 33%)",
        'cultured': "hsl(0, 0%, 93%)",
        'white': "hsl(0, 0%, 100%)",
        'onyx': "hsl(0, 0%, 27%)",
      },
      fontSize: {
        'fs-1:': '1.563rem',
        'fs-2': '1.375rem',
        'fs-3': '1.25rem',
        'fs-4': '1.125rem',
        'fs-5': '1rem',
        'fs-6': '0.938rem',
        'fs-7': '0.875rem',
        'fs-8': '0.813rem',
        'fs-9': '0.75rem',
        'fs-10': '0.688rem',
        'fs-11': '0.625rem',
      },
      fontWeight: {
        'weight-300': '300',
        'weight-400': '400',
        'weight-500': '500',
        'weight-600': '600',
        'weight-700': '700',
      },
      borderRadius: {
        'radius-md': '10px',
        'radius-sm': '5px'
      },
      borderColor: {
        'cultured': "hsl(0, 0%, 93%)",
      },
      transition: {
        'transition-timing': '0.2s ease'
      },
      keyframes: {
        popup: {
          '0%': {
            transform: 'scale(0.5)',
            opacity: '0',
            visibility: 'hidden',
            pointerEvents: 'none'
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
            visibility: 'visible',
            pointerEvents: 'all'
          },
        },
        scaleup: {
          '0%': {
            transform: 'scale(0.9)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
        slideInOut: {
          '0%': { // Starting point of the animation
            transform: 'translateX(0)',
            opacity: '1',
            visibility: 'visible',
          },
          '45%': { // Midpoint of the animation
            transform: 'translateX(0)',
            opacity: '1',
            visibility: 'visible',
          },
          '100%': { // Ending point of the animation
            transform: 'translateX(calc(-100% - 20px))',
            opacity: '0',
            visibility: 'hidden',
          },
          '50%': {
            'transform': 'translateX(0)',
            'opacity': '1',
            'visibility': 'visible',
          },
          '95%': {
            'transform': 'translateX(0)',
            'opacity': '1',
            'visibility': 'visible',
          }
        },
      },
      animation: {
        popup: 'popup 0.5s ease-out forwards',
        slideInOut: 'slideInOut 10s infinite',
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px'
    }
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        'span': {
          display: 'inline-block'
        },
        'button': {
          font: 'inherit',
        },
        'while(img,i.bx,button,a)': {
          display: 'block'
        },
        'html': {
          overscrollBehavior: 'smooth',
        },
        'input': {
          display: 'block',
          width: '100%',
          font: 'inherit',
        },
        'input::placeholder': {
          font: 'inherit',
        },
        body: {
          backgroundColor: 'white',
        },
        'body::-webkit-scrollbar': {
          width: '15px'
        },
        'body::-webkit-scrollbar-track': {
          backgroundColor: 'white',
          borderLeft: '1px solid hsl(0, 0%, 93%)',
        },
        'body::-webkit-scrollbar-thumb': {
          backgroundColor: 'hsl(0, 0%, 80%)',
          borderRadius: '10px',
          border: '3px solid white',
        },
        'body::-webkit-scrollbar-thumb:hover': {
          backgroundColor: 'hsl(0, 0%, 70%)',
        },
        'modal.closed': {
          display: 'none',
        }
      })
    }
  ],
};
