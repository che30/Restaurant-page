export default function tab() {
  const nav = document.createElement('nav');

  const navHeaderLeft = document.createElement('div');
  navHeaderLeft.innerHTML = 'Tasty';

  const navHeaderRight = document.createElement('div');
  navHeaderRight.classList.add('list-unstyled', 'd-flex', 'justify-content-between', 'w-50');

  const listItem4 = document.createElement('button');
  listItem4.id = 'menu-1';
  listItem4.innerHTML = 'Menu';
  listItem4.classList.add('bg-white', 'text-black', 'border-none', 'rounded-circle');

  const listItem1 = document.createElement('div');
  const link = document.createElement('button');
  link.classList.add('bg-white', 'text-black', 'rounded-circle');
  const t = document.createTextNode('home');
  link.appendChild(t);
  link.id = 'home-1';
  listItem1.appendChild(link);


  const listItem2 = document.createElement('button');
  listItem2.classList.add('bg-white', 'text-black', 'rounded-circle');
  listItem2.innerHTML = 'About';
  listItem2.id = 'abt';

  const listItem3 = document.createElement('button');
  listItem3.classList.add('bg-white', 'text-black', 'rounded-circle');
  listItem3.id = 'servi';
  listItem3.innerHTML = 'Services';

  const listItem5 = document.createElement('div');
  listItem5.innerHTML = 'Contact us';
  navHeaderRight.appendChild(listItem1);
  navHeaderRight.appendChild(listItem2);
  navHeaderRight.appendChild(listItem3);
  navHeaderRight.appendChild(listItem4);
  navHeaderRight.appendChild(listItem5);
  nav.appendChild(navHeaderLeft);
  nav.appendChild(navHeaderRight);
  nav.classList.add('d-flex', 'justify-content-around', 'pt-3');
  return nav;
}