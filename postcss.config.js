export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },

   // ⬇️ This prevents PostCSS from touching .js files
  exclude: [
    '**/*.js',
    '**/*.jsx',
    '**/*.ts',
    '**/*.tsx',
  ],
}
