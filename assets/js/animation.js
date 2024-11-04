// Toggle Sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('hidden');
    
    // Menyisakan sidebar untuk ikon
    if (sidebar.classList.contains('hidden')) {
        sidebar.style.width = '50px'; // Lebar untuk ikon
    } else {
        sidebar.style.width = '200px'; // Lebar penuh sidebar
    }
}

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