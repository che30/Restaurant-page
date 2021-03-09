const about = ()=>{
  const container = document.createElement('div')
  container.classList.add('d-none')
  const h1 = document.createElement('h1')
  h1.innerHTML = 'About us'
  const h2 = document.createElement('h2')
  h2.innerHTML = 'We cook the best  tasty food'
  const h3 = document.createElement('h3')
  h3.innerHTML = 'We cook the best food in the entire city, with excellent customer service, the best meals and at the best price, visit us'
container.appendChild(h1)
container.appendChild(h2)
container.appendChild(h3)

return container
}
export default about