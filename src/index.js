/* eslint-disable import/extensions */
import bodyContain from './bodyContain';

bodyContain();
const tabs = document.getElementsByClassName('tabs');
const menuBorder = document.querySelector('.borderH');
const menuBorderM = document.querySelector('.borderM');
const menuBorderA = document.querySelector('.borderA');
menuBorder.style.border = '2px solid black';
menuBorder.classList.add('rounded','p-2');
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
        document.querySelector('.borderH').style.border = 'none';
        menuBorderM.style.border = '2px solid black';
        menuBorderM.classList.add('rounded','p-2');
        menuBorderM.style.borderStyle = 'dotted';
        document.querySelector('.borderA').style.border = 'none';
        break;
      case 'About':
        document.querySelector('.about').classList.remove('d-none');
        document.querySelector('.menu').classList.remove('d-block');
        document.querySelector('.services').classList.remove('d-block');
        document.querySelector('.menu').classList.add('d-none');
        document.querySelector('.services').classList.add('d-none');
        menuBorderA.style.border = '2px solid black';
        menuBorderA.classList.add('rounded','p-2');
        menuBorderA.style.borderStyle = 'dotted';
        document.querySelector('.borderM').style.border = 'none';
        document.querySelector('.borderH').style.border = 'none';
        break;
      case 'Services':
        document.querySelector('.menu').classList.remove('d-block');
        document.querySelector('.about').classList.remove('d-block');
        document.querySelector('.menu').classList.add('d-none');
        document.querySelector('.about').classList.add('d-none');
        document.querySelector('.services').classList.remove('d-none');
        break;
      case 'Home':
        menuBorder.style.border = '2px solid black';
        menuBorder.style.borderStyle = 'dotted';
        document.querySelector('.menu').classList.remove('d-block');
        document.querySelector('.about').classList.remove('d-block');
        document.querySelector('.services').classList.remove('d-block');
        document.querySelector('.menu').classList.add('d-none');
        document.querySelector('.about').classList.add('d-none');
        document.querySelector('.services').classList.add('d-none');
        document.querySelector('.borderM').style.border = 'none';
        document.querySelector('.borderA').style.border = 'none';
        break;
      default:
        document.querySelector('.menu').classList.add('d-none');
        document.querySelector('.about').classList.add('d-none');
        document.querySelector('.services').classList.add('d-none');
    }
  });
}
