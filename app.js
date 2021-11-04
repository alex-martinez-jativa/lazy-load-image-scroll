const images = document.querySelectorAll('img');

if(images.length) {
    const imageOptions = {
        threshold: 0.5
    };
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
    
        entries.forEach((entry) => {
            if(!entry.isIntersecting) return;
    
            const img = entry.target;
            img.src = img.dataset.image
            observer.unobserve(img);
        })
    
    }, imageOptions);
    
    images.forEach((image) => imageObserver.observe(image));
}
