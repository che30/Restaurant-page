const bodyInfo = () => {
  const container = document.createElement('div');
  const menu = document.createElement('div');
  menu.classList.add('d-none', 'menu');
  const about = document.createElement('div');
  about.classList.add('d-none', 'about', 'text-center', 'pt-5', 'text-white', 'h1');
  about.style.marginTop = '22vh';
  const services = document.createElement('div');
  services.classList.add('d-none', 'services', 'text-center', 'text-white', 'h1', 'bg-dark', 'pb-5');
  about.innerHTML = 'We cook the best tasty food We cook the best food in the entire city, with excellent customer service, the best meals and at the best price, visit us';
  services.innerHTML = 'We rent';
  services.classList.add('my-3');
  const serviceContainer = document.createElement('div');
  serviceContainer.classList.add('d-flex', 'justify-content-center', 'flex-wrap');
  const serviceImg1 = document.createElement('img');
  serviceImg1.setAttribute('src', './assets/img/plates.webp');
  serviceImg1.classList.add('bg-white');
  const serviceImg2 = document.createElement('img');
  serviceImg2.setAttribute('src', './assets/img/glass.webp');
  serviceImg2.classList.add('third__image');
  serviceImg2.classList.add('mx-3');
  const serviceImg3 = document.createElement('img');
  serviceImg3.classList.add('third__image');
  serviceImg3.setAttribute('src', './assets/img/tray.webp');
  serviceContainer.appendChild(serviceImg1);
  serviceContainer.appendChild(serviceImg2);
  serviceContainer.appendChild(serviceImg3);
  services.appendChild(serviceContainer);

  const gridContainer = document.createElement('div');
  gridContainer.classList.add('container-fluid', 'bg-white', 'py-2');
  gridContainer.style.marginTop = '10px';
  const row = document.createElement('div');
  row.classList.add('row');
  row.style.padding = '10px 10px 50px 10px';
  const columnOne = document.createElement('div');
  columnOne.classList.add('col-6', 'd-flex', 'justify-content-center');
  const columnTwo = document.createElement('div');
  columnTwo.classList.add('col-6', 'd-flex', 'justify-content-center');
  const row2 = document.createElement('div');
  row2.classList.add('row');
  const columnThree = document.createElement('div');
  columnThree.classList.add('col-6', 'py-1', 'd-flex', 'justify-content-center');
  const columnFour = document.createElement('div');
  columnFour.classList.add('col-6', 'py-1', 'd-flex', 'justify-content-center');

  row.appendChild(columnOne);
  row.appendChild(columnTwo);
  row2.appendChild(columnThree);
  row2.appendChild(columnFour);
  gridContainer.appendChild(row);
  gridContainer.appendChild(row2);
  menu.appendChild(gridContainer);
  const menuImageContain = document.createElement('div');
  menu.appendChild(menuImageContain);
  const menuImageOne = document.createElement('img');

  const holdImageOne = document.createElement('div');
  holdImageOne.classList.add('d-flex', 'align-items-center');
  const holdOneText = document.createElement('div');
  holdOneText.innerHTML = '1. Tasty salad';
  holdImageOne.appendChild(holdOneText);
  holdImageOne.appendChild(menuImageOne);

  const menuImageTwo = document.createElement('img');

  const holdImageTwo = document.createElement('div');
  holdImageTwo.classList.add('d-flex', 'align-items-center');
  const holdTwoText = document.createElement('div');
  holdTwoText.innerHTML = '2. Tasty salad';
  holdImageTwo.appendChild(holdTwoText);
  holdImageTwo.appendChild(menuImageTwo);

  const menuImageThree = document.createElement('img');

  const holdImageThree = document.createElement('div');
  holdImageThree.classList.add('d-flex', 'align-items-center');
  const holdThreeText = document.createElement('div');
  holdThreeText.innerHTML = '3. Tasty salad';
  holdImageThree.appendChild(holdThreeText);
  holdImageThree.appendChild(menuImageThree);

  const menuImageFour = document.createElement('img');

  const holdImageFour = document.createElement('div');
  holdImageFour.classList.add('d-flex', 'align-items-center');
  const holdFourText = document.createElement('div');
  holdFourText.innerHTML = '3. Tasty salad';
  holdImageFour.appendChild(holdFourText);
  holdImageFour.appendChild(menuImageFour);

  menuImageOne.setAttribute('src', './assets/img/plate1.png');
  menuImageOne.style.width = '40%';
  menuImageTwo.setAttribute('src', './assets/img/home.png');
  menuImageTwo.style.width = '40%';
  menuImageThree.setAttribute('src', './assets/img/plate1.png');
  menuImageThree.style.width = '40%';
  menuImageFour.setAttribute('src', './assets/img/home.png');
  menuImageFour.style.width = '40%';
  columnOne.appendChild(holdImageOne);
  columnTwo.appendChild(holdImageTwo);
  columnThree.appendChild(holdImageThree);
  columnFour.appendChild(holdImageFour);
  container.appendChild(menu);
  container.appendChild(about);
  container.appendChild(services);
  return container;
};
export default bodyInfo;