import './style'

const Home = (append = document.body) => {
    const node = `
<div class="home">
    <h2>My Home</h2>
    <p>Testing Home</p>
</div>
    `
    append.innerHTML = node
}

export default Home
