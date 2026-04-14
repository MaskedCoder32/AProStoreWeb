// Drawer Menu Logic
function toggleMenu() {
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
}

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 30) {
    navbar.classList.add('bg-[#050505]/80', 'backdrop-blur-xl', 'border-white/10', 'py-4', 'shadow-2xl');
    navbar.classList.remove('py-6', 'border-transparent');
  } else {
    navbar.classList.remove('bg-[#050505]/80', 'backdrop-blur-xl', 'border-white/10', 'py-4', 'shadow-2xl');
    navbar.classList.add('py-6', 'border-transparent');
  }
});

// Scroll Reveal
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

// Floating Green Particles (Replaces Snowflakes)
const particleContainer = document.getElementById('particles-container');
const particleColors = ['#10b981', '#34d399', '#059669'];

function createParticle() {
  if(!particleContainer) return;
  const particle = document.createElement('div');
  particle.style.position = 'absolute';
  particle.style.width = Math.random() * 4 + 2 + 'px';
  particle.style.height = particle.style.width;
  particle.style.background = particleColors[Math.floor(Math.random() * particleColors.length)];
  particle.style.borderRadius = '50%';
  particle.style.boxShadow = `0 0 10px ${particle.style.background}`;
  
  const startX = Math.random() * 100;
  const duration = Math.random() * 5000 + 5000;
  
  particle.style.left = startX + 'vw';
  particle.style.bottom = '-10px';
  particle.style.opacity = Math.random() * 0.5 + 0.2;
  
  particleContainer.appendChild(particle);
  
  const animation = particle.animate([
    { transform: 'translateY(0)', opacity: particle.style.opacity },
    { transform: `translateY(-100vh) translateX(${(Math.random() - 0.5) * 50}px)`, opacity: 0 }
  ], { duration: duration, easing: 'linear', fill: 'forwards' });
  
  animation.onfinish = () => particle.remove();
}
setInterval(createParticle, 300);