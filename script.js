// Select DOM elements
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");
const header = document.querySelector(".header");

// Mobile menu toggle functionality
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
  document.body.style.overflow = navbar.classList.contains("active")
    ? "hidden"
    : "";
});

// Premium Tech Stack Interactions
class TechArsenal {
  constructor() {
    this.techData = {
      flutter: {
        level: 85,
        description: "Cross-platform mobile development with Flutter & Dart"
      },
      react: {
        level: 80,
        description: "Modern React development with hooks and context API"
      },
      html5: {
        level: 95,
        description: "Semantic HTML5 markup and modern web standards"
      },
      css3: {
        level: 90,
        description: "Advanced CSS3, Flexbox, Grid, and animations"
      },
      javascript: {
        level: 85,
        description: "ES6+, async/await, and modern JavaScript patterns"
      },
      nodejs: {
        level: 80,
        description: "Server-side JavaScript with Node.js runtime"
      },
      express: {
        level: 75,
        description: "Web application framework for Node.js"
      },
      flask: { level: 70, description: "Python micro web framework" },
      java: {
        level: 80,
        description: "Object-oriented programming and Spring framework"
      },
      python: {
        level: 85,
        description: "Python programming for web, data, and automation"
      },
      mongodb: {
        level: 75,
        description: "NoSQL database with MongoDB and Mongoose"
      },
      mysql: {
        level: 80,
        description: "Relational database management with MySQL"
      },
      firebase: {
        level: 70,
        description: "Backend-as-a-Service with Firebase"
      },
      powerbi: {
        level: 65,
        description: "Business analytics and data visualization"
      },
      pandas: {
        level: 75,
        description: "Data manipulation and analysis with Pandas"
      },
      numpy: { level: 70, description: "Numerical computing with NumPy" },
      googlecloud: {
        level: 60,
        description: "Cloud computing services by Google"
      },
      aws: { level: 65, description: "Amazon Web Services cloud platform" },
      git: {
        level: 90,
        description: "Version control system and collaboration"
      },
      github: {
        level: 85,
        description: "Code hosting and collaboration platform"
      },
      wordpress: {
        level: 80,
        description: "Content management system and theme development"
      },
      elementor: {
        level: 75,
        description: "WordPress page builder and design"
      },
      wix: { level: 70, description: "Website builder and e-commerce platform" }
    };

    this.init();
  }

  init() {
    this.setupTechCards();
    this.setupModal();
    this.setupAnimations();
  }

  setupTechCards() {
    const techCards = document.querySelectorAll(".tech-card");

    techCards.forEach((card) => {
      card.addEventListener("click", (e) => {
        const tech = card.dataset.tech;
        this.openModal(tech);
      });

      // Hover effects
      card.addEventListener("mouseenter", (e) => {
        this.animateCard(card, true);
      });

      card.addEventListener("mouseleave", (e) => {
        this.animateCard(card, false);
      });
    });
  }

  animateCard(card, isHovering) {
    const logo = card.querySelector(".tech-logo img, .tech-logo i");
    const particles = card.querySelector(".tech-particles");

    if (isHovering) {
      card.style.transform = "translateY(-15px) scale(1.1)";
      if (logo.tagName === "IMG") {
        logo.style.transform = "rotateY(360deg)";
      }
      if (particles) {
        particles.style.animation = "particleFloat 2s ease-in-out";
      }
    } else {
      card.style.transform = "translateY(0) scale(1)";
      if (logo.tagName === "IMG") {
        logo.style.transform = "rotateY(0)";
      }
    }
  }

  setupModal() {
    this.modal = document.getElementById("techModal");
    this.closeBtn = this.modal.querySelector(".close-modal");

    this.closeBtn.addEventListener("click", () => this.closeModal());
    this.modal.addEventListener("click", (e) => {
      if (e.target === this.modal) this.closeModal();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.modal.classList.contains("active")) {
        this.closeModal();
      }
    });
  }

  openModal(tech) {
    const data = this.techData[tech];
    if (!data) return;

    const modal = this.modal;
    const logo = modal.querySelector("#modalLogo");
    const title = modal.querySelector("#modalTitle");
    const description = modal.querySelector("#modalDescription");
    const progress = modal.querySelector("#levelProgress");
    const levelText = modal.querySelector("#levelText");

    // Capitalize first letter
    const techName = tech.charAt(0).toUpperCase() + tech.slice(1);

    title.textContent = techName;
    description.textContent = data.description;
    progress.style.width = `${data.level}%`;

    // Set level text
    if (data.level >= 90) levelText.textContent = "Expert";
    else if (data.level >= 80) levelText.textContent = "Advanced";
    else if (data.level >= 70) levelText.textContent = "Intermediate";
    else levelText.textContent = "Beginner";

    // Try to get logo
    const techCard = document.querySelector(`[data-tech="${tech}"]`);
    if (techCard) {
      const originalLogo = techCard.querySelector("img, i");
      if (originalLogo) {
        if (originalLogo.tagName === "IMG") {
          logo.src = originalLogo.src;
          logo.alt = techName;
          logo.style.display = "block";
        } else {
          logo.style.display = "none";
        }
      }
    }

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  closeModal() {
    this.modal.classList.remove("active");
    document.body.style.overflow = "";
  }

  setupAnimations() {
    const categories = document.querySelectorAll(".tech-category");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animateCategory(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    categories.forEach((category) => observer.observe(category));
  }

  animateCategory(category) {
    const cards = category.querySelectorAll(".tech-card");

    cards.forEach((card, index) => {
      card.style.animation = `fadeInUp 0.6s ease forwards ${index * 0.1}s`;
    });
  }
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new TechArsenal();
});

