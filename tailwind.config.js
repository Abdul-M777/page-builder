module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: { display: ['group-hover'] },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // ...
    ('@tailwindcss/forms'),
  ],
};
