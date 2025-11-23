/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                gold: {
                    100: '#F5E6C4',
                    200: '#EBD499',
                    300: '#E0C26E',
                    400: '#D6B043',
                    500: '#C5A059', // Standard Metallic Gold
                    600: '#9E8047',
                    700: '#786136',
                },
                cream: {
                    DEFAULT: '#FAFAFA', // Soft Cream
                    100: '#FFFFFF',
                    200: '#F5F5F5',
                }
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Inter"', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
