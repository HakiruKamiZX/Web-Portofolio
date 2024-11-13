/** @type {import('postcss-load-config').Config */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},  // Adds vendor prefixes for better cross-browser compatibility
  },
};

export default config;
