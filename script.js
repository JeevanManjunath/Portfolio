// ===== Navbar Mobile Toggle =====
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const navLinkItems = document.querySelectorAll(".nav-link");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Close menu after clicking link (mobile)
navLinkItems.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

// ===== Active link on scroll =====
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  let scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 110;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelectorAll(".nav-link").forEach((l) => l.classList.remove("active"));
      document.querySelector(`.nav-links a[href*='${sectionId}']`)?.classList.add("active");
    }
  });
});

// ===== Footer year =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== Theme Toggle (Dark/Light) =====
const themeBtn = document.getElementById("themeBtn");

function setTheme(mode) {
  if (mode === "light") {
    document.body.classList.add("light");
    themeBtn.textContent = "☀️";
    localStorage.setItem("theme", "light");
  } else {
    document.body.classList.remove("light");
    themeBtn.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  }
}

// Load saved theme
const savedTheme = localStorage.getItem("theme") || "dark";
setTheme(savedTheme);

themeBtn.addEventListener("click", () => {
  const isLight = document.body.classList.contains("light");
  setTheme(isLight ? "dark" : "light");
});

// ===== Project Search Filter =====
const searchInput = document.getElementById("searchInput");
const projectGrid = document.getElementById("projectGrid");
const projects = projectGrid.querySelectorAll(".project");

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();

  projects.forEach((card) => {
    const title = card.dataset.title.toLowerCase();
    card.style.display = title.includes(value) ? "block" : "none";
  });
});

// ===== Modal Open/Close =====
const openModalBtns = document.querySelectorAll(".open-modal");
const modals = document.querySelectorAll(".modal");

openModalBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modalId = btn.getAttribute("data-modal");
    document.getElementById(modalId).classList.add("show");
  });
});

modals.forEach((modal) => {
  modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
      modal.classList.remove("show");
    }
  });

  modal.querySelector(".modal-close").addEventListener("click", () => {
    modal.classList.remove("show");
  });
});

// ===== Contact Form (Frontend Only) =====
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    formStatus.textContent = "Please fill all fields.";
    return;
  }

  // Simulate submission (frontend only)
  formStatus.textContent = "✅ Message sent successfully (demo).";
  contactForm.reset();

  setTimeout(() => {
    formStatus.textContent = "";
  }, 2500);
});
