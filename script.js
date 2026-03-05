  // =======================
// PROJECT DATA
// =======================

const projects = [

{
title: "Electric Vehicle Analytics Dashboard",

description:
"Interactive Tableau dashboard analyzing EV adoption trends, BEV vs PHEV distribution and manufacturer landscape.",

tools: "Tableau • Data Visualization • Dashboard Design",

image: "https://raw.githubusercontent.com/rahulwakle-analytics/rahul-portfolio/main/ev.dashboard.png.png",

link: "https://raw.githubusercontent.com/rahulwakle-analytics/rahul-portfolio/main/ev.dashboard.png.png"

}

];

// =======================
// SKILLS
// =======================

const skills = [

"Power BI",
"SQL",
"Excel",
"Python",
"Tableau",
"Data Cleaning",
"Data Modeling"

];



// =======================
// RENDER PROJECTS
// =======================

const projectsContainer = document.getElementById("projectsContainer");

projects.forEach(project => {

const card = document.createElement("div");
card.classList.add("card");

card.innerHTML = `

<img src="${project.image}" class="project-image" onclick="openPopup('${project.image}')">

<h3>${project.title}</h3>

<p>${project.description}</p>

<p><strong>Tools:</strong> ${project.tools}</p>

`;

projectsContainer.appendChild(card);

});



// =======================
// RENDER SKILLS
// =======================

const skillsContainer = document.getElementById("skillsContainer");

skills.forEach(skill => {

const box = document.createElement("div");

box.classList.add("skill-box");

box.textContent = skill;

skillsContainer.appendChild(box);

});



// =======================
// NAVIGATION SMOOTH
// =======================

document.querySelectorAll(".nav-link").forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

target.scrollIntoView({
behavior:"smooth"
});

});

});



// =======================
// SCROLL REVEAL
// =======================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

sections.forEach(section => {

const top = section.getBoundingClientRect().top;

if(top < window.innerHeight - 100){

section.classList.add("show");

}

});

});



// =======================
// TYPING EFFECT
// =======================

const typingElement = document.querySelector(".typing");

const roles = [

"Data Analyst",
"Power BI Developer",
"Business Intelligence Analyst"

];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

const role = roles[roleIndex];

if(!deleting){

typingElement.textContent = role.slice(0,charIndex++);

}else{

typingElement.textContent = role.slice(0,charIndex--);

}

if(!deleting && charIndex === role.length){

deleting = true;

setTimeout(typeEffect,1000);

return;

}

if(deleting && charIndex === 0){

deleting = false;

roleIndex = (roleIndex+1)%roles.length;

}

setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();

function openPopup(image){

document.getElementById("popup-img").src = image;

document.getElementById("popup").style.display = "flex";

}

function closePopup(){

document.getElementById("popup").style.display = "none";

}
