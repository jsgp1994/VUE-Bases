const isAuthenticatedGuard = async ( to, from, next ) => {
  return new Promise( () => {
    const random = Math.random() * 100
    if ( random > 50) {
        console.log('Autenticado')
        next()
    }else{
        console.log('Bloqueado por beforeEach Guard')
        next( { name:  'pokemon-home'} )
    }
  })
}

export default isAuthenticatedGuard