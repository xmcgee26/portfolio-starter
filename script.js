// ============================================================
// PROJECTS DATA
// TODO: Replace these with your real projects!
// Each project needs: title, description, tags, and optional links.
// Ask Copilot: "Add a project card for a [project type] called [name]"
// ============================================================
const projects = [
  {
    title: "AI Phishing Analysis",
    description: "Research project investigating how generative AI can be used to craft more convincing phishing messages. I compare human-written and AI-generated samples, identify persuasive linguistic and social-engineering features, evaluate increased risk, and recommend awareness and mitigation strategies.",
    tags: ["AI Security", "Research", "Cybersecurity"],
    github: null,
    demo: null,
  },
  {
    title: "Project Two",
    description: "Another project you're proud of. What problem did it solve?",
    tags: ["JavaScript", "React"],
    github: "https://github.com/yourusername/project-two",
    demo: "https://yourproject.netlify.app",
  },
  {
    title: "Project Three",
    description: "Keep it brief — one or two sentences is plenty.",
    tags: ["Java", "Algorithms"],
    github: "https://github.com/yourusername/project-three",
    demo: null,
  },
];

// ============================================================
// SKILLS DATA
// TODO: Replace with your actual skills.
// Ask Copilot to help format this list based on your resume.
// ============================================================
const skills = [
  "Python", "JavaScript", "Java", "C",
  "HTML & CSS", "Git & GitHub",
  "React", "Node.js",
  "SQL", "Linux",
];

// ============================================================
// RENDER PROJECTS
// ============================================================
function renderProjects() {
  const container = document.getElementById("projects-container");
  if (!container) return;

  container.innerHTML = projects
    .map(
      (project) => `
      <div class="project-card">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tags">
          ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
        <div class="project-links">
          ${project.github ? `<a href="${project.github}" target="_blank">GitHub →</a>` : ""}
          ${project.demo ? `<a href="${project.demo}" target="_blank">Live Demo →</a>` : ""}
        </div>
      </div>
    `
    )
    .join("");
}

// ============================================================
// RENDER SKILLS
// ============================================================
function renderSkills() {
  const container = document.getElementById("skills-container");
  if (!container) return;

  container.innerHTML = skills
    .map((skill) => `<span class="skill-badge">${skill}</span>`)
    .join("");
}

// ============================================================
// DARK MODE TOGGLE
// ============================================================
const THEME_STORAGE_KEY = "theme";

function getStoredTheme() {
  return localStorage.getItem(THEME_STORAGE_KEY) || "light";
}

function applyTheme(theme) {
  const isDark = theme === "dark";
  document.body.dataset.theme = isDark ? "dark" : "";

  const toggleButton = document.getElementById("theme-toggle");
  if (toggleButton) {
    toggleButton.setAttribute("aria-pressed", String(isDark));
    toggleButton.textContent = isDark ? "Light Mode" : "Dark Mode";
  }

  localStorage.setItem(THEME_STORAGE_KEY, isDark ? "dark" : "light");
}

function toggleDarkMode() {
  const currentTheme = document.body.dataset.theme === "dark" ? "dark" : "light";
  applyTheme(currentTheme === "dark" ? "light" : "dark");
}

// ============================================================
// UPDATE FOOTER YEAR
// ============================================================
function updateYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

// ============================================================
// INIT
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderSkills();
  updateYear();

  applyTheme(getStoredTheme());

  const toggleButton = document.getElementById("theme-toggle");
  if (toggleButton) {
    toggleButton.addEventListener("click", toggleDarkMode);
  }
});
