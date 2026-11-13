const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});
document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const elements = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !reducedMotion) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
  elements.forEach(el => observer.observe(el));
} else { elements.forEach(el => el.classList.add('visible')); }
const copyButton = document.getElementById('copy-email');
copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('varunhirapara0@gmail.com');
    copyButton.innerHTML = 'Email copied ✓';
    setTimeout(() => { copyButton.innerHTML = 'Copy email <span>⧉</span>'; }, 2400);
  } catch { location.href = 'mailto:varunhirapara0@gmail.com'; }
});
document.getElementById('year').textContent = new Date().getFullYear();
