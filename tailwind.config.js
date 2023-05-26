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
            animation: {
                fadeIn: "fadeIn 2s ease-in forwards"
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 }
                }
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
                // sans: ['Inter var', ...defaultTheme.fontFamily.sans],
                'roboto': ['roboto', 'sans-serif']
            },
            // margin-right:
            spacing: {
                "x": "10%",
                "y": "5%",
                "Z": "1%",
                "a": "5rem",
            },
            fontSize: {
                sm: ['14px', '20px'],
                base: ['16px', '24px'],
                lg: ['20px', '28px'],
                xl: ['24px', '32px'],
            }
        },
    },
    plugins: [],
});
