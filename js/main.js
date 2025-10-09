// ===== MOBILE NAVIGATION TOGGLE =====
document.querySelector('.nav-toggle').addEventListener('click', function() {
  document.querySelector('.main-nav').classList.toggle('active');
});



document.addEventListener('DOMContentLoaded', function() {

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({ top: targetElement.offsetTop - 80, behavior: 'smooth' });
      }
    });
  });

  // Fade-in animation on scroll
  const fadeElements = document.querySelectorAll('.fade-in');
  const fadeInOnScroll = () => {
    fadeElements.forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 150) {
        el.classList.add('visible');
      }
    });
  };
  window.addEventListener('scroll', fadeInOnScroll);
  fadeInOnScroll();

  // Slider functionality
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.slider-dot');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const slidesContainer = document.querySelector('.slides');
  let slideInterval;

  function showSlide(index) {
    currentSlide = index;
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    slides.forEach(slide => slide.classList.remove('active'));
    slides[currentSlide].classList.add('active');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  function startSlideShow() { slideInterval = setInterval(nextSlide, 4000); }
  function stopSlideShow() { clearInterval(slideInterval); }

  dots.forEach(dot => dot.addEventListener('click', function() {
    showSlide(parseInt(this.getAttribute('data-index')));
    stopSlideShow();
    startSlideShow();
  }));

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => { prevSlide(); stopSlideShow(); startSlideShow(); });
    nextBtn.addEventListener('click', () => { nextSlide(); stopSlideShow(); startSlideShow(); });
  }

  const slider = document.querySelector('.hero-slider');
  if (slider) {
    slider.addEventListener('mouseenter', stopSlideShow);
    slider.addEventListener('mouseleave', startSlideShow);
  }

  showSlide(currentSlide);
  startSlideShow();

// ===== CONTACT FORM HANDLER WITH STYLED MESSAGE =====
document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector('#contactForm');
  const messageBox = document.querySelector('#formMessage');

  if (form) {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();

      const formData = new FormData(form);
      messageBox.className = 'form-message'; // reset classes
      messageBox.textContent = 'Sending message...';
      messageBox.classList.add('show');

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: formData
        });

        if (response.ok) {
          messageBox.textContent = '✅ Thank you! Your message has been sent successfully.';
          messageBox.classList.add('success', 'show');
          form.reset();
        } else {
          messageBox.textContent = '❌ Oops! Something went wrong. Please try again.';
          messageBox.classList.add('error', 'show');
        }
      } catch (error) {
        messageBox.textContent = '⚠️ Network error. Please check your connection.';
        messageBox.classList.add('error', 'show');
      }

      // Hide message after 5 seconds
      setTimeout(() => {
        messageBox.classList.remove('show');
      }, 5000);
    });
  }
});


  

  // Mobile Navigation Toggle

  const homeLink = document.querySelector('a[href="#home"]');
  if (homeLink) {
    homeLink.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

});
