import ControllerBall from "components/ControllerBall";
import Score from "components/Score";
import LivesIndicator from "../livesIndicator";
// import ballsStore from "../store";
import GameOver from "../gameOver";
class Game{
    constructor() {
        this.timer = 1000
        this.initTimer = 1000
        this.score = new Score()
        this.lives = new LivesIndicator(1,this.gameOver.bind(this))
        this.balls = []
    }
    start(){
        
        document.querySelector('#root').innerHTML=''
        document.querySelector('#root').insertAdjacentHTML('afterbegin',`
        <div class='frame'>
            <div style='background:#3399ff'>Score: <span class="score"></span></div>
            <div style='background:yellow'>You have: <span style='background:#00e600'><span class="lives"></span>lives</span> left</div>
        </div>
    `)
      this.lives.render()
      this.score.render()
      this.interval = setInterval((function rtx(){
        const ball = new ControllerBall(this.score,this.lives,this.gameOver.bind(this))
        this.balls.push(ball)
        console.log('initTimer',this.initTimer,'; this.timer',this.timer)
        ball.init()
        clearInterval(this.interval)
        this.timer*=0.994
        const localStorageSpeed = localStorage.getItem('speed')
        if(localStorageSpeed===null || localStorageSpeed>this.timer){
            localStorage.setItem('speed',this.timer)
        }
        this.interval = setInterval(rtx.bind(this),this.timer)
      }).bind(this), this.timer)
    }
    gameOver(){
        clearInterval(this.interval)
        this.balls.forEach((e)=>{
            e.destroy()
        })
        this.balls=[]
        document.querySelector('#root').innerHTML=''
        new GameOver(this.score.score,this.start.bind(this),this.timer).init()
        this.timer=this.initTimer
        this.lives.restart()
        this.score.restart()
    }
}
export default Game

