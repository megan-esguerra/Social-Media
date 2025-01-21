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
    