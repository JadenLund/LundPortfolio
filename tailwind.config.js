/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            perspective: {
                '1000': '1000px',
            },
            animation: {
                fadeIn: "fadeIn 2s ease-in forwards"
            },
            transitionProperty: {
                'spacing': 'margin, padding',
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 }
                }
            },
            boxShadow: {
                'custom': '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
            },
            colors: {
                'nature-green': '#89B098',
                'selected-green': '#72A184',
                'clicked-green': '#4A6956',
                'primary': "#89b098",
                'secondary': '#7ca490',
                'tertiary': '#4f707',
                'extra': '#2f4858',
                'accent': '#320e3b',
            },
            fontFamily: {
                'roboto': ['roboto', 'sans-serif']
            },
            spacing: {
                "w": "100%",
                "x": "10%",
                "y": "5%",
                "Z": "1%",
                "a": "5rem",
                "b": "300px",
                "c": "200px",
                "d": "120px"
            },
            fontSize: {
                sm: ['14px', '20px'],
                base: ['16px', '24px'],
                lg: ['20px', '28px'],
                xl: ['24px', '32px'],
            }
        },
    },
});
