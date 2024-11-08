// Load user preference and apply theme
function getUserPreference() {
    return localStorage.getItem("theme") || "system";
  }
  
  function saveUserPreference(userPreference) {
    localStorage.setItem("theme", userPreference);
  }
  
  function getAppliedMode(userPreference) {
    if (userPreference === "light") return "light";
    if (userPreference === "dark") return "dark";
    return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  
  function setAppliedMode(mode) {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const themeMenu = document.getElementById("theme-menu");
  
    // Initialize theme based on preference
    let userPreference = getUserPreference();
    setAppliedMode(getAppliedMode(userPreference));
  
    // Toggle dropdown menu visibility
    themeToggle.addEventListener("click", () => {
      themeMenu.classList.toggle("hidden");
    });
  
    // Apply theme on icon click
    document.querySelectorAll(".theme-option").forEach(option => {
      option.addEventListener("click", (event) => {
        const selectedTheme = event.currentTarget.getAttribute("data-theme");
        userPreference = selectedTheme;
        saveUserPreference(selectedTheme);
        setAppliedMode(getAppliedMode(selectedTheme));
        themeMenu.classList.add("hidden"); // Hide dropdown
      });
    });
  
    // Hide dropdown if clicked outside
    document.addEventListener("click", (event) => {
      if (!themeToggle.contains(event.target) && !themeMenu.contains(event.target)) {
        themeMenu.classList.add("hidden");
      }
    });
  });
  