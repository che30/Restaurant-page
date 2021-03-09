/* eslint-disable import/extensions */
import home from './home.js';
import services from './Services.js';
import about from './About.js';
import menu from './Menu.js';
import tab from './Tab.js';

export default function homepage() {
  const content = document.getElementById('content');
  content.appendChild(tab());
  content.appendChild(about());
  content.appendChild(services());
  content.appendChild(menu());
  content.appendChild(home());
}