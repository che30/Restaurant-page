const services = () => {
  const container = document.createElement('div');
  container.classList.add('d-none', 'flex-column', 'align-items-center', 'align-content-center', 'justify-content-around', 'servbody', 'mt-5');
  const h1 = document.createElement('h1');
  h1.innerHTML = 'offerring';
  h1.classList.add('text-success');
  h1.style.fontSize = '1.2rem';
  const h2 = document.createElement('h2');
  h2.innerHTML = 'Our amazing services';
  h2.classList.add('display-5', 'text-bold');

  const section = document.createElement('section');
  section.classList.add('d-flex', 'justify-content-around', 'flex-wrap');

  const cc1 = document.createElement('div');
  cc1.classList.add('card', 'text-center');
  const img2 = document.createElement('img');
  img2.setAttribute('src', '.src/assets/img/dish.svg');
  img2.classList.add('card-img-top');
  img2.style.margin = '20% 0 0 40%';
  img2.style.fill = 'green';
  const cb1 = document.createElement('div');
  cb1.classList.add('card-body');
  const cc1h5 = document.createElement('h5');
  cc1h5.innerText = 'some good foot';
  cc1h5.classList.add('card-title');
  const cc1p1 = document.createElement('p');
  cc1p1.classList.add('card-text');
  cc1p1.innerHTML = 'trying something';
  const cc1a1 = document.createElement('a');
  cc1a1.classList.add('btn', 'btn-primary');
  cc1a1.innerText = 'order';
  cc1.appendChild(img2);
  cc1.appendChild(cb1);
  cb1.appendChild(cc1h5);
  cb1.appendChild(cc1p1);
  cb1.appendChild(cc1a1);
  container.appendChild(h1);
  container.appendChild(h2);
  section.appendChild(cc1);
  // second
  const cc2 = document.createElement('div');
  cc2.classList.add('card', 'text-center');
  const img3 = document.createElement('img');
  img3.setAttribute('src', './src/assets/img/dish.svg');
  img3.classList.add('card-img-top');
  img3.style.margin = '20% 0 0 40%';
  const cb2 = document.createElement('div');
  cb2.classList.add('card-body');
  const cc2h5 = document.createElement('h5');
  cc2h5.innerText = 'some good foot';
  cc2h5.classList.add('card-title');
  const cc2p1 = document.createElement('p');
  cc2p1.classList.add('card-text');
  cc2p1.innerHTML = 'trying something';
  const cc2a1 = document.createElement('a');
  cc2a1.classList.add('btn', 'btn-primary');
  cc2a1.innerText = 'order';
  cc2.appendChild(img3);
  cc2.appendChild(cb2);
  cb2.appendChild(cc2h5);
  cb2.appendChild(cc2p1);
  cb2.appendChild(cc2a1);
  section.appendChild(cc2);
  // third
  const cc3 = document.createElement('div');
  cc3.classList.add('card', 'text-center');
  const img4 = document.createElement('img');
  img4.setAttribute('src', '../src/assets/img/dish.svg');
  img4.classList.add('card-img-top');
  img4.style.margin = '20% 0 0 40%';
  const cb3 = document.createElement('div');
  cb3.classList.add('card-body');
  const cc3h5 = document.createElement('h5');
  cc3h5.innerText = 'some good foot';
  cc3h5.classList.add('card-title');
  const cc3p1 = document.createElement('p');
  cc3p1.classList.add('card-text');
  cc3p1.innerHTML = 'trying something';
  const cc3a1 = document.createElement('a');
  cc3a1.classList.add('btn', 'btn-primary');
  cc3a1.innerText = 'order';
  cc3.appendChild(img4);
  cc3.appendChild(cb3);
  cb3.appendChild(cc3h5);
  cb3.appendChild(cc3p1);
  cb3.appendChild(cc3a1);
  section.appendChild(cc3);
  container.appendChild(section);
  return container;
};
export default services;