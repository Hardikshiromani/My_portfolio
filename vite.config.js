// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import path from "path";
// // https://vite.dev/config/
// export default defineConfig({
//   base: "./", // 👈 Ensures relative paths for assets

//   plugins: [react()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "src"),
//     },
//     css: {
//       postcss: "./postcss.config.js", // ensure postcss config is loaded
//     },
//     optimizeDeps: {
//       exclude: ["vite/modulepreload-polyfill"],
//     },
//   },
// });


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: './', // Ensures relative paths for assets

  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  // css: {
  //   postcss: './postcss.config.cjs', // Correct placement
  // },

  optimizeDeps: {
    exclude: ['vite/modulepreload-polyfill'], // Correct placement
  },
});