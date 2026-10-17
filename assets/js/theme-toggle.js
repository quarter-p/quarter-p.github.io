(() => {
  const STORAGE_KEY = 'theme-preference';
  const root = document.documentElement;
  const button = document.querySelector('.theme-toggle');
  const media = window.matchMedia('(prefers-color-scheme: dark)');

  const currentMode = () => {
    const theme = root.dataset.theme;
    return theme === 'light' || theme === 'dark' ? theme : 'system';
  };

  const resolvedTheme = () => {
    const mode = currentMode();
    return mode === 'system' ? (media.matches ? 'dark' : 'light') : mode;
  };

  const updateThemeAssets = () => {
    const isDark = resolvedTheme() === 'dark';
    const favicon = document.getElementById('theme-favicon');
    const themeColor = document.getElementById('theme-color');

    if (favicon) {
      favicon.href = isDark ? favicon.dataset.darkHref : favicon.dataset.lightHref;
    }
    if (themeColor) {
      themeColor.content = isDark ? '#1c1c1c' : '#ffffff';
    }
  };

  const updateButton = () => {
    if (!button) return;
    const isDark = resolvedTheme() === 'dark';
    const systemNote = currentMode() === 'system'
      ? (button.dataset.systemNote || ' (following system)')
      : '';
    const template = isDark
      ? (button.dataset.labelDark || 'Theme: Dark%SYSTEM%. Click to switch to light mode.')
      : (button.dataset.labelLight || 'Theme: Light%SYSTEM%. Click to switch to dark mode.');
    const label = template.replace('%SYSTEM%', systemNote);
    button.setAttribute('aria-label', label);
    button.title = label;
  };

  const applyTheme = theme => {
    root.dataset.theme = theme;
    updateThemeAssets();
    updateButton();
  };

  if (button) {
    button.addEventListener('click', () => {
      const nextTheme = resolvedTheme() === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem(STORAGE_KEY, nextTheme);
      } catch (error) {}
      applyTheme(nextTheme);
    });
  }

  const handleSystemChange = () => {
    if (currentMode() !== 'system') return;
    updateThemeAssets();
    updateButton();
  };

  if (typeof media.addEventListener === 'function') {
    media.addEventListener('change', handleSystemChange);
  } else if (typeof media.addListener === 'function') {
    media.addListener(handleSystemChange);
  }

  updateThemeAssets();
  updateButton();
})();
