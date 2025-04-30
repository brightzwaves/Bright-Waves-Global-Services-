// script.js
ScrollReveal().reveal('.hero-content', { delay: 200, origin: 'left', distance: '60px', duration: 1000 });
ScrollReveal().reveal('.hero-img', { delay: 400, origin: 'right', distance: '60px', duration: 1000 });
ScrollReveal().reveal('.about-text', { delay: 200, origin: 'bottom', distance: '60px', duration: 1000 });
ScrollReveal().reveal('.about-img', { delay: 400, origin: 'top', distance: '60px', duration: 1000 });
ScrollReveal().reveal('.project-card, .service', { interval: 100, origin: 'bottom', distance: '40px', duration: 800 });

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
