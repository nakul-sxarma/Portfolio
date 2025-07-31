// static/js/script.js
document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio website loaded successfully!");

    const body = document.body;

    // --- Spotlight Effect Logic ---
    // We add an event listener to the entire window to track mouse movement.
    window.addEventListener('mousemove', (e) => {
        // e.clientX and e.clientY give us the mouse's live coordinates.
        // We update the CSS custom properties on the body element.
        body.style.setProperty('--mouse-x', e.clientX + 'px');
        body.style.setProperty('--mouse-y', e.clientY + 'px');
    });
});