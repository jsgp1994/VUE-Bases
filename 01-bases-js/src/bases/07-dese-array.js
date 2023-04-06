const characters = ['Goku', 'Vegeta', 'Trunks']

const [goku, vegeta, Trunks] = characters

const returnArray = ([ letters, numbers ]) => {
    return [letters, numbers]
}

const [ letters, numbers ] = returnArray(['xyz', 987])

console.log(letters, numbers)