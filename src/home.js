const home = () => {
  const mainDiv = document.createElement('div');
  const home = document.createElement('div');
  home.classList.add('tabs', 'borderH');
  home.innerHTML = 'Home';
  mainDiv.appendChild(home);
  home.style.cursor = 'pointer';
  document.body.style.backgroundImage = "url('./img/restaurant_background.avif')";
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundSize = 'cover';
  return mainDiv;
};
export default home;