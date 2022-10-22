import './style'

const NotFound = (append = document.body) => {
    const node = `
<div class="not-found">
    <h2>Not Found Page</h2>
    <p>404</p>
</div>
    `
    append.innerHTML = node
}

export default NotFound
