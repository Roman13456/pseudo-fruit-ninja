const desc = document.querySelector('.desc')
const createFirstUsers = ({title, price, image}) => {
    let li = document.createElement('li')
    let a = document.createElement('a')
    a.innerHTML = `${title} - ${price}`
    a.href = '#'
    a.addEventListener('click', () => {
        desc.innerHTML = createViews(title, image)
    })
    li.appendChild(a)
    root.appendChild(li)
}
