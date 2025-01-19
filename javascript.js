// carousel
var swiper = new Swiper(".centered-slide-carousel", {
    centeredSlides: true,
    paginationClickable: true,
    loop: true,
    spaceBetween: 30,
    slideToClickedSlide: true,
    pagination: {
      el: ".centered-slide-carousel .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1920: {
        slidesPerView: 4,
        spaceBetween: 30
      },
      1028: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      990: {
        slidesPerView: 1,
        spaceBetween: 0
      }
    }
   });

  //  chat js
  const chatWindow = document.getElementById('chatWindow');
    const chatMessages = document.getElementById('chatMessages');
    const messageInput = document.getElementById('messageInput');

    //chat window
    function toggleChat() {
      if (chatWindow.style.display === 'none' || chatWindow.style.display === '') {
        chatWindow.style.display = 'flex';
      } else {
        chatWindow.style.display = 'none';
      }
    }

    // Send a message
    function sendMessage() {
      const messageText = messageInput.value.trim();
      if (messageText) {
        const messageElement = document.createElement('div');
        messageElement.textContent = messageText;
        chatMessages.appendChild(messageElement);
        messageInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight; 
      }
    }

    //dropdown 
    function toggleDropdown() {
      const dropdownContent = document.getElementById('dropdownContent');
      if (dropdownContent.style.display === 'none' || dropdownContent.style.display === '') {
        dropdownContent.style.display = 'block';
      } else {
        dropdownContent.style.display = 'none';
      }
    }

    // Notification Dropdown
    function toggleNotificationDropdown() {
      const notificationDropdownContent = document.getElementById('notificationDropdownContent');
      if (notificationDropdownContent.style.display === 'none' || notificationDropdownContent.style.display === '') {
        notificationDropdownContent.style.display = 'block';
      } else {
        notificationDropdownContent.style.display = 'none';
      }
    }
 