// Add to existing JavaScript
console.log("💫 Premium Tech Arsenal Loaded!");

// Close mobile menu when clicking on nav links
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Close mobile menu
    navbar.classList.remove("active");
    menuIcon.classList.remove("bx-x");
    document.body.style.overflow = "";

    // Update active class
    navLinks.forEach((otherLink) => otherLink.classList.remove("active"));
    link.classList.add("active");
  });
});

// Smooth scrolling for all links with hashes
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// Throttle function for scroll performance
function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Active section detection
function updateActiveSection() {
  let current = "";
  const scrollPosition = window.scrollY + 100;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", throttle(updateActiveSection, 100));

// Header background on scroll
function updateHeaderBackground() {
  if (window.scrollY > 100) {
    header.style.background = "rgba(11, 12, 16, 0.95)";
    header.style.backdropFilter = "blur(10px)";
  } else {
    header.style.background = "rgba(11, 12, 16, 0.9)";
    header.style.backdropFilter = "blur(5px)";
  }
}

window.addEventListener("scroll", throttle(updateHeaderBackground, 100));

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (
    navbar.classList.contains("active") &&
    !navbar.contains(e.target) &&
    !menuIcon.contains(e.target)
  ) {
    navbar.classList.remove("active");
    menuIcon.classList.remove("bx-x");
    document.body.style.overflow = "";
  }
});

// Close mobile menu on escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && navbar.classList.contains("active")) {
    navbar.classList.remove("active");
    menuIcon.classList.remove("bx-x");
    document.body.style.overflow = "";
  }
});

// Handle page load
window.addEventListener("load", () => {
  const hash = window.location.hash;
  if (hash) {
    const targetSection = document.querySelector(hash);
    if (targetSection) {
      setTimeout(() => {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }
  updateHeaderBackground();
});

// Handle resize events
window.addEventListener("resize", () => {
  if (window.innerWidth > 768 && navbar.classList.contains("active")) {
    navbar.classList.remove("active");
    menuIcon.classList.remove("bx-x");
    document.body.style.overflow = "";
  }
});

// Animation for skill progress bars
function animateSkillBars() {
  const skillProgresses = document.querySelectorAll(".skill-progress");

  skillProgresses.forEach((progress) => {
    const level = progress.getAttribute("data-level");
    if (level) {
      setTimeout(() => {
        progress.style.width = `${level}%`;
        progress.style.transition = "width 1s ease-in-out";
      }, 500);
    }
  });
}

// Animate skill bars when skills section comes into view
const skillsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateSkillBars();
        skillsObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);

const skillsSection = document.querySelector(".skills");
if (skillsSection) {
  skillsObserver.observe(skillsSection);
}

// Text animation enhancement
function initializeTextAnimation() {
  const animatedText = document.querySelector(".text-animation span");
  if (animatedText) {
    animatedText.style.animation = "none";
    setTimeout(() => {
      animatedText.style.animation = "";
    }, 10);
  }
}

initializeTextAnimation();

// Reinitialize animations when page becomes visible
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) {
    initializeTextAnimation();
  }
});

// Interactive heart animation
function setupHeartAnimation() {
  const hearts = document.querySelectorAll(".animated-heart");

  hearts.forEach((heart) => {
    // Click to change animation
    heart.addEventListener("click", function () {
      this.classList.toggle("beating");
      this.classList.toggle("pulse");
    });

    // Double click for surprise
    heart.addEventListener("dblclick", function () {
      createHeartExplosion(this);
    });

    // Mouse enter for extra effect
    heart.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.5)";
    });

    heart.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });
  });
}

// Heart explosion effect
function createHeartExplosion(element) {
  const rect = element.getBoundingClientRect();
  const colors = ["#ff6b6b", "#ffa8a8", "#ff8787", "#fa5252"];

  for (let i = 0; i < 8; i++) {
    const heart = document.createElement("span");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = rect.left + rect.width / 2 + "px";
    heart.style.top = rect.top + rect.height / 2 + "px";
    heart.style.fontSize = "1.5rem";
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "1000";
    heart.style.transition = "all 1s ease-out";

    document.body.appendChild(heart);

    // Animate out
    setTimeout(() => {
      const angle = (i / 8) * Math.PI * 2;
      const distance = 100 + Math.random() * 50;
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;

      heart.style.transform = `translate(${x}px, ${y}px) scale(0)`;
      heart.style.opacity = "0";
    }, 10);

    // Remove after animation
    setTimeout(() => {
      if (heart.parentNode) {
        heart.parentNode.removeChild(heart);
      }
    }, 1000);
  }
}

// Initialize heart animations
document.addEventListener("DOMContentLoaded", setupHeartAnimation);

console.log("🚀 Portfolio loaded successfully!");
console.log("💻 Developed by Aashish Pathak");
