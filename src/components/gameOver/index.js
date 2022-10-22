class GameOver{
    constructor(score,start,timer){
        this.score = score
        this.start = start
        this.timer = timer
    }
    init(){
        const banner = document.createElement('div')
        banner.style=`
            position:fixed;
            text-align:center;
            width:50%;
            height:50%;
            margin:auto;
            border:1px solid brown;
            border-radius: 12px;
            padding:20px;
        `
        const record = localStorage.getItem('record')
        const speed = localStorage.getItem('speed')
        banner.innerHTML = `<div style='display:flex;align-items:center; flex-direction:column'><p style='background:#3399ff'>Your highest score is: ${record===null?'no records':record}</p>
        <p style='background:#3399ff'>Your current score is: ${this.score}</p>
        <p style='background:yellow'>The speed you achieved is: 1 fruit per ${Math.ceil(this.timer)} ms</p>
        <p style='background:yellow'>The highest speed you achieved is: 1 fruit per ${speed===null?'1000': Math.ceil(speed)}ms</p>
        </div>`
        const button = document.createElement('button');
        button.innerHTML = 'play again'
        button.addEventListener('click',(e)=>{
            e.preventDefault()
            banner.remove()
            this.start()
        })
        banner.append(button)
        document.querySelector('#root').append(banner)
    }
}
export default GameOver