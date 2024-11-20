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

// Toggle Sliding Menu
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');
  const menuClose = document.getElementById('menu-close');

  menuToggle.addEventListener('click', () => {
      menu.classList.add('show'); // Show the menu
  });

  menuClose.addEventListener('click', () => {
      menu.classList.remove('show'); // Hide the menu
  });

  // Optional: Close the menu when clicking outside of it
  menu.addEventListener('click', (event) => {
      if (event.target === menu) {
          menu.classList.remove('show');
      }
  });
});

