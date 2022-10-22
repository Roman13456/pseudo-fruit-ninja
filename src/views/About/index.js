import './style'

const About = (append = document.body) => {
    const node = `
<div class="about">
    <h2>My About</h2>
    <p>Testing About</p>
</div>
    `
    append.innerHTML = node
}

export default About
