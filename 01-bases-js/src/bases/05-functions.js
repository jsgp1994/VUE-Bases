
const heroes = [{id: 1, name: 'Batman'},{ id: 2, name: 'Superman'}]

const existe = heroes.some( (heroe) => heroe.id === 1 );
const heroe = heroes.find( (heroe) => heroe.id === 1 );

console.log(existe)
console.log(heroe)
