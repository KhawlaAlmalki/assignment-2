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
// Prefill saved name/email on load
(function () {
    const nameEl = document.getElementById('name');
    const emailEl = document.getElementById('email');
    if (!nameEl || !emailEl) return;

    const savedName = localStorage.getItem('contact_name');
    const savedEmail = localStorage.getItem('contact_email');
    if (savedName) nameEl.value = savedName;
    if (savedEmail) emailEl.value = savedEmail;
})();
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page refresh

    if (!form.checkValidity()) {
        msg.textContent = "Please fill all fields correctly.";
        return;
    }

    msg.textContent = "Thanks! Your message was sent.";

    // Save name and email for next visit (must be before reset!)
    try {
        localStorage.setItem('contact_name', document.getElementById('name').value.trim());
        localStorage.setItem('contact_email', document.getElementById('email').value.trim());
    } catch (e) {
        console.warn("Couldn't save contact info:", e);
    }

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
// ============================
// Projects Section Interactivity (Search / Filter / Sort)
// ============================
(function () {
    const grid = document.querySelector("#projects .grid.projects");
    if (!grid) return;

    const cards = Array.from(grid.querySelectorAll(".p-card"));
    const searchInput = document.getElementById("searchInput");
    const filterSelect = document.getElementById("filterSelect");
    const sortSelect = document.getElementById("sortSelect");
    const empty = document.getElementById("emptyState");
    const summary = document.getElementById("resultsSummary");

    const items = cards.map(card => ({
        el: card,
        title: card.querySelector("h3")?.textContent.toLowerCase() || "",
        desc: card.querySelector("p")?.textContent.toLowerCase() || "",
        tags: Array.from(card.querySelectorAll(".tag")).map(t => t.textContent.toLowerCase()),
        category: card.dataset.category,
        date: new Date(card.dataset.date)
    }));

    function applyFilters() {
        const query = searchInput.value.toLowerCase();
        const category = filterSelect.value;
        const sort = sortSelect.value;

        let filtered = items.filter(({ title, desc, tags, category: cat }) => {
            const matchesText =
                title.includes(query) ||
                desc.includes(query) ||
                tags.some(t => t.includes(query));
            const matchesCategory = category === "all" || cat === category;
            return matchesText && matchesCategory;
        });

        filtered.sort((a, b) => {
            switch (sort) {
                case "title-asc": return a.title.localeCompare(b.title);
                case "title-desc": return b.title.localeCompare(a.title);
                case "date-asc": return a.date - b.date;
                case "date-desc": return b.date - a.date;
                default: return 0;
            }
        });

        // Update DOM
        grid.innerHTML = "";
        filtered.forEach(({ el }) => grid.appendChild(el));

        summary.textContent =
            filtered.length === cards.length
                ? `${filtered.length} projects`
                : `${filtered.length} of ${cards.length} projects shown`;

        empty.hidden = filtered.length > 0;
    }

    searchInput.addEventListener("input", applyFilters);
    filterSelect.addEventListener("change", applyFilters);
    sortSelect.addEventListener("change", applyFilters);
})();

document.querySelectorAll('.reveal').forEach(el => io.observe(el));
// ============================
// Experience: collapsible cards + persistence (unified)
// ============================
(function () {
    const timeline = document.querySelector("#experience .timeline");
    if (!timeline) return;

    // 1) Tag titles first (so selectors work for the rest)
    const titles = Array.from(timeline.querySelectorAll(".t-card h3"));
    titles.forEach(h => {
        h.classList.add("t-title");
        if (!h.hasAttribute("tabindex")) h.setAttribute("tabindex", "0");
        if (!h.hasAttribute("aria-expanded")) h.setAttribute("aria-expanded", "true");
    });

    // 2) Persistence helpers
    const STORAGE_KEY = "exp_collapsed_keys_v1";
    const keyFromTitle = (h) =>
        (h.textContent || "")
            .trim().toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9\-]/g, "");

    const loadSet = () => {
        try { return new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")); }
        catch { return new Set(); }
    };
    const saveSet = (set) => localStorage.setItem(STORAGE_KEY, JSON.stringify([...set]));
    const collapsed = loadSet();

    // 3) Apply initial state from storage
    titles.forEach(h => {
        const card = h.closest(".t-card");
        const k = keyFromTitle(h);
        const isCollapsed = collapsed.has(k);
        h.setAttribute("aria-expanded", String(!isCollapsed));
        card.classList.toggle("collapsed", isCollapsed);
    });

    // 4) Toggle + persist on interaction
    function toggle(h) {
        const card = h.closest(".t-card");
        const expanded = h.getAttribute("aria-expanded") !== "false";
        const k = keyFromTitle(h);

        // flip
        h.setAttribute("aria-expanded", String(!expanded));
        card.classList.toggle("collapsed", expanded);

        // persist
        if (expanded) collapsed.add(k); else collapsed.delete(k);
        saveSet(collapsed);
    }

    // Click
    timeline.addEventListener("click", (e) => {
        const h = e.target.closest(".t-title");
        if (h) toggle(h);
    });

    // Keyboard (Enter/Space)
    timeline.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            const h = e.target.closest(".t-title");
            if (!h) return;
            e.preventDefault();
            toggle(h);
        }
    });
})();
