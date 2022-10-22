
class GetBalls{
    constructor() {
        this.balls = []
    }
    add(ball){
        this.balls.push(ball)
        console.log(this.balls)
    }
    clear(){
        this.balls.forEach((e)=>{
            console.log(e)
            e.destroy()
        })
        this.balls=[]
        console.log('balls r clear:',this.balls)
    }
    
}
const ballsStore = new GetBalls

export default ballsStore