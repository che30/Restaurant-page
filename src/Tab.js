export default function tab (){
  const nav = document.createElement('nav')

  const navHeaderLeft = document.createElement('div')
  navHeaderLeft.innerHTML = 'Tasty'

const navHeaderRight = document.createElement('div')
navHeaderRight.classList.add('list-unstyled','d-flex','justify-content-between','w-50')

const listItem4 = document.createElement('div')
listItem4.innerHTML = 'Menu'

const listItem1 = document.createElement('div')
const link = document.createElement('a')
link.setAttribute("class","nav-link active")
link.href = '#'
const t= document.createTextNode('home')
link.appendChild(t)
listItem1.appendChild(link)

const listItem2 = document.createElement('div')
listItem2.innerHTML = 'About'

const listItem3 = document.createElement('div')
listItem3.innerHTML = 'Services'

const listItem5 = document.createElement('div')
listItem5.innerHTML = 'Contact us'
navHeaderRight.appendChild(listItem1)
 navHeaderRight.appendChild(listItem2)
 navHeaderRight.appendChild(listItem3)
 navHeaderRight.appendChild(listItem4)
 navHeaderRight.appendChild(listItem5)
 nav.appendChild(navHeaderLeft)
 nav.appendChild(navHeaderRight)
 nav.classList.add('d-flex','justify-content-around','pt-3')
 return nav

}