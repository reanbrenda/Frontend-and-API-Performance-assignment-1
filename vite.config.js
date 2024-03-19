import { defineConfig } from 'vite';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';


import path from 'path';

const preloadCss = () => ({
    name: "preload-assets",
    transformIndexHtml(html) {
      return html.replace(
        /<\/head>/,
        `<link rel='preload' href='./font.woff2' as='font' type='font/woff2' crossorigin='anonymous'>\n</head>`
      );
    }
  });
const asyncJs = () => ({
  name: "async-js",
  transformIndexHtml(html) {
    return html.replace(/<script/, "<script async");
  }
});

const lazyLoadImages = () => ({
    name: "lazy-load-images",
    transformIndexHtml(html, { filename }) {
      if (filename !== 'index.html') {
        return html.replace(/<img/, "<img loading='lazy'");
      }
      return html;
    }
  });
  

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
    preloadCss(),
    asyncJs(),
    lazyLoadImages()
  ],
  base: './',
  build: {
    css: {
      include: ['style.min.css'],
    },
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
