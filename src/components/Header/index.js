import './style'
import { handleRoute } from "helpers/route"
import { listMenu } from "helpers/constants"

const Header = () => {
    console.log('Header')
    const append = document.body
    const nav = document.createElement('nav')
    const ul = document.createElement('ul')
    listMenu.forEach(elem => {
        const li = document.createElement('li')
        const a = document.createElement('a')
        a.href = elem === 'home' ? '/' : '/' + elem
        a.innerHTML = elem
        a.addEventListener('click', handleRoute)
        li.append(a)
        ul.append(li)
    })
    nav.append(ul)
    append.before(nav)
}

export default Header
