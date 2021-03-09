export default function menu(){
  const section = document.createElement('section')
  section.classList.add('mt-5','d-none','menu__1','flex-column')
  const h1 = document.createElement('h1')
h1.classList.add('text-center')
h1.innerHTML = 'Menu of the week'
section.appendChild(h1)
  const section1 = document.createElement('section')
  section1.classList.add('d-flex','justify-content-around','flex-wrap','mt-5')
const cc1 = document.createElement('div')
cc1.classList.add('card','text-center')
const img2 = document.createElement('img')
img2.setAttribute("src",'/assets/img/plate1.png') 
img2.classList.add("card-img-top")
const cb1 = document.createElement('div')
cb1.classList.add('card-body')
const cc1h5 = document.createElement('h5')
cc1h5.innerText = 'some good foot'
cc1h5.classList.add('card-title')
const cc1p1 = document.createElement('p')
cc1p1.classList.add('card-text')
cc1p1.innerHTML = 'trying something'
const cc1a1 = document.createElement('a')
cc1a1.classList.add('btn','btn-primary')
cc1a1.innerText = 'order'
cc1.appendChild(img2)
cc1.appendChild(cb1)
cb1.appendChild(cc1h5)
cb1.appendChild(cc1p1)
cb1.appendChild(cc1a1)
section1.appendChild(cc1)
//second item
const cc2 = document.createElement('div')
cc2.classList.add('card','text-center')
const img3 = document.createElement('img')
img3.setAttribute("src",'/assets/img/plate1.png') 
img3.classList.add("card-img-top")
const cb2 = document.createElement('div')
cb2.classList.add('card-body')
const cc2h5 = document.createElement('h5')
cc2h5.innerText = 'some good foot'
cc2h5.classList.add('card-title')
const cc2p1 = document.createElement('p')
cc2p1.classList.add('card-text')
cc2p1.innerHTML = 'trying something'
const cc2a1 = document.createElement('a')
cc2a1.classList.add('btn','btn-primary')
cc2a1.innerText = 'order'
cc2.appendChild(img3)
cc2.appendChild(cb2)
cb2.appendChild(cc2h5)
cb2.appendChild(cc2p1)
cb2.appendChild(cc2a1)
section1.appendChild(cc2)
//third item
const cc3 = document.createElement('div')
cc3.classList.add('card','text-center')
const img4 = document.createElement('img')
img4.setAttribute("src",'/assets/img/plate1.png') 
img4.classList.add("card-img-top")
const cb3 = document.createElement('div')
cb3.classList.add('card-body')
const cc3h5 = document.createElement('h5')
cc3h5.innerText = 'some good foot'
cc3h5.classList.add('card-title')
const cc3p1 = document.createElement('p')
cc3p1.classList.add('card-text')
cc3p1.innerHTML = 'trying something'
const cc3a1 = document.createElement('a')
cc3a1.classList.add('btn','btn-primary')
cc3a1.innerText = 'order'
cc3.appendChild(img4)
cc3.appendChild(cb3)
cb3.appendChild(cc3h5)
cb3.appendChild(cc3p1)
cb3.appendChild(cc3a1)
section1.appendChild(cc3)
section.appendChild(section1)

return section
}