<<<<<<< HEAD
// BendMark Carousel Script

class Carousel {
  constructor() {
    this.slides = document.querySelectorAll('.carousel-slide');
    this.dots = document.querySelectorAll('.carousel-dot');
    this.prevBtn = document.querySelector('.carousel-btn.prev');
    this.nextBtn = document.querySelector('.carousel-btn.next');
    this.currentSlide = 0;
    this.slideInterval = null;

    this.init();
  }

  init() {
    // Add click handlers to buttons
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.prevSlide());
    }
    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.nextSlide());
    }

    // Add click handlers to dots
    this.dots.forEach((dot, index) => {
      dot.addEventListener('click', () => this.goToSlide(index));
    });

    // Auto-advance slides every 6 seconds
    this.startAutoSlide();

    // Stop auto-slide on hover, resume on leave
    const carousel = document.querySelector('.carousel');
    if (carousel) {
      carousel.addEventListener('mouseenter', () => this.stopAutoSlide());
      carousel.addEventListener('mouseleave', () => this.startAutoSlide());
    }

    // Show first slide
    this.showSlide(0);
  }

  showSlide(index) {
    // Remove active class from all slides and dots
    this.slides.forEach(slide => slide.classList.remove('active'));
    this.dots.forEach(dot => dot.classList.remove('active'));

    // Ensure index is within bounds
    if (index >= this.slides.length) {
      this.currentSlide = 0;
    } else if (index < 0) {
      this.currentSlide = this.slides.length - 1;
    } else {
      this.currentSlide = index;
    }

    // Add active class to current slide and dot
    if (this.slides[this.currentSlide]) {
      this.slides[this.currentSlide].classList.add('active');
    }
    if (this.dots[this.currentSlide]) {
      this.dots[this.currentSlide].classList.add('active');
    }
  }

  nextSlide() {
    this.stopAutoSlide();
    this.showSlide(this.currentSlide + 1);
    this.startAutoSlide();
  }

  prevSlide() {
    this.stopAutoSlide();
    this.showSlide(this.currentSlide - 1);
    this.startAutoSlide();
  }

  goToSlide(index) {
    this.stopAutoSlide();
    this.showSlide(index);
    this.startAutoSlide();
  }

  startAutoSlide() {
    this.slideInterval = setInterval(() => {
      this.showSlide(this.currentSlide + 1);
    }, 6000);
  }

  stopAutoSlide() {
    clearInterval(this.slideInterval);
  }
}

// Mobile Menu Toggle
function initMobileMenu() {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('nav');

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
      });
    });
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const carousel = new Carousel();
  initMobileMenu();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
=======
// BendMark Carousel Script

class Carousel {
  constructor() {
    this.slides = document.querySelectorAll('.carousel-slide');
    this.dots = document.querySelectorAll('.carousel-dot');
    this.prevBtn = document.querySelector('.carousel-btn.prev');
    this.nextBtn = document.querySelector('.carousel-btn.next');
    this.currentSlide = 0;
    this.slideInterval = null;

    this.init();
  }

  init() {
    // Add click handlers to buttons
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.prevSlide());
    }
    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.nextSlide());
    }

    // Add click handlers to dots
    this.dots.forEach((dot, index) => {
      dot.addEventListener('click', () => this.goToSlide(index));
    });

    // Auto-advance slides every 6 seconds
    this.startAutoSlide();

    // Stop auto-slide on hover, resume on leave
    const carousel = document.querySelector('.carousel');
    if (carousel) {
      carousel.addEventListener('mouseenter', () => this.stopAutoSlide());
      carousel.addEventListener('mouseleave', () => this.startAutoSlide());
    }

    // Show first slide
    this.showSlide(0);
  }

  showSlide(index) {
    // Remove active class from all slides and dots
    this.slides.forEach(slide => slide.classList.remove('active'));
    this.dots.forEach(dot => dot.classList.remove('active'));

    // Ensure index is within bounds
    if (index >= this.slides.length) {
      this.currentSlide = 0;
    } else if (index < 0) {
      this.currentSlide = this.slides.length - 1;
    } else {
      this.currentSlide = index;
    }

    // Add active class to current slide and dot
    if (this.slides[this.currentSlide]) {
      this.slides[this.currentSlide].classList.add('active');
    }
    if (this.dots[this.currentSlide]) {
      this.dots[this.currentSlide].classList.add('active');
    }
  }

  nextSlide() {
    this.stopAutoSlide();
    this.showSlide(this.currentSlide + 1);
    this.startAutoSlide();
  }

  prevSlide() {
    this.stopAutoSlide();
    this.showSlide(this.currentSlide - 1);
    this.startAutoSlide();
  }

  goToSlide(index) {
    this.stopAutoSlide();
    this.showSlide(index);
    this.startAutoSlide();
  }

  startAutoSlide() {
    this.slideInterval = setInterval(() => {
      this.showSlide(this.currentSlide + 1);
    }, 6000);
  }

  stopAutoSlide() {
    clearInterval(this.slideInterval);
  }
}

// Mobile Menu Toggle
function initMobileMenu() {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('nav');

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
      });
    });
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const carousel = new Carousel();
  initMobileMenu();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
>>>>>>> c487bc2 (Added compatible images)
