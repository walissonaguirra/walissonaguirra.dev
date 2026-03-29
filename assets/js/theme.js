var mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

function getSystemTheme() {
  return mediaQuery.matches ? 'dark' : 'light';
}

function applyTheme(theme) {
  if (theme === 'light') {
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  var manual = sessionStorage.getItem('theme');
  applyTheme(manual || getSystemTheme());
});

mediaQuery.addEventListener('change', function () {
  sessionStorage.removeItem('theme');
  applyTheme(getSystemTheme());
});

function toggleTheme() {
  var current = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  var next = current === 'dark' ? 'light' : 'dark';
  sessionStorage.setItem('theme', next);
  applyTheme(next);
}
