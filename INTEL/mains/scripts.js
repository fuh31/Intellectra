// Shows only the requested section, hides others
function showSection(sectionId) {
  const sections = document.querySelectorAll("section");
  sections.forEach((sec) => {
    sec.classList.remove("active");
  });
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add("active");
  }
  window.scrollTo(0, 0); // Scroll to top after navigation
}

// Scroll to the Key Highlights (stats) area on the home section
function scrollToStats() {
  showSection("home");
  const statsSection = document.getElementById("stats-section");
  if (statsSection) {
    statsSection.scrollIntoView({ behavior: "smooth" });
  }
}

// Contact form submission alert
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("Thank you for your message! We'll get back to you soon.");
      contactForm.reset();
    });
  }
});

