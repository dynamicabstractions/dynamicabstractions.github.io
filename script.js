document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Find corresponding TOC link
            const id = entry.target.getAttribute('id');
            const tocLink = document.querySelector(`.toc a[href="#${id}"]`);

            if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
                // Mark the link as active if the section is at least 10% visible
                document.querySelectorAll('.toc a').forEach(link => {
                    link.classList.remove('active');
                });
                tocLink.classList.add('active');
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the target is visible
    });

    // Observe all sections
    document.querySelectorAll('.content section').forEach(section => {
        observer.observe(section);
    });
});

