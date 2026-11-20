  // ── Page routing ──
  const pages = ['home','projects','about','contact','case-mystic','case-antra','case-spmod','case-inmind'];

  function showPage(id) {
    pages.forEach(p => {
      document.getElementById(p).classList.remove('active');
    });
    const el = document.getElementById(id);
    if (el) {
      el.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      observeAnimations();
    }
    // close menu
    document.getElementById('navLinks').classList.remove('open');
  }

  function showCase(name) {
    showPage('case-' + name);
  }

  // ── Hamburger ──
  function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('open');
  }

  // ── Scroll-triggered animations ──
  function observeAnimations() {
    const targets = document.querySelectorAll('.active .project-card, .active .case-section, .active .about-card, .active .mini-card');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    targets.forEach(t => obs.observe(t));
  }

  // Initial run
  observeAnimations();
