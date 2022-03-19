/* eslint-disable import/extensions */
import bodyContain from './bodyContain';

bodyContain();
const tabs = document.getElementsByClassName('tabs');
const menuBorder = document.querySelector('.borderM');
menuBorder.style.border = '3px solid black';
menuBorder.classList.add('rounded');
menuBorder.style.borderStyle = 'dotted';
for (let i = 0; i < tabs.length; i += 1) {
  tabs[i].addEventListener('click', () => {
    switch (tabs[i].innerHTML) {
      case 'Menu':
        document.querySelector('.menu').classList.remove('d-none');
        document.querySelector('.about').classList.remove('d-block');
        document.querySelector('.services').classList.remove('d-block');
        document.querySelector('.about').classList.add('d-none');
        document.querySelector('.services').classList.add('d-none');
        document.querySelector('.borderM').style.border = 'none';
        break;
      case 'About':
        document.querySelector('.about').classList.remove('d-none');
        document.querySelector('.menu').classList.remove('d-block');
        document.querySelector('.services').classList.remove('d-block');
        document.querySelector('.menu').classList.add('d-none');
        document.querySelector('.services').classList.add('d-none');
        break;
      case 'Services':
        document.querySelector('.menu').classList.remove('d-block');
        document.querySelector('.about').classList.remove('d-block');
        document.querySelector('.menu').classList.add('d-none');
        document.querySelector('.about').classList.add('d-none');
        document.querySelector('.services').classList.remove('d-none');
        break;
      case 'Home':
        menuBorder.style.border = '1px solid black';
        menuBorder.style.borderStyle = 'dotted';
        document.querySelector('.menu').classList.remove('d-block');
        document.querySelector('.about').classList.remove('d-block');
        document.querySelector('.services').classList.remove('d-block');
        document.querySelector('.menu').classList.add('d-none');
        document.querySelector('.about').classList.add('d-none');
        document.querySelector('.services').classList.add('d-none');
        break;
      default:
        document.querySelector('.menu').classList.add('d-none');
        document.querySelector('.about').classList.add('d-none');
        document.querySelector('.services').classList.add('d-none');
    }
  });
}
