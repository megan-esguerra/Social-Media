const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Scroll to the previous set of items
prevBtn.addEventListener('click', () => {
  carousel.scrollBy({
    left: -300, // Adjust to the width of your items
    behavior: 'smooth'
  });
});

// Scroll to the next set of items
nextBtn.addEventListener('click', () => {
  carousel.scrollBy({
    left: 300, // Adjust to the width of your items
    behavior: 'smooth'
  });
});


   
    // Notification Dropdown
    function toggleNotificationDropdown() {
      const notificationDropdownContent = document.getElementById('notificationDropdownContent');
      if (notificationDropdownContent.style.display === 'none' || notificationDropdownContent.style.display === '') {
        notificationDropdownContent.style.display = 'block';
      } else {
        notificationDropdownContent.style.display = 'none';
      }
    }
    
    window.addEventListener("load", ()=> {
      const url = window.location.href;
      if(url.endsWith('.html')){
        const newUrl = url.slice(0, -5);

        window.history.pushState({},"", newUrl)
      }
    });