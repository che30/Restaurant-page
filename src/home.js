const home = ()=>{
const listItem1 = document.createElement('div')
const link = document.createElement('a')
link.setAttribute("class","nav-link active")
link.href = '#'
const t= document.createTextNode('home')
// listItem1.innerHTML = 'Home'
link.appendChild(t)
listItem1.appendChild(link)
return listItem1
}
export default home;