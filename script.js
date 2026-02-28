document.addEventListener("DOMContentLoaded", function () {

  /* =====================================
     SLIDER (dùng class .slide)
  ===================================== */

  const slides = document.querySelectorAll(".slide");
  let current = 0;

  if (slides.length > 0) {

    function showSlide(index) {
      slides.forEach(slide => slide.classList.remove("active"));
      slides[index].classList.add("active");
    }

    function nextSlide() {
      current = (current + 1) % slides.length;
      showSlide(current);
    }

    function prevSlide() {
      current = (current - 1 + slides.length) % slides.length;
      showSlide(current);
    }

    // Xuất ra global để nút có thể gọi
    window.nextSlide = nextSlide;
    window.prevSlide = prevSlide;

    // Tự động chạy 4 giây
    setInterval(nextSlide, 4000);
  }


  /* =====================================
     ACTIVE MENU
  ===================================== */

  window.setActive = function (element, category) {

    const links = document.querySelectorAll(".navbar a");
    links.forEach(link => link.classList.remove("active"));

    element.classList.add("active");

    if (typeof showSection === "function") {
      showSection(category);
    }
  };


  /* =====================================
     ĐỔI MÀU NAVBAR KHI CUỘN
  ===================================== */

  const navbar = document.getElementById("mainNavbar");

  if (navbar) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }

});