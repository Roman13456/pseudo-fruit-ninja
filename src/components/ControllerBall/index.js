import Ball from "components/Ball";
import ballsStore from "../store";
class ControllerBall{
    constructor(score,lives,gameover) {
        this.score = score
        this.size = 100
        this.speed = 1
        this.interval = 20
        this.ball=''
        this.lives = lives
        this.gameover = gameover
    }
    init(){
        this.renderBall()
        this.move()
    }
    renderBall(){
       this.ball = new Ball(this.random(), this.size)
       this.ball.addEventListener('click', () => {
           if(this.ball.classList.contains('heal')){
            this.lives.add()
           }else if(this.ball.classList.contains('bomb')){
            this.lives.deduct()
           }else{
            this.score.add()
           }
           this.destroy()
           
       })
    }
    random(){
        const k = Math.random();
        if((Math.ceil( k* window.innerWidth) - this.size)>=0){
            return Math.ceil(k*window.innerWidth) - this.size
        }else{
            return Math.ceil( k* window.innerWidth)
        }
        
    }
    move(){
        let y = 0
        this.moveInterval = setInterval(() => {
            y += this.speed
            this.ball.style.top = y + 'px'
            if(y > window.innerHeight - this.size){
                this.destroy()
                // console.log(this.lives)
                if(!(this.ball.classList.contains('bomb')||this.ball.classList.contains('heal'))){
                    this.lives.deduct()
                }
            }
        }, this.interval)
    }
    destroy(){
        clearInterval(this.moveInterval)
        this.ball.remove()
        delete this
    }
}
export default ControllerBall
