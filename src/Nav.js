import about from './about';
import menu from './Menu';
import home from './home';
import services from './Services';

const navbar = () => {
  const nav = document.createElement('nav');
  nav.classList.add('d-flex', 'justify-content-around',
    'mx-auto', 'mt-4', 'bg-warning', 'text-dark', 'rounded', 'py-2');
  nav.append(home());
  nav.appendChild(menu());
  nav.appendChild(about());
  nav.appendChild(services());
  document.body.style.height = '100vh';
  document.body.style.backgroundPosition = 'center center';
  return nav;
};
export default navbar;