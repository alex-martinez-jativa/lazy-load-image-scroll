import lazyLoadImages from "./lazyLoadImages.js";

const images = document.querySelectorAll('img');
const options = { threshold: 0.5};

lazyLoadImages(images, options);

