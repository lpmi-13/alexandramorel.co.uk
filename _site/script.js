const year = document.getElementById('year');

if (year) {
    year.textContent = new Date().getFullYear();
}

const navLinks = document.querySelectorAll('.nav-link');
const panels = document.querySelectorAll('.tab-panel');

function showPanel(targetId) {
    const targetPanel = document.getElementById(targetId);
    const targetLink = document.querySelector(`.nav-link[href="#${targetId}"]`);

    if (!targetPanel || !targetLink) {
        return;
    }

    navLinks.forEach(link => link.classList.remove('active'));
    panels.forEach(panel => panel.classList.remove('active'));

    targetLink.classList.add('active');
    targetPanel.classList.add('active');
}

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        showPanel(targetId);
        window.history.pushState(null, '', `#${targetId}`);
    });
});

if (window.location.hash) {
    showPanel(window.location.hash.substring(1));
}
