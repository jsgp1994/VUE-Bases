const persona = {
    nombre: 'Tony',
    apellido: 'start',
    edad: 45,
    direccion: {
        ciudad: 'New york',
        zip: 45454,
        lat: 14.1212,
        lng: 15.121
    }
}

const persona2 = {...persona};
persona2.nombre = 'Peter'

console.log(persona)
console.log(persona2)