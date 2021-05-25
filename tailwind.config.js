module.exports = {
  mode: 'jit',
  purge: [
    './dist/index.html',
    './dist/style.css',
  ],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Helvetica', 'Arial', 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"],
      mono: ['SFMono-Regular', 'Consolas', 'Liberation Mono', 'Menlo', 'monospace']
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
