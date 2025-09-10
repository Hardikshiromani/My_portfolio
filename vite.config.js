import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vite.dev/config/
export default defineConfig({
  base: "./", // 👈 Ensures relative paths for assets

  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
   
   
  },
});


// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import path from 'path';

// export default defineConfig({
//   base: './', // Ensures relative paths for assets

//   plugins: [react(),PostCSSFilter()],

//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, 'src'),
//     },
//   },

//   // css: {
//   //   postcss: './postcss.config.cjs', // Correct placement
//   // },
//  css: {
//     devSourcemap: false, // ✅ disables CSS source maps
//   },

//   optimizeDeps: {
//     exclude: ['vite/modulepreload-polyfill'], // Correct placement
//   },
// });


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import PostCSSFilter from './vite.postcss-filter.js'
// export default defineConfig({
//   plugins: [react(),, PostCSSFilter()],
//   css: {
//     postcss: './postcss.config.cjs',
//   },
//   build: {
//     rollupOptions: {
//       // exclude polyfill from css parsing
//       onwarn(warning, warn) {
//         if (warning.code === 'UNUSED_EXTERNAL_IMPORT') return
//         warn(warning)
//       },
//     },
//   },
//   optimizeDeps: {
//     exclude: ['vite/modulepreload-polyfill.js'],
//   },
// })

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import path from "path";

// export default defineConfig({
//   base: "./", // Ensures relative paths for assets

//   plugins: [react()],

//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "src"),
//     },
//   },

//   css: {
//     postcss: "./postcss.config.js", // ✅ put it here, not inside resolve
//   },
// });


// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import path from "path";

// export default defineConfig({
//   base: "./",

//   plugins: [react()],

//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "src"),
//     },
//   },

//   css: {
//     postcss: {
//       plugins: [
//         require("tailwindcss"),
//         require("autoprefixer"),
//       ],
//     },
//   },
// });
