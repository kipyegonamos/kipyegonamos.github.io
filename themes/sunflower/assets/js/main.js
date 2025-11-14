const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const root = document.documentElement;

let currentTheme = localStorage.getItem('theme') || 'auto';

function setTheme(theme) {
  currentTheme = theme;

  root.classList.remove('light', 'dark');

  switch (theme) {
    case 'light':
      root.classList.add('light');
      themeIcon.textContent = '☀️';
      break
    case 'dark':
      root.classList.add('dark');
      themeIcon.textContent = '🌙';
      break
    default:
      themeIcon.textContent = '🌓';
  }

  localStorage.setItem('theme', theme);
}

themeToggle.addEventListener('click', () => {
  if (currentTheme === 'auto') {
    setTheme('light')
  } else if (currentTheme === 'light') {
    setTheme('dark')
  } else {
    setTheme('auto')
  }
});

setTheme(currentTheme);
