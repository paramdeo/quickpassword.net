module.exports = {
  mode: 'jit',
  purge: [
    './dist/index.html',
    './dist/style.css',
  ],
  darkMode: false,
  theme: {
    fontFamily: {
      mono: ['SFMono-Regular', 'Consolas', 'Liberation Mono', 'Menlo', 'monospace']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
