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

// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.contact-form form');
  const formMessage = document.getElementById('formMessage');
  
  if (form) {
    form.addEventListener('submit', function(e) {
      // Show sending state
      const submitBtn = this.querySelector('.submit-btn');
      if (submitBtn) {
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Reset button after 5 seconds if form submission fails
        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
        }, 5000);
      }
    });
  }
  
  // Show success/error messages from Web3Forms
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('success')) {
    showFormMessage('success', 'Thank you! Your message has been sent. We\'ll respond within 24 hours.');
  }
  if (urlParams.has('error')) {
    showFormMessage('error', 'Something went wrong. Please try again or contact us directly.');
  }
});

function showFormMessage(type, message) {
  const formMessage = document.getElementById('formMessage');
  if (formMessage) {
    formMessage.className = 'form-message ' + type;
    formMessage.textContent = message;
    formMessage.style.display = 'block';
    
    // Scroll to message
    formMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Auto-hide after 10 seconds
    setTimeout(() => {
      formMessage.style.display = 'none';
    }, 10000);
  }
}
  

  // Mobile Navigation Toggle

  const homeLink = document.querySelector('a[href="#home"]');
  if (homeLink) {
    homeLink.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

});
