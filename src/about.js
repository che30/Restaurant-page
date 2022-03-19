const about = () => {
  const contain = document.createElement('div');
  contain.innerHTML = 'About';
  contain.classList.add('tabs');
  contain.style.cursor = 'pointer';
  return contain;
};
export default about;