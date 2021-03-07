const themeSwitcher = document.querySelector('#theme-switcher');

navigator.geolocation.getCurrentPosition((position) => {
  let sunrise = new Date().sunset(
    position.coords.latitude,
    position.coords.longitude
  );

  let sunset = new Date().sunset(
    position.coords.latitude,
    position.coords.longitude
  );

  console.log(sunrise, sunset);

  if (isDay(sunrise, sunset)) {
    setTheme('theme-light');
  } else {
    setTheme('theme-dark');
  }
});

function isDay(sunrise, sunset) {
  let nowHours = new Date().getHours();
  return nowHours >= sunrise.getHours() && nowHours < sunset.getHours();
}

const defaultTheme = localStorage.getItem('theme') || 'theme-light';
setTheme(defaultTheme);

themeSwitcher.addEventListener('change', (e) => {
  setTheme(e.target.value);
});

function setTheme(theme) {
  theme = theme || 'theme-light';
  document.documentElement.className = theme;
  localStorage.setItem('theme', theme);
  themeSwitcher.value = theme;
}
