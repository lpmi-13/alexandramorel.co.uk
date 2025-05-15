// Dynamic copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth tab transitions
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove active class from all links/sections
        navLinks.forEach(l => l.classList.remove('active'));
        sections.forEach(s => s.classList.remove('active'));
        
        // Add active class to clicked link
        link.classList.add('active');
        
        // Show corresponding section
        const targetId = link.getAttribute('href').substring(1);
        document.getElementById(targetId).classList.add('active');
    });
});
