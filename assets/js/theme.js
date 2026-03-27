var mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

function getSystemTheme() {
  return mediaQuery.matches ? 'dark' : 'light';
}

function applyTheme(theme) {
  var html = document.querySelector('html');

  if (theme === 'light') {
    html.classList.remove('dark');
    document.querySelector('.theme-icon.light').style.display = 'none';
    document.querySelector('.theme-icon.dark').style.display = 'block';
  } else {
    html.classList.add('dark');
    document.querySelector('.theme-icon.dark').style.display = 'none';
    document.querySelector('.theme-icon.light').style.display = 'block';
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
  var current = document.querySelector('html').classList.contains('dark') ? 'dark' : 'light';
  var next = current === 'dark' ? 'light' : 'dark';
  sessionStorage.setItem('theme', next);
  applyTheme(next);
}
