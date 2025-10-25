# Technical Documentation – Personal Portfolio Website

## 1. Introduction
This document provides the **technical details** of the personal portfolio website developed for **Assignment 1 (Foundations & AI Integration)**.  
The project demonstrates the use of **HTML, CSS, and JavaScript** to build a responsive, interactive, and professional-looking portfolio that highlights personal information, projects, and contact details.

The purpose of this documentation is to describe:
- The **architecture** and **structure** of the project.
- The **implementation details** of features.
- The **design decisions** made.
- The **testing, compatibility, and limitations** of the system.
- How **AI tools** were integrated responsibly.

---

## 2. System Overview
The portfolio is a **static web application** with no backend or database. It runs entirely on the client side in any modern browser.

Key capabilities:
- Present personal information (About Me, Experience, Skills).
- Showcase projects with descriptions and images.
- Provide a contact form with input validation.
- Support **dark/light mode toggle** with persistent user preference.
- Animate sections as they appear on scroll for better user experience.
- Offer **interactive filtering and sorting** for projects.
- Allow collapsing and expanding experiences while remembering user preferences.
- Adapt layout to different devices (desktop, tablet, mobile).

---

## 3. Repository Structure

```
assignment-1/
├── README.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
└── .gitignore

```

---

## 4. Technology Stack
- **HTML5**: Semantic structure for accessibility and SEO.
- **CSS3**: Flexbox and Grid for responsive layouts, custom variables for color themes.
- **Vanilla JavaScript (ES6)**:
    - DOM manipulation for UI changes.
    - `localStorage` API for theme, experience state, and form persistence.
    - `IntersectionObserver` for scroll animations.
    - Client-side **search, filter, and sorting** for projects.
- **AI Tools**: ChatGPT used for debugging, code comments, and documentation refinement.

---

## 5. Implementation Details

### 5.1 HTML
- **Sections included**:
    - Header with navigation bar & theme toggle.
    - Hero section with name, tagline, and call-to-action buttons.
    - About Me with profile image and intro text.
    - Experience & Education (timeline structure).
    - Projects grid with placeholder images.
    - Skills & Expertise (categorized lists).
    - Awards & Recognition (icon cards).
    - Contact section with form (Name, Email, Message).
    - Footer with branding and dynamic year.

- Used semantic tags (`<header>`, `<section>`, `<article>`, `<footer>`) for clarity and accessibility.

---

### 5.2 CSS
- **Layout**:
    - Flexbox for header, nav, and grids.
    - CSS Grid for projects and awards sections.
- **Responsive design**:
    - Media queries for breakpoints at 768px (tablet) and 480px (mobile).
    - Images styled with `object-fit: cover` to maintain proportions.
- **Dark mode**:
    - `.dark` class applied to `<html>`.
    - Variables (`--bg-color`, `--text-color`) updated accordingly.
- **Animations**:
    - `.reveal` elements fade or slide in using transitions triggered by JavaScript.

---

### 5.3 JavaScript
The JavaScript file (`script.js`) adds interactivity, persistence, and accessibility enhancements.

#### **Dark Mode Toggle**
- Button toggles `.dark` class on `<html>`.
- User preference saved in `localStorage`.
- Icon updates (🌙 / ☀️) dynamically.

#### **Scroll Reveal Animation**
- Implemented using `IntersectionObserver`.
- `.reveal` elements get `.in` class when they appear in viewport.
- Triggers fade/slide-in effects with CSS transitions.

#### **Dynamic Projects (Search, Filter, Sort)**
- The Projects section now includes an interactive control bar that allows users to:
    - **Search** projects by title, tag, or description.
    - **Filter** projects by category.
    - **Sort** alphabetically or by date.
- The interface updates instantly using DOM manipulation without reloading the page.
- Results summary updates automatically, and an empty-state message appears when no matches are found.

#### **Experience Collapse & Persistence**
- Each experience card (`.t-card`) can be **expanded or collapsed** by clicking its title or pressing **Enter/Space**.
- The open/closed state is stored in `localStorage`, allowing users to return to the same view they left.
- The implementation uses `aria-expanded` attributes and keyboard events for accessibility compliance.

#### **Contact Form Validation & Memory**
- Uses native HTML validation for email and required fields.
- Displays a confirmation message instead of real submission (demo-only).
- **Enhancement:** After form submission, the user’s **name and email** are stored in `localStorage`.
- When the page reloads, these fields are **pre-filled automatically**, improving user convenience.

#### **Dynamic Year**
Automatically updates the footer year using:
```js
document.getElementById('year').textContent = new Date().getFullYear();
