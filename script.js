// Gallery Functionality for About Section
document.addEventListener('DOMContentLoaded', function() {
    // Initialize gallery if it exists on the page
    initGallery();
    
    function initGallery() {
        const galleryItems = document.querySelectorAll('.gallery-item');
        const dots = document.querySelectorAll('.dot');
        const prevBtn = document.querySelector('.gallery-arrow-left');
        const nextBtn = document.querySelector('.gallery-arrow-right');
        
        if (galleryItems.length === 0) return; // No gallery on this page
        
        let currentSlide = 0;
        
        // Function to show a specific slide
        function showSlide(index) {
            // Hide all slides
            galleryItems.forEach(item => {
                item.classList.remove('active');
            });
            
            // Remove active class from all dots
            dots.forEach(dot => {
                dot.classList.remove('active');
            });
            
            // Show the selected slide
            galleryItems[index].classList.add('active');
            dots[index].classList.add('active');
            
            currentSlide = index;
        }
        
        // Next slide function
        function nextSlide() {
            let nextIndex = currentSlide + 1;
            if (nextIndex >= galleryItems.length) {
                nextIndex = 0;
            }
            showSlide(nextIndex);
        }
        
        // Previous slide function
        function prevSlide() {
            let prevIndex = currentSlide - 1;
            if (prevIndex < 0) {
                prevIndex = galleryItems.length - 1;
            }
            showSlide(prevIndex);
        }
        
        // Add click events to arrows
        if (prevBtn) {
            prevBtn.addEventListener('click', prevSlide);
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', nextSlide);
        }
        
        // Add click events to dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
            });
        });
        
        // Auto-rotate slides every 5 seconds (optional)
        let slideInterval = setInterval(nextSlide, 5000);
        
        // Pause auto-rotation on hover
        const galleryView = document.querySelector('.gallery-view');
        if (galleryView) {
            galleryView.addEventListener('mouseenter', () => {
                clearInterval(slideInterval);
            });
            
            galleryView.addEventListener('mouseleave', () => {
                slideInterval = setInterval(nextSlide, 5000);
            });
        }
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                prevSlide();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
            }
        });
        
        // Initialize first slide
        showSlide(0);
    }
});