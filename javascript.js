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

// loading frame
document.addEventListener("DOMContentLoaded", function() {
  const iframe = document.getElementById('youtube-iframe');
  const loadingPlaceholder = document.getElementById('loading-placeholder');

  iframe.onload = function() {
    setTimeout(() => {
      loadingPlaceholder.style.display = 'none';
      iframe.classList.remove('hidden');
    }, 100); // 100ms delay
  };
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

    // Resources javascript

    function toggleDropdown(id) {
      const dropdown = document.getElementById(id);
      const button = dropdown.previousElementSibling;
      
      // Toggle visibility
      if (dropdown.classList.contains('hidden')) {
        dropdown.classList.remove('hidden');
        button.classList.add('active');
      } else {
        dropdown.classList.add('hidden');
        button.classList.remove('active');
      }
    }
    
    // Script for Chat Panel Interactivity
document.addEventListener("DOMContentLoaded", () => {
  const backButton = document.querySelector(".back-btn");
  const closeButton = document.querySelector(".close-btn");
  const startChatButton = document.querySelector(".start-chat-btn");

  // Navigate Back Action (Placeholder)
  backButton.addEventListener("click", () => {
    alert("Back button clicked!");
  });

  // Close Chat Panel
  closeButton.addEventListener("click", () => {
    document.querySelector(".main-panel").style.display = "none";
    alert("Chat panel closed!");
  });

  // Start New Chat Action (Placeholder)
  startChatButton.addEventListener("click", () => {
    alert("Starting a new chat...");
  });
});


function toggleChat() {
  const chatContainer = document.getElementById("chat-container");
  chatContainer.classList.toggle("hidden");
}
