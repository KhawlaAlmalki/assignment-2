// ============================
// Dynamic Year in Footer
// ============================
document.getElementById('year').textContent = new Date().getFullYear();


// ============================
// Dark Mode Toggle (with persistence)
// ============================
const toggle = document.getElementById('themeToggle');   // Button element
const root = document.documentElement;                   // <html> element

// Apply saved theme on load
if (localStorage.getItem('theme') === 'dark') {
    root.classList.add('dark');
    toggle.textContent = '☀️';  // Switch icon to sun if dark mode is active
}

// Toggle dark mode on button click
toggle.addEventListener('click', () => {
    root.classList.toggle('dark');               // Add/remove .dark class
    const dark = root.classList.contains('dark');

    // Save preference
    localStorage.setItem('theme', dark ? 'dark' : 'light');

    // Update button icon
    toggle.textContent = dark ? '☀️' : '🌙';
});


// ============================
// Simple Contact Form Feedback (front-end only)
// ============================
const form = document.getElementById('contactForm');
const msg = document.getElementById('msg');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page refresh

    // HTML5 built-in validation
    if (!form.checkValidity()) {
        msg.textContent = "Please fill all fields correctly.";
        return;
    }

    // Fake "sent" message (for demo only)
    msg.textContent = "Thanks! Your message was 'sent' (demo only).";
    form.reset(); // Clear form fields
});


// ============================
// Scroll Reveal (Intersection Observer)
// ============================
// Adds "in" class when elements with .reveal enter viewport
const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in'); // Trigger CSS animation
            io.unobserve(entry.target);       // Stop observing once revealed
        }
    });
}, { threshold: 0.12 }); // ~12% visible before triggering

// Attach observer to all .reveal elements
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
