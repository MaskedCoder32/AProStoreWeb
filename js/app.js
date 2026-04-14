// Drawer Logic (Globally accessible)
window.toggleMenu = function() {
  const menu = document.getElementById('side-menu');
  const backdrop = document.getElementById('menu-backdrop');

  if (menu.classList.contains('translate-x-full')) {
    menu.classList.remove('translate-x-full');
    backdrop.classList.remove('opacity-0', 'pointer-events-none');
    backdrop.classList.add('opacity-100', 'pointer-events-auto');
    document.body.style.overflow = 'hidden';
  } else {
    menu.classList.add('translate-x-full');
    backdrop.classList.add('opacity-0', 'pointer-events-none');
    backdrop.classList.remove('opacity-100', 'pointer-events-auto');
    document.body.style.overflow = '';
  }
};

// Highlight Active Menu Item
document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname.replace('.html', '').replace(/\/$/, '');
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href').replace('.html', '').replace(/\/$/, '');
    if ((currentPath === '' || currentPath === '/index') && linkPath === '') {
      link.classList.add('active');
    } else if (currentPath !== '' && linkPath !== '' && currentPath.includes(linkPath)) {
      link.classList.add('active');
    }
  });
});

// Fixed Header Scroll Blur
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  if (window.scrollY > 20) {
    navbar.classList.add('bg-[#030712]/80', 'backdrop-blur-xl', 'border-white/10', 'shadow-2xl');
    navbar.classList.remove('border-transparent');
  } else {
    navbar.classList.remove('bg-[#030712]/80', 'backdrop-blur-xl', 'border-white/10', 'shadow-2xl');
    navbar.classList.add('border-transparent');
  }
});

// Scroll Reveal Animations
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  const windowHeight = window.innerHeight;
  reveals.forEach((reveal) => {
    const elementTop = reveal.getBoundingClientRect().top;
    if (elementTop < windowHeight - 50) reveal.classList.add('active');
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// Floating Particles
function createParticle() {
  const particleContainer = document.getElementById('particles-container');
  if(!particleContainer) return;
  const particle = document.createElement('div');
  particle.style.position = 'absolute';
  particle.style.width = Math.random() * 3 + 1 + 'px';
  particle.style.height = particle.style.width;
  particle.style.background = '#10b981';
  particle.style.borderRadius = '50%';
  particle.style.boxShadow = `0 0 15px #10b981`;
  
  particle.style.left = Math.random() * 100 + 'vw';
  particle.style.bottom = '-10px';
  particle.style.opacity = Math.random() * 0.4 + 0.1;
  
  particleContainer.appendChild(particle);
  
  const animation = particle.animate([
    { transform: 'translateY(0)', opacity: particle.style.opacity },
    { transform: `translateY(-100vh) translateX(${(Math.random() - 0.5) * 100}px)`, opacity: 0 }
  ], { duration: Math.random() * 6000 + 6000, easing: 'linear', fill: 'forwards' });
  
  animation.onfinish = () => particle.remove();
}
setInterval(createParticle, 400);