/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  corePlugins: {
    preflight: true,
  },
}
