const person = {
    name: 'Tony',
    age: 45,
    codeName: 'Iroman',
    power: 'No tiene poder'
}

const { age, name, codeName, power} = person

const createHero = ({ age, name, codeName, power}) =>
({
    id: 152634,
    age,
    name,
    codeName,
    power
})

console.log(createHero(person))