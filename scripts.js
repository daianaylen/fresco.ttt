// scripts.js
// DARK MODE TOGGLE
const toggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Aplicar el tema guardado en localStorage (si existe)
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  toggle.setAttribute('aria-pressed', 'true');
} else {
  toggle.setAttribute('aria-pressed', 'false');
}

toggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  toggle.setAttribute('aria-pressed', isDark);
});


// CARRUSEL para todas las galerías
document.querySelectorAll('.carrusel').forEach(carrusel => {
  const galeria = carrusel.querySelector('.galeria');
  const prevBtn = carrusel.querySelector('.prev');
  const nextBtn = carrusel.querySelector('.next');
  let autoSlide;

  prevBtn.addEventListener('click', () => {
    galeria.scrollBy({ left: -300, behavior: 'smooth' });
  });
  nextBtn.addEventListener('click', () => {
    galeria.scrollBy({ left: 300, behavior: 'smooth' });
  });

  function startAutoSlide() {
    autoSlide = setInterval(() => {
      galeria.scrollBy({ left: 300, behavior: 'smooth' });
    }, 4000);
  }

  galeria.addEventListener('mouseenter', () => clearInterval(autoSlide));
  galeria.addEventListener('mouseleave', startAutoSlide);

  startAutoSlide();
});

// FORMULARIO - Mensaje ficticio de envío para UX
const form = document.querySelector('form');
const msg = document.createElement('p');
msg.className = 'form-message';
form.appendChild(msg);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  msg.textContent = 'Enviando...';
  msg.style.color = 'var(--celeste)';

  setTimeout(() => {
    msg.textContent = 'Mensaje enviado con éxito. ¡Gracias por escribirle a Fresco!';
    msg.style.color = 'green';
    form.reset();
  }, 1500);
});
// MENÚ HAMBURGUESA
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
