// Add subtle interactive effects
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.social-btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
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