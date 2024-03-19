
- ## Description
This project focuses on optimizing a website for performance using Vite and various optimization techniques. 
It includes additional integrations such as using Bootstrap, and adding cdn for  jQuery Easing, and Owl Carousel  and animate for enhanced loading.it also incluses optimization techniques listed below.


- ## Installation
Clone the repository:
```
git clone https://github.com/reanbrenda/Frontend-and-API-Performance-assignment-1
```
Navigate to the project directory
Install dependencies using npm:
```
npm install

```
To start the development server, run:
```
npm run dev

```

- ## Optimization Techniques
Image Optimization: The project includes the ViteImageOptimizer plugin, which optimizes images (including JPEG files) to improve loading times. Configuration options include quality adjustment and progressive rendering.

HTML Minification: The ViteMinifyPlugin is used to minify HTML files, reducing their size and improving loading speed.

Asset Preloading: Custom Vite plugins preload critical assets such as fonts (font.woff2) to reduce latency and improve page load times.

Asynchronous JavaScript Loading: Another custom Vite plugin makes JavaScript files load asynchronously, preventing render-blocking and enhancing page responsiveness.

Lazy Loading Images: Images are lazy-loaded  except for the ones in the first page  improving perceived performance by loading images only when they are in the viewport.

- ## Additional Integrations
Bootstrap: Integrated for styling and UI components.

jQuery Easing: Integrated via CDN to provide smooth animations and transitions.

Owl Carousel: Integrated via CDN for carousel functionality.

## Contact Form Integration
A contact form with validation is included using jQuery Bootstrap Validation,  which also is done using cdn.

- ## License
This project is licensed under the MIT License.
