// console.log('testing [1]')
// console.log('testing [2]')
// setTimeout(() => console.log('testing [3]'), 1)
// const test = new Promise((resolve, reject) => {
//     console.log('testing [7]')
//     resolve(console.log('testing [9]'))
// }).then(res => res)
// var i = 1
// console.log(i)
// i = 2
// console.log(i)
// setTimeout(() => {
//
//     console.log('testing i => ', i)
// }, 1)
// i++
// console.log('testing ii => ', i)
// for (var i = 0; i < 5; i++){
//     setTimeout(() => console.log('testing [4] => ', i), 1)
//     // console.log('testing [5] => ', i)
// }
// console.log('testing [6]')
// 3
// 4
// const byCount = (a = 5) => {
//     let count = a || 5
//     return () => count += a
// }
// const test = byCount()
// const test2 = byCount()
// console.log('testing [count] => ', test())
// console.log('testing [count] => ', test())
// console.log('testing [count2] => ', test2())
// var i = 0

// for (i = 0; i < 5; i++){
//     setTimeout(() => console.log(i), 1000)
// }
// const time = () => {
//     if ( i < 5) {
//         i++
//         console.log(i)
//         setTimeout(time, 1000)
//     }
// }
// time()
// const list = document.querySelectorAll('.link')
// list.forEach((elem) => {
//     console.log(elem)
// })
// console.log(list)
const user = [
    {
        name: 'Vasya',
        age: 10,
        gender: true
    },
    {
        name: 'Anyi',
        age: 30,
        gender: false
    },
    {
        name: 'Petya',
        age: 100,
        gender: true
    },
    {
        name: 'Masha',
        age: 33,
        gender: false
    },
]
const root = document.getElementById('root')
const show = (e) => {
    e.stopPropagation()
    e.preventDefault()
    console.log('testing [target] => ', e.target.textContent.trim())
}


// user.forEach(elem => createFirstUsers(elem))
// const createSecondUsers = ({title, price}) => {
//     return `
//         <li>
//             <a href="#">
//                 ${`${title} - ${price}`}
//             </a>
//         </li>
//     `
// }
// const node = user.map(elem => createSecondUsers(elem))
// root.innerHTML += node.join('')
// document.addEventListener('click', (e) => {
//     const _this = e.target
//     if (_this.matches('a')){
//         show(e)
//     }
// })
// const api = async () => {
//     try{
//         const resp = await fetch('https://fakestoreapi.com/productst')
//         console.log(resp)
//         if(!resp.ok){
//             throw new Error('errrrrrror')
//         }
//         const data = await resp.json()
//         data.forEach(elem => createFirstUsers(elem))
//     } catch (error) {
//         console.log(error)
//     }
// }
// api()
// fetch('https://fakestoreapi.com/products')
//     .then(res=>res.json())
//     .then(json => {
//         console.log(json)
//         json.forEach(elem => createFirstUsers(elem))
//     })
// fetch('https://pokeapi.co/api/v2/pokemon/venusaur')
//     .then(res=>res.json())
//     .then(json => {
//         console.log(json)
//     })




















