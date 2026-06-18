const currentPage = window.location.pathname.split('/').pop() || 'nitaq-marketing-site.html';
document.querySelectorAll('[data-nav-link]').forEach((link) => {
  const target = link.getAttribute('href');
  if (target === currentPage) {
    link.classList.add('is-active');
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll('.reveal').forEach((node) => observer.observe(node));