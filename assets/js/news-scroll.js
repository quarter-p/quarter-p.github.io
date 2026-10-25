(() => {
  const scroller = document.querySelector('.news-scroll');
  if (!scroller) return;

  const items = Array.from(scroller.querySelectorAll('ul > li'));
  const visibleItems = Number.parseInt(scroller.dataset.visibleItems || '6', 10);

  const updateHeight = () => {
    scroller.style.maxHeight = '';
    if (!Number.isFinite(visibleItems) || items.length <= visibleItems) return;

    const firstItem = items[0];
    const nextItem = items[visibleItems];
    const height = nextItem.offsetTop - firstItem.offsetTop;
    if (height > 0) scroller.style.maxHeight = `${height}px`;
  };

  updateHeight();
  window.addEventListener('resize', updateHeight);
  if (document.fonts?.ready) document.fonts.ready.then(updateHeight);
})();
