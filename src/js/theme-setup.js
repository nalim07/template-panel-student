// Immediate theme setup to avoid flickering
(function() {
    const userPreference = localStorage.getItem("theme") || "system";
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const appliedTheme = userPreference === "dark" || (userPreference === "system" && systemPrefersDark) ? "dark" : "light";
  
    // Apply theme directly to <html> to prevent flicker
    if (appliedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  
    // Optional: add a class to avoid flash of unstyled content (FOUC)
    document.documentElement.classList.add("js-loaded");
  })();
  