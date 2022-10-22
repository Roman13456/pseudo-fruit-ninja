import { routes } from "helpers/routes";

const handleRoute = (e) => {
    e = e || e.window
    e.preventDefault()
    window.history.pushState({}, '', e.target.href)
    onLocation()
}

const onLocation = () => {
    const { pathname } = window.location
    const route = routes[pathname] || routes['404']
    const main = document.getElementById('root')
    route(main)
}

window.onpopstate = onLocation
window.route = handleRoute

export {
    handleRoute,
    onLocation
}
