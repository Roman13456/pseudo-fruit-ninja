class Ball{
    constructor(x, size) {
        this.size = size;
        this.x = x;
        this.createBall();
        return this.ball;
    }
    createBall(){
        this.ball = document.createElement('div')
        this.ball.className = 'ball'
        const ballObj = this.ballAbilities()
        if(ballObj.heal){
            this.ball.innerHTML='+1HP'
            this.ball.classList.add('heal')
        }else if(ballObj.bomb){
            this.ball.innerHTML='-1HP'
            this.ball.classList.add('bomb')
        }
        this.ball.style.cssText =  `
          position: fixed;
          width: ${this.size}px;
          height: ${this.size}px;
          border-radius: 50%;
          padding:20px;
          background: ${ballObj.color};
          top: 0px;
          left: ${this.x}px;
        `
        document.querySelector('.balls').append(this.ball)
    }
    ballAbilities(){
        const colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
    const healOrBomb = Math.random()
        return {
            color:colorArray[this.random(0,colorArray.length)],
            heal:healOrBomb<0.1?true:false,
            bomb:healOrBomb>0.7?true:false
        }
    }
    random(min,max){
        min = Math.ceil(min);
        max = Math.floor(max);
    const randIdx = Math.floor(Math.random() * (max - min + 1) + min);
    return randIdx
    }
}
export default Ball
