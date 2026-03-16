// Add subtle interactive effects
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.social-btn');
    
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