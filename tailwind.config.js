/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: '#b553fc',

                    secondary: '#f9c0cc',

                    accent: '#bef264',

                    neutral: '#292037',

                    'base-100': '#f3f4f6',

                    info: '#519bcd',

                    success: '#34d399',

                    warning: '#edcc4a',

                    error: '#ee688e',
                },
            },
        ],
    },
    plugins: [require('daisyui')],
};