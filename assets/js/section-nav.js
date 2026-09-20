(() => {
  const navigation = document.querySelector('.section-nav');
  if (!navigation) return;
  const links = Array.from(navigation.querySelectorAll('a'));
  const sections = links.map(link => document.querySelector(link.hash));
  let scheduled = false;

  const update = () => {
    scheduled = false;
    const offset = navigation.getBoundingClientRect().height + 32;
    let current = -1;
    sections.forEach((section, index) => {
      if (section && section.getBoundingClientRect().top <= offset) current = index;
    });
    if (window.scrollY > 0 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
      current = links.length - 1;
    }
    links.forEach((link, index) => {
      if (index === current) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  };

  const schedule = () => {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(update);
  };

  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  window.addEventListener('hashchange', schedule);
  window.addEventListener('load', schedule);
  update();
})();
