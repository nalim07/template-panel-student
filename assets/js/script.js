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

