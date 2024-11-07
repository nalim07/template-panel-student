// Toggle Sidebar
document.getElementById('toggleSidebar').addEventListener('click', function() {
  document.getElementById('sidebar').classList.toggle('collapsed');
});

// Toggle Sidebar Arrow ketika di klik
document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('toggleSidebar');
  const arrowIcon = toggleButton.querySelector('svg');

  toggleButton.addEventListener('click', function () {
      arrowIcon.classList.toggle('rotate-180');
  });
});

// Toggle Menu
function toggleMenu(menuId) {
  const menuContent = document.getElementById(menuId);
  const arrow = document.getElementById(menuId === 'reportContent' ? 'reportArrow' : 'transactionArrow');
  
  if (menuContent.style.maxHeight) {
      menuContent.style.maxHeight = null;
      arrow.style.transform = "rotate(180deg)";
  } else {
      menuContent.style.maxHeight = menuContent.scrollHeight + "px";
      arrow.style.transform = "rotate(0deg)";
  }
}

// Membuka menu secara default
document.addEventListener("DOMContentLoaded", function() {
  const reportContent = document.getElementById("reportContent");
  const transactionContent = document.getElementById("transactionContent");
  const reportArrow = document.getElementById("reportArrow");
  const transactionArrow = document.getElementById("transactionArrow");
  
  if (reportContent) {
    reportContent.style.maxHeight = reportContent.scrollHeight + "px";
    reportArrow.style.transform = "rotate(0deg)";
  }
  if (transactionContent) {
    transactionContent.style.maxHeight = transactionContent.scrollHeight + "px";
    transactionArrow.style.transform = "rotate(0deg)";
  }
});

// Select the toggle switch input
const themeToggleSwitch = document.getElementById('switch');

// Function to toggle between light and dark mode
function toggleTheme() {
    if (themeToggleSwitch.checked) {
        // Enable Dark Mode
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        // Enable Light Mode
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
}

// Event listener for the theme toggle switch
themeToggleSwitch.addEventListener('change', toggleTheme);

// Initialize theme based on saved preference (ignores device preference)
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
        themeToggleSwitch.checked = true;
        document.documentElement.classList.add('dark');
    } else {
        themeToggleSwitch.checked = false;
        document.documentElement.classList.remove('dark');
    }
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', initializeTheme);
