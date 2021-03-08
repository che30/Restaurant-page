 import tabOne from './Tasty.js'
 import home from './home.js'
 import services from './Services.js'
 import about from './About.js';
 import menu from './Menu.js'
 import contactUs from './Contactus.js'
 const content = document.getElementById("content");
 const nav = document.createElement('nav')
 const navHeaderRight = document.createElement('div')
 navHeaderRight.classList.add('list-unstyled','d-flex','justify-content-between','w-50')
 navHeaderRight.appendChild(home())
 navHeaderRight.appendChild(about())
 navHeaderRight.appendChild(services ())
 navHeaderRight.appendChild(menu())
 navHeaderRight.appendChild(contactUs())
 nav.appendChild(tabOne())
 nav.appendChild(navHeaderRight)
 nav.classList.add('d-flex','justify-content-around','pt-3')
 content.appendChild(nav)
// import homepage from './homepage.js'
// homepage()
const secton1 = document.createElement('section')
secton1.classList.add('d-flex','justify-content-around','mt-5')
const cardContaner = document.createElement('div')
cardContaner.classList.add('d-flex','flex-column')
const h1= document.createElement('h1')
h1.innerHTML = 'Tasty food'
const h2 = document.createElement('h2')
h2.innerHTML = 'Try the best food of the week'
const button = document.createElement('button')
const buttonText = document.createTextNode('view menu')
button.appendChild(buttonText)
button.classList.add('btn','btn-success','py-2','w-25')
 const img1 = document.createElement('img')
 img1.setAttribute("src",'/assets/img/plate1.png')
 const section2 = document.createElement('h3')
 section2.classList.add('text-center','my-4')
 section2.innerText = "Menu of the week"
//  creating 3 cards
const section3 = document.createElement('section')
section3.classList.add('d-flex','justify-content-around')
const cc1 = document.createElement('div')
cc1.classList.add('card')
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

section3.appendChild(cc1)

cardContaner.appendChild(h1)
cardContaner.appendChild(h2)
cardContaner.appendChild(button)
secton1.appendChild(cardContaner)
secton1.appendChild(img1)
content.appendChild(secton1)
content.appendChild(section2)
content.appendChild(section3)

