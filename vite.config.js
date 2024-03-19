import { defineConfig } from 'vite';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';


import path from 'path';

export default defineConfig({
  plugins: [
    ViteImageOptimizer({
      jpg: {
        quality: 80,
        progressive: true,
        optimizeSize: true
      }
    }),
    ViteMinifyPlugin({
      html: true
    }),
   
  ],
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        detail: path.resolve(__dirname, 'detail.html'),
        contact: path.resolve(__dirname, 'contact.html'),
        checkout: path.resolve(__dirname, 'checkout.html'),
        cart: path.resolve(__dirname, 'cart.html'),
        shop: path.resolve(__dirname, 'shop.html'),
        'js/main': path.resolve(__dirname, 'js/main.js'),
        'mail/contact': path.resolve(__dirname, 'mail/contact.js'),
      },
    }
  }
});
