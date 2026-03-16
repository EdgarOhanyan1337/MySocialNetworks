// Add subtle interactive effects
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.social-btn');
    
    // Avatar Lightbox Functionality
    const avatar = document.querySelector('.avatar');
    const lightbox = document.getElementById('avatarLightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const closeBtn = document.querySelector('.lightbox-close');
    
    if (avatar && lightbox) {
        // Open lightbox on avatar click
        avatar.addEventListener('click', function() {
            lightbox.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
        
        // Close lightbox on close button click
        closeBtn.addEventListener('click', function() {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
        
        // Close lightbox on outside click
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
        
        // Close lightbox on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && lightbox.style.display === 'block') {
                lightbox.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    buttons.forEach(button => {
        // Mouse events for desktop
        button.addEventListener('mouseenter', function() {
            if (window.matchMedia('(hover: hover)').matches) {
                this.style.transform = 'scale(1.03)';
            }
        });
        
        button.addEventListener('mouseleave', function() {
            if (window.matchMedia('(hover: hover)').matches) {
                this.style.transform = 'scale(1)';
            }
        });
        
        // Touch events for mobile
        button.addEventListener('touchstart', function() {
            this.style.background = 'rgba(128, 128, 128, 0.3)';
            this.style.transform = 'scale(0.98)';
        }, { passive: true });
        
        button.addEventListener('touchend', function() {
            setTimeout(() => {
                this.style.background = '';
                this.style.transform = '';
            }, 150);
        }, { passive: true });
    });
    
    // Add ripple effect on click
    document.body.addEventListener('click', function(e) {
        const button = e.target.closest('.social-btn');
        if (button) {
            // Add visual feedback
            button.style.transform = 'scale(0.98)';
            setTimeout(() => {
                button.style.transform = '';
            }, 150);
        }
    });
});