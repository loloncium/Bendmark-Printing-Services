/* BendMark - Form Handling JavaScript */

class FormHandler {
  constructor() {
    this.initForms();
  }

  initForms() {
    // Get all quote buttons
    const quoteButtons = document.querySelectorAll('.quote-btn');
    
    quoteButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        this.showContactModal();
      });
    });

    // Handle mobile modal close
    const closeBtn = document.querySelector('.modal-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.closeModal());
    }

    // Handle form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    // Close modal when clicked outside
    const modal = document.getElementById('contactModal');
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          this.closeModal();
        }
      });
    }
  }

  showContactModal() {
    const modal = document.getElementById('contactModal');
    if (modal) {
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
      // Fallback: show alert if modal doesn't exist
      alert('To request a quote, please contact us:\nEmail: info@bendmark.com\nPhone: (123) 456-7890');
    }
  }

  closeModal() {
    const modal = document.getElementById('contactModal');
    if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto'; // Allow scrolling
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // Validate form
    if (!this.validateForm(data)) {
      alert('Please fill in all required fields.');
      return;
    }

    // Show loading state
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Send form data
    this.sendFormData(data, submitBtn, originalText);
  }

  validateForm(data) {
    return data.name && data.email && data.phone && data.message;
  }

  sendFormData(data, button, originalText) {
    // Option 1: Using Formspree
    // Uncomment and replace YOUR_FORM_ID with your Formspree form ID
    /*
    fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
      button.textContent = originalText;
      button.disabled = false;
      alert('Thank you! We will contact you shortly.');
      document.getElementById('contactForm').reset();
      this.closeModal();
    })
    .catch(error => {
      button.textContent = originalText;
      button.disabled = false;
      alert('Error sending form. Please try again or contact us directly.');
    });
    */

    // Option 2: Using your backend API
    /*
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
      button.textContent = originalText;
      button.disabled = false;
      alert(result.message);
      if (result.success) {
        document.getElementById('contactForm').reset();
        this.closeModal();
      }
    })
    .catch(error => {
      button.textContent = originalText;
      button.disabled = false;
      alert('Error sending form. Please try again or contact us directly.');
    });
    */

    // Fallback: Show success message and contact info
    button.textContent = originalText;
    button.disabled = false;
    alert(
      'Thank you for your inquiry!\n\n' +
      'We appreciate your interest. Please note: automated form submission is not configured.\n\n' +
      'To proceed with your quote request:\n' +
      '📧 Email: info@bendmark.com\n' +
      '📞 Phone: (123) 456-7890\n\n' +
      'Please include your project details in your email.'
    );
    this.closeModal();
  }
}

// Initialize forms when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new FormHandler();
});
