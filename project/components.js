/* ============================================================
   SHARED REUSABLE COMPONENTS
   Inject navbar & footer into every page, run shared JS logic.
   ============================================================ */

/* ---------- NAVBAR HTML ---------- */
function renderNavbar(activePage) {
  const links = [
    { href: 'index.html#home',     label: 'Home' },
    { href: 'index.html#about',    label: 'About' },
    { href: 'projects.html',       label: 'Projects' },
    { href: 'index.html#impact',   label: 'Impact' },
    { href: 'index.html#gallery',  label: 'Gallery' },
    { href: 'index.html#team',     label: 'Team' },
    { href: 'index.html#contact',  label: 'Contact' },
  ];

  const liHTML = links.map(l => {
    const isActive = l.href === activePage ? ' active' : '';
    const isDonate = l.label === 'Donate' ? ' nav-donate' : '';
    return `<li><a href="${l.href}" class="${isActive}${isDonate}">${l.label}</a></li>`;
  }).join('');

  const html = `
    <header class="header" id="site-header">
      <div class="container navbar">
        <a href="index.html" class="logo">
          <img src="logo.png" alt="InAmigos Foundation" class="logo-img">
        </a>
        <input type="checkbox" id="nav-toggle" class="nav-toggle">
        <label for="nav-toggle" class="nav-toggle-label"><span></span></label>
        <nav class="nav-menu">
          <ul class="nav-links">${liHTML}</ul>
        </nav>
      </div>
    </header>`;

  document.body.insertAdjacentHTML('afterbegin', html);
}

/* ---------- TICKER HTML ---------- */
function renderTicker() {
  const items = [
    '🌟 Top 5 Best NGOs 2025 — Mayor of Delhi',
    '📚 1 Lakh+ Interns Onboarded via Internshala',
    '🏆 SPJIMR SICA Finalist 2025',
    '🌿 ISO 9001:2015 Certified by IAF',
    '❤️ 80G & 12A Certified — Tax Exempt Donations',
    '🤝 CSR-1 Registered for Corporate Partnerships',
  ];
  const doubled = [...items, ...items];
  const html = `
    <div class="ticker">
      <div class="ticker-inner">
        ${doubled.map(t => `<span class="ticker-item"><i class="fa-solid fa-star"></i>${t}</span>`).join('')}
      </div>
    </div>`;
  document.querySelector('.hero').insertAdjacentHTML('afterend', html);
}

/* ---------- FOOTER HTML ---------- */
function renderFooter() {
  const html = `
    <footer id="contact" class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-about footer-col">
            <img src="logo.png" alt="InAmigos Foundation" class="footer-logo-img">
            <p>Creating meaningful social impact through education, women empowerment, environmental care, animal welfare, and humanitarian service since 2020.</p>
            <div class="social-icons" style="margin-top:20px">
              <a href="https://www.linkedin.com/company/inamigos-foundation" target="_blank" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
              <a href="https://instagram.com/inamigos" target="_blank" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
              <a href="https://www.facebook.com/share/1CeyCkB3uL/" target="_blank" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
              <a href="https://twitter.com/InAmigosF" target="_blank" aria-label="X"><i class="fa-brands fa-x-twitter"></i></a>
              <a href="https://youtube.com/@inamigosfoundation" target="_blank" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
            </div>
          </div>

          <div class="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="index.html#home"><i class="fa-solid fa-chevron-right"></i>Home</a></li>
              <li><a href="index.html#about"><i class="fa-solid fa-chevron-right"></i>About Us</a></li>
              <li><a href="projects.html"><i class="fa-solid fa-chevron-right"></i>Our Projects</a></li>
              <li><a href="index.html#impact"><i class="fa-solid fa-chevron-right"></i>Social Impact</a></li>
              <li><a href="index.html#team"><i class="fa-solid fa-chevron-right"></i>Our Team</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Our Projects</h4>
            <ul>
              <li><a href="projects.html#seva"><i class="fa-solid fa-bowl-food"></i>Project Seva</a></li>
              <li><a href="projects.html#bachpanshala"><i class="fa-solid fa-book-open"></i>Bachpanshala</a></li>
              <li><a href="projects.html#jeev"><i class="fa-solid fa-paw"></i>Project Jeev</a></li>
              <li><a href="projects.html#udaan"><i class="fa-solid fa-person-dress"></i>Project Udaan</a></li>
              <li><a href="projects.html#prakriti"><i class="fa-solid fa-leaf"></i>Project Prakriti</a></li>
              <li><a href="projects.html#vikas"><i class="fa-solid fa-arrow-trend-up"></i>Project Vikas</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Contact Us</h4>
            <div class="footer-contact-item">
              <i class="fa-solid fa-location-dot"></i>
              <span>Ward No. 5, Gram Post, Sipat Ujwal Nagar, Bilaspur, Chhattisgarh 495555</span>
            </div>
            <div class="footer-contact-item">
              <i class="fa-solid fa-envelope"></i>
              <span>inamigosfoundation@gmail.com</span>
            </div>
            <div class="footer-contact-item">
              <i class="fa-solid fa-phone"></i>
              <span>+91 626 730 9902</span>
            </div>
            <div class="footer-contact-item">
              <i class="fa-solid fa-globe"></i>
              <span>inamigosfoundation.org.in</span>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <p>&copy; <span id="footer-year"></span> InAmigos Foundation | Uniting Minds for A Change 🌟 | All Rights Reserved</p>
        </div>
      </div>
    </footer>`;

  document.body.insertAdjacentHTML('beforeend', html);
  document.getElementById('footer-year').textContent = new Date().getFullYear();
}

/* ---------- NAVBAR SCROLL EFFECT ---------- */
function initScrollHeader() {
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  });
}

/* ---------- HERO SLIDER ---------- */
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots   = document.querySelectorAll('.hero-dot');
  if (!slides.length) return;

  let current = 0;
  let timer;

  function goTo(n) {
    slides[current].classList.remove('active');
    dots[current]?.classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current]?.classList.add('active');
  }

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), 5000);
  }

  goTo(0);
  startTimer();

  dots.forEach((d, i) => d.addEventListener('click', () => { goTo(i); startTimer(); }));

  document.getElementById('hero-prev')?.addEventListener('click', () => { goTo(current - 1); startTimer(); });
  document.getElementById('hero-next')?.addEventListener('click', () => { goTo(current + 1); startTimer(); });
}

/* ---------- ANIMATED COUNTERS ---------- */
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el     = entry.target;
      const target = parseInt(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      let start = 0;
      const step = Math.ceil(target / 80);
      const run = () => {
        start = Math.min(start + step, target);
        el.textContent = start.toLocaleString('en-IN') + suffix;
        if (start < target) requestAnimationFrame(run);
      };
      run();
      observer.unobserve(el);
    });
  }, { threshold: 0.4 });

  counters.forEach(c => observer.observe(c));
}

/* ---------- FADE-IN ON SCROLL ---------- */
function initScrollAnimations() {
  const els = document.querySelectorAll('.fade-in');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = 1;
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.12 });

  els.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    obs.observe(el);
  });
}

/* ---------- INIT ALL ---------- */
document.addEventListener('DOMContentLoaded', () => {
  initScrollHeader();
  initHeroSlider();
  initCounters();
  initScrollAnimations();
});
