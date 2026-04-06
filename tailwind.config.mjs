/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#d96c31',
        secondary: '#24344d',
        accent: '#2d7f7a',
        background: '#f4efe7',
      },
    },
  },
};
