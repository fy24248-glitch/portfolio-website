// Smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Basic contact form handling (front-end only demo)
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  status.textContent = "Thanks for reaching out! (This is a demo form — connect it to a backend or a service like Formspree to make it functional.)";
  form.reset();
});
