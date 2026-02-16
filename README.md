# CETAA Website

The official website for the **College of Engineering Trivandrum Alumni Association (CETAA)**. This platform serves as a hub for alumni to connect, view college history, and support ongoing renovation initiatives.

## 🚀 Features

- **Modern & Responsive Design**: Built with a mobile-first approach using Tailwind CSS.
- **Renovation Project Tracker**: specialized page (`renovation.html`) showcasing ongoing infrastructure upgrades.
    - **Interactive Comparison**: "Before & After" image sliders for projects like the CETAA Hall and Reception.
    - **Progress Tracking**: Visual progress bars for funding goals.
    - **Donation Interface**: User-friendly form for alumni contributions.
- **Dynamic Navigation**: Responsive navbar with scroll effects and mobile menu support.
- **Alumni Resources**: Information on chapters, global alumni network, and college departments.

## 🛠️ Tech Stack

- **HTML5**: Semantic markup for structure.
- **CSS**: 
  - **Tailwind CSS** (via CDN) for utility-first styling.
  - Custom styles in `styles.css` for animations and specific overrides.
- **JavaScript**: Vanilla ES6+ modules for interactivity (Navbar, Sliders).
- **Icons**: [Lucide Icons](https://lucide.dev/) for consistent, scalable vector icons.

## 📂 Project Structure

```
├── assets/             # Images and static resources
├── js/
│   ├── components/     # Reusable UI components (Navbar, Footer)
│   └── main.js         # Main application logic
├── index.html          # Landing page
├── renovation.html     # Renovation projects & donation page
├── styles.css          # Custom CSS
└── README.md           # Project documentation
```

## 🏃‍♂️ How to Run

Since this is a static website using CDN links for dependencies, no build step is required.

1. **Clone or Download** the repository.
2. **Open** `index.html` directly in any modern web browser.
   - Or use a local development server (e.g., Live Server in VS Code) for the best experience.

## ✨ Highlights

- **Parallax Effects**: Smooth visual depth on the landing page hero section.
- **Glassmorphism**: Modern UI elements with blurred backgrounds.
- **Animations**: Subtle entry animations and hover effects for an engaging user experience.

---
*Est. 1939 - Connecting the past, present, and future of CET.*
