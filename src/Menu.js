const menu = () => {
  const contain = document.createElement('div');
  contain.innerHTML = 'Menu';
  contain.classList.add('tabs','borderM');
  contain.style.cursor = 'pointer';
  contain.setAttribute('id', 'menu__container');
  return contain;
};
export default menu;
