class Score{
    constructor() {
        this.score = 0
    }
    render(){
        document.querySelector('.score').innerHTML = this.score
    }
    add(){
        this.score++
        if(localStorage.getItem('record')===null){
            localStorage.setItem('record',`${this.score}`)
        }else if(this.score>localStorage.getItem('record')){
            localStorage.setItem('record',`${this.score}`)
        }
        this.render()
    }
    restart(){
        this.score = 0
    }
}
export default Score
