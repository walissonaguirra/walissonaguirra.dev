const path = require('path');

const projectDir = path.join(__dirname, '..');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    `${projectDir}/themes/**/layouts/**/*.html`,
    `${projectDir}/layouts/**/*.html`,
    `${projectDir}/content/**/*.html`,
    `${projectDir}/content/**/*.md`,
    `${projectDir}/public/**/*.html`,
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Ubuntu"', '-apple-system', 'BlinkMacSystemFont', 'avenir next', 'avenir', 'segoe ui', 'helvetica neue', 'helvetica', 'Cantarell', 'roboto', 'noto', 'arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
  variants: ['group-hover'],
}
