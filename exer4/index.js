import axios from 'react'
import figlet from 'figlet'


function getRand(min,max) {
    return Math.floor(Math.random() * (max - min) + min);
}


let url = 'https://pokeapi.co/api/v2/pokemon/'
let num = getRand(1, 1008);
url += num;

async function getPokemon(num) {
    try {
        const response = await axios.get(url);
    } catch (error) {
        console.log("No Pokemon Found")
    }

}

getPokemon(num);

