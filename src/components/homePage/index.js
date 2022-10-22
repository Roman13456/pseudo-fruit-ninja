class homePage{
    constructor(game) {
        this.game = game
    }
    render(){
        const finishBtn = document.createElement('button')
        finishBtn.classList.add('finishBtn')
        finishBtn.innerHTML = `finishBtn`
        finishBtn.addEventListener('click',(e)=>{
            e.preventDefault()
            this.game.gameOver()
        })
        const startBtn = document.createElement('button')
        startBtn.classList.add('startBtn')
        startBtn.innerHTML = `startBtn`
        startBtn.addEventListener('click',(e)=>{
            e.preventDefault()
            this.game.start()
        })
        document.querySelector('.board').before(finishBtn)
        document.querySelector('.board').before(startBtn)
    }
    destroy(){
        document.querySelector('.finishBtn').remove()
        document.querySelector('.startBtn').remove()
    }
}
export default homePage