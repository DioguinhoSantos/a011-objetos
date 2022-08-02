const pokemon1 = {
    nome: `Bulbasaur`,
    tipo: `Grama`,
    nivel: `5`
}

let pokemon2 = {...pokemon1, nome: `Squirtle`, tipo: `Água`}

console.log(`Pokemon 1: `, pokemon1);
console.log(`pokemon 2: `, pokemon2);

pokemon1.ataques = {};


let arrayAtaques = [{
    nomeAtaque: `Investida`,  
    dano: 40,
    tipo: `Normal`,
    precisao: 100
}
]
pokemon1.ataques.push({
    nomeAtaque: `Investida`,  
    dano: 40,
    tipo: `Normal`,
    precisao: 100
});



/*
pokemon1.ataques.push(arrayAtaques);
console.log(arrayAtaques);*/