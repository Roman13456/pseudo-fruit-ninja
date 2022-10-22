import 'styles/all'
import { api } from "helpers/api";
import moment from "moment";
import Slider from "components/Slider";
import Game from "components/Game";
import homePage from './components/homePage';
// import Header from "components/Header";
// import { onLocation } from "helpers/route";
// import {MDCSlider} from '@material/slider';
// import {MDCChipSet} from '@material/chips';
// import Chips from "components/Chips";
// api('products', (res) => {
//     console.log(res)
// })
// console.log('test moment ',
//     moment("12-25-1995", "MM-DD-YYYY")
//         .format('Do MMM YY'))
// Slider()
// Chips()
// const chipset = new MDCChipSet(document.querySelector('.mdc-evolution-chip-set'));
// // const slider = new MDCSlider(document.querySelector('.mdc-slider'));
// const test = (num) => {
//     return fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${num}`)
//         .then(res => res.json())
//         .then(res => {
//             const { results } = res
//             return results
//         })
// }
// const fetch2 = fetch('https://pokeapi.co/api/v2/ability/?limit=20&offset=40')
//     .then(res => res.json())
// Promise.all([test(0), fetch2, test(60)])
//     .then(res => console.log(res))
// Header()
// onLocation()
// console.log('test new branch')
new homePage(new Game()).render()
// gameInstance.start()


