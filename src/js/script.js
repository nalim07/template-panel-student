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

// Toggle Timetable
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const schedule = {
    'Monday': [['07:30', 'Informatics']],
    'Tuesday': [['07:30', 'Music']],
    'Wednesday': [['07:30', 'Mathematics']],
    'Thursday': [['07:30', 'Religion']],
    'Friday': [['07:30', 'PE']]
};
let currentDayIndex = 0;

function updateTimetable() {
    const currentDay = days[currentDayIndex];
    document.getElementById('currentDay').textContent = currentDay;
    const timetableBody = document.getElementById('timetableBody');
    timetableBody.innerHTML = schedule[currentDay].map(([time, subject]) => `
        <tr class="border-b dark:border-white">
            <td class="py-2 text-center">${time}</td>
            <td class="py-2 text-center">${subject}</td>
        </tr>
    `).join('');
}

document.getElementById('prevDay').addEventListener('click', () => {
    currentDayIndex = (currentDayIndex - 1 + days.length) % days.length;
    updateTimetable();
});

document.getElementById('nextDay').addEventListener('click', () => {
    currentDayIndex = (currentDayIndex + 1) % days.length;
    updateTimetable();
});

// Initialize the timetable
updateTimetable();

// Toggle More Link
document.addEventListener("DOMContentLoaded", function () {
  const textContent = document.getElementById("textContent");
  const moreLink = document.getElementById("moreLink");
  const fullText = textContent.textContent.trim(); // Simpan teks asli
  const maxLength = 50; // Batas karakter sebelum memotong

  // Jika teks lebih panjang dari maxLength
  if (fullText.length > maxLength) {
      const truncatedText = fullText.substring(0, maxLength).trim() + "...";
      textContent.textContent = truncatedText; // Potong teks
      moreLink.style.display = "inline"; // Tampilkan tautan [more]
  }
});

