// Controla el menú hamburguesa y comportamiento de enlaces internos
const btn = document.querySelector('.nav-toggle');
const nav = document.getElementById('main-nav');

if (btn && nav) {
  btn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    btn.classList.toggle('is-active', isOpen);
    btn.setAttribute('aria-expanded', String(isOpen));
  });

  // Cerrar menú al clicar un enlace (mejor experiencia en móvil)
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
      // Si el enlace es interno, dejar que haga el scroll; luego cerrar el menú
      if (nav.classList.contains('open')) {
        nav.classList.remove('open');
        btn.classList.remove('is-active');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Cerrar al hacer click fuera (opcional)
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !btn.contains(e.target) && nav.classList.contains('open')) {
      nav.classList.remove('open');
      btn.classList.remove('is-active');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  // Accessibility: cerrar con Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      nav.classList.remove('open');
      btn.classList.remove('is-active');
      btn.setAttribute('aria-expanded', 'false');
      btn.focus();
    }
  });
}