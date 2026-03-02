// ==========================
// DATA (Dynamic Content)
// ==========================

const projects = [
  {
    title: "Retail Sales Dashboard",
    description: "Analyzed sales performance, ABV, ABS, and growth trends using Power BI."
  },
  {
    title: "Zara Sales Analysis",
    description: "Cleaned and transformed data to identify top products and revenue drivers."
  }
];

const skills = [
  "Power BI",
  "SQL",
  "Excel",
  "Python",
  "Data Cleaning",
  "Data Modeling"
];

// ==========================
// RENDER PROJECTS
// ==========================

const projectsContainer = document.getElementById("projectsContainer");

projects.forEach(project => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
  `;

  projectsContainer.appendChild(card);
});

// ==========================
// RENDER SKILLS
// ==========================

const skillsContainer = document.getElementById("skillsContainer");

skills.forEach(skill => {
  const skillBox = document.createElement("div");
  skillBox.textContent = skill;
  skillsContainer.appendChild(skillBox);
});

// ==========================
// Smooth Scroll + Active Nav
// ==========================

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelectorAll(".nav-link").forEach(l =>
      l.classList.remove("active")
    );

    this.classList.add("active");

    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth"
    });
  });
}); 
// ==========================
// SCROLL REVEAL EFFECT
// ==========================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 100;

    if (sectionTop < triggerPoint) {
      section.classList.add("show");
    }
  });
});
// ==========================
// TYPING EFFECT
// ==========================

const typingElement = document.querySelector(".typing");

const roles = [
  "Data Analyst",
  "Business Intelligence Analyst",
  "Power BI Developer"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentRole = roles[roleIndex];
  
  if (!isDeleting) {
    typingElement.textContent = currentRole.slice(0, charIndex++);
  } else {
    typingElement.textContent = currentRole.slice(0, charIndex--);
  }

  if (!isDeleting && charIndex === currentRole.length) {
    setTimeout(() => isDeleting = true, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();