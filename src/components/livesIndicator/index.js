class LivesIndicator{
    constructor(lives=5,gameover) {
        this.initialLives = lives
        this.lives = lives
        this.gameover = gameover
    }
    render(){
        console.log(document.querySelector('.lives'))
        document.querySelector('.lives').innerHTML = this.lives
    }
    add(){
        this.lives++
        this.render()
    }
    deduct(){
        this.lives--
        if(this.lives===0){
            this.gameover()
        }else{
            this.render()
        }
    }
    restart(){
        this.lives = this.initialLives
    }
}
export default LivesIndicator