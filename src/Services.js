const services = () => {
  const contain = document.createElement('div');
  contain.classList.add('tabs');
  contain.innerHTML = 'Services';
  contain.style.cursor = 'pointer';
  return contain;
};
export default services;
