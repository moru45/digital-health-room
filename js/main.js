/**
 * Digital Health Room - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const siteNav = document.querySelector('.site-nav');

    if (menuToggle && siteNav) {
        menuToggle.addEventListener('click', () => {
            siteNav.classList.toggle('active');
            
            // Update aria-label for accessibility
            const isExpanded = siteNav.classList.contains('active');
            menuToggle.setAttribute('aria-label', isExpanded ? 'メニューを閉じる' : 'メニューを開く');
        });
    }

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (siteNav.classList.contains('active')) {
                    siteNav.classList.remove('active');
                    menuToggle.setAttribute('aria-label', 'メニューを開く');
                }
            }
        });
    });
});
