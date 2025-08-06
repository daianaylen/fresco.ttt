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
      clearInterval(autoSlide);
    });
  }

  if (nextBtn && galeria) {
    nextBtn.addEventListener('click', () => {
      galeria.scrollBy({ left: galeria.clientWidth * 0.8, behavior: 'smooth' });
      clearInterval(autoSlide);
    });
  }

  if (galeria) {
    galeria.addEventListener('mouseenter', () => clearInterval(autoSlide));
    galeria.addEventListener('mouseleave', startAutoSlide);
    startAutoSlide();
  }

  if (prevBtn) {
    prevBtn.style.pointerEvents = 'auto';
    prevBtn.style.zIndex = '9999';
  }
  if (nextBtn) {
    nextBtn.style.pointerEvents = 'auto';
    nextBtn.style.zIndex = '9999';
  }
});

// === MENÚ HAMBURGUESA con video de fondo ===
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const videoHumo = document.getElementById('video-humo-menu'); // Nuevo: referencia al video

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  const menuAbierto = navLinks.classList.contains('show');
  document.body.style.overflow = menuAbierto ? 'hidden' : '';

  // Mostrar/ocultar el video de humo
  if (videoHumo) {
    videoHumo.style.display = menuAbierto ? 'block' : 'none';
  }
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('#nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
    document.body.style.overflow = '';

    // Ocultar el video de humo
    if (videoHumo) {
      videoHumo.style.display = 'none';
    }
  });
});

// === DARK MODE TOGGLE (con ícono y guardado) ===
const toggleBtn = document.getElementById('dark-mode-toggle');
const icon = document.getElementById('theme-icon');
const htmlBody = document.body;

const isDark = localStorage.getItem('theme') === 'dark';
if (isDark) {
  htmlBody.classList.add('dark-mode');
  icon.textContent = '☀️';
  toggleBtn.setAttribute('aria-pressed', 'true');
} else {
  icon.textContent = '🌙';
  toggleBtn.setAttribute('aria-pressed', 'false');
}

toggleBtn.addEventListener('click', () => {
  htmlBody.classList.toggle('dark-mode');
  const isNowDark = htmlBody.classList.contains('dark-mode');
  icon.textContent = isNowDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isNowDark ? 'dark' : 'light');
  toggleBtn.setAttribute('aria-pressed', isNowDark);
});
// === Solo un video se reproduce a la vez en #quien-soy ===
const videos = document.querySelectorAll('#quien-soy video');

videos.forEach(video => {
  video.addEventListener('play', () => {
    videos.forEach(otherVideo => {
      if (otherVideo !== video) {
        otherVideo.pause();
        otherVideo.muted = true;
      }
    });
    // Asegura que el actual tenga sonido
    video.muted = false;
  });
});
