export default function lazyLoadImages(elements, options) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
    
        entries.forEach((entry) => {
            if(!entry.isIntersecting) return;
    
            const img = entry.target;
            img.src = img.dataset.image
            observer.unobserve(img);
        })
    
    }, options);
    
    elements.forEach((image) => imageObserver.observe(image));
}