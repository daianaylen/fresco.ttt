// === CARRUSEL para todas las galerías ===
document.querySelectorAll('.carrusel').forEach(carrusel => {
  const galeria = carrusel.querySelector('.galeria');
  const prevBtn = carrusel.querySelector('.prev');
  const nextBtn = carrusel.querySelector('.next');
  let autoSlide;

  function startAutoSlide() {
    autoSlide = setInterval(() => {
      galeria.scrollBy({ left: galeria.clientWidth * 0.8, behavior: 'smooth' });
    }, 4000);
  }

  if (prevBtn && galeria) {
    prevBtn.addEventListener('click', () => {
      galeria.scrollBy({ left: -galeria.clientWidth * 0.8, behavior: 'smooth' });
      clearInterval(autoSlide); // detiene el autoslide
    });
  }

  if (nextBtn && galeria) {
    nextBtn.addEventListener('click', () => {
      galeria.scrollBy({ left: galeria.clientWidth * 0.8, behavior: 'smooth' });
      clearInterval(autoSlide); // detiene el autoslide
    });
  }

  if (galeria) {
    galeria.addEventListener('mouseenter', () => clearInterval(autoSlide));
    galeria.addEventListener('mouseleave', startAutoSlide);
    startAutoSlide();
  }

  // Asegurar clickeabilidad de botones
  if (prevBtn) {
    prevBtn.style.pointerEvents = 'auto';
    prevBtn.style.zIndex = '9999';
  }
  if (nextBtn) {
    nextBtn.style.pointerEvents = 'auto';
    nextBtn.style.zIndex = '9999';
  }
});

// === MENÚ HAMBURGUESA ===
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  document.body.style.overflow = navLinks.classList.contains('show') ? 'hidden' : '';
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('#nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
    document.body.style.overflow = '';
  });
});

// === DARK MODE TOGGLE (con ícono y guardado) ===
const toggleBtn = document.getElementById('dark-mode-toggle');
const icon = document.getElementById('theme-icon');
const htmlBody = document.body;

// Inicializar modo según localStorage
const isDark = localStorage.getItem('theme') === 'dark';
if (isDark) {
  htmlBody.classList.add('dark-mode');
  icon.textContent = '☀️';
  toggleBtn.setAttribute('aria-pressed', 'true');
} else {
  icon.textContent = '🌙';
  toggleBtn.setAttribute('aria-pressed', 'false');
}

// Alternar modo
toggleBtn.addEventListener('click', () => {
  htmlBody.classList.toggle('dark-mode');
  const isNowDark = htmlBody.classList.contains('dark-mode');
  icon.textContent = isNowDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isNowDark ? 'dark' : 'light');
  toggleBtn.setAttribute('aria-pressed', isNowDark);
});
