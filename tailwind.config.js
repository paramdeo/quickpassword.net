module.exports = {
  mode: 'jit',
  purge: [
    './dist/index.html',
    './dist/style.css',
  ],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ['"Fira Sans"', 'sans-serif'],
      mono: ['"Fira Mono"', 'monospace']
    },
    colors: {
      'qp-1': '#2B2D42',
      'qp-2': '#EDF2F4',
      'qp-3': '#8D99AE',
      'qp-4': '#ff7f51',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
