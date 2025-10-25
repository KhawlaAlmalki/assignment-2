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
  - `localStorage` API for theme persistence.  
  - `IntersectionObserver` for scroll animations.  
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

---

### 5.3 JavaScript
- **Dark Mode Toggle**:  
  - Button toggles `.dark` class on `<html>`.  
  - User preference saved in `localStorage`.  
  - Icon updates (🌙 / ☀️) dynamically.  

- **Scroll Reveal Animation**:  
  - Implemented using `IntersectionObserver`.  
  - `.reveal` elements get `.in` class when they appear in viewport.  
  - Triggers fade/slide-in effects with CSS transitions.  

- **Contact Form Validation**:  
  - Native HTML5 validation (`required`, `type="email"`).  
  - Custom feedback message displayed under form (`#msg`).  
  - Demo-only: No backend, only shows confirmation text.  

- **Dynamic Year**:  
  - Script sets footer year automatically:  
    ```js
    document.getElementById('year').textContent = new Date().getFullYear();
    ```

---

## 6. Testing & Compatibility

### 6.1 Platforms
- **Browsers tested**: Google Chrome, Microsoft Edge.  
- **Devices**: Desktop (1920px), tablet (768px), mobile (375px).  

### 6.2 Validation
- Verified HTML with W3C Validator (no major errors).  
- CSS validated with W3C CSS Validator (minor warnings resolved).  
- JavaScript tested with DevTools console (no runtime errors).  

### 6.3 Responsiveness
- Confirmed layout adapts across breakpoints.  
- Checked form behavior on mobile (inputs remain usable).  

---

## 7. Challenges & Solutions
- **Challenge**: Ensuring the dark/light mode persisted across reloads.  
  - ✅ Solved with `localStorage`.  

- **Challenge**: Making animations smooth without heavy libraries.  
  - ✅ Solved using `IntersectionObserver` instead of jQuery or frameworks.  

- **Challenge**: AI sometimes suggested generic CSS.  
  - ✅ Refined with manual adjustments and DevTools testing.  

---

## 8. Future Enhancements
- Add **backend integration** (Node.js or Firebase) for the contact form.  
- Deploy live version via **GitHub Pages** or **Netlify**.  
- Enhance **accessibility** (ARIA roles, keyboard navigation).  
- Add **real project images** instead of placeholders.  
- Improve **cross-browser testing** (Safari, Firefox).  

---

## 9. AI Integration
- **Used for**: Debugging code, generating CSS snippets, writing documentation.  
- **Benefits**: Faster development, structured guidance, error explanation.  
- **Limitations**: Required review and manual editing to avoid generic or unsuitable solutions.  
- **Responsible Use**: Ensured final implementation was personally understood, tested, and adapted.  

---

## 10. Conclusion
This technical documentation outlines the design, implementation, and testing of the personal portfolio website. The project successfully applies **front-end web development fundamentals**, demonstrates **responsible AI usage**, and provides a scalable foundation for future improvements.  

It reflects both **technical competence** and **strategic use of AI tools** to accelerate learning and project completion.
