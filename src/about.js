const about = () => {
  const contain = document.createElement('div');
  contain.innerHTML = 'About';
  contain.classList.add('tabs','borderA');
  contain.style.cursor = 'pointer';
  return contain;
};
export default about;