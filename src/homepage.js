import tabOne from './Tasty.js'
import home from './home.js'
import services from './Services.js'
import about from './About.js';
import menu from './Menu.js'
import contactUs from './Contactus.js'
import tab from './Tab.js'
export default  function homepage(){
 
const content = document.getElementById("content");
content.appendChild(tab())
content.appendChild(about ())
content.appendChild(services ())
content.appendChild(menu ())
content.appendChild(home ())
const abt = document.getElementById('abt')
const abt1 = document.querySelector('.about__1')

const servi = document.getElementById('servi')
const servbody = document.querySelector('.servbody')

const menu1 = document.querySelector('.menu__1')
const menu2 = document.getElementById('menu-1')
const s1 = document.querySelector('.s1')
const s2 = document.querySelector('.s2')
const s3 = document.querySelector('.s3')

const home1 = document.getElementById('home-1')
home1.addEventListener("click",()=>{
  s1.classList.remove('d-none')
  s3.classList.add('d-block')
  menu1.classList.remove('d-flex')
  menu1.classList.remove('d-block')
  menu1.classList.add('d-none')
  servbody.classList.remove('d-flex')
  servbody.classList.remove('d-block')
  servbody.classList.add('d-none')
  abt1.classList.remove('d-flex')
  abt1.classList.remove('d-block')
     abt1.classList.add('d-none')
})

abt.addEventListener("click", ()=>{
abt1.classList.remove('d-none')
abt1.classList.add('d-flex')
servbody.classList.remove('d-flex')
servbody.classList.add('d-none')
menu1.classList.remove('d-flex')
menu1.classList.add('d-none')
s1.classList.remove('d-block')
s1.classList.remove('d-flex')
s1.classList.add('d-none')
})

  servi.addEventListener("click", ()=>{
    servbody.classList.remove('d-none')
    servbody.classList.add('d-flex')
    menu1.classList.remove('d-flex')
    menu1.classList.add('d-none')
    abt1.classList.remove('d-flex')
    abt1.classList.add('d-none')
    s1.classList.remove('d-flex')
    s1.classList.add('d-none')
  })
  
    menu2.addEventListener("click", ()=>{
     menu1.classList.remove('d-none')
     menu1.classList.add('d-flex')
     servbody.classList.remove('d-flex')
     servbody.classList.add('d-none')
     abt1.classList.remove('d-flex')
     abt1.classList.add('d-none')
     s1.classList.remove('d-flex')
     s1.classList.add('d-none')

    })
    

}