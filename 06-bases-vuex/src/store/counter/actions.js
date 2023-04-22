import getRandomInt from '@/helper/getRandomInt'

export const incrementRandomInt = async( { commit } ) => {
    commit('setLoading', true)
    const randomInt = await getRandomInt()
    commit('incrementBy', { val: randomInt, name: 'incrementBy' } )
    commit('setLoading', false)
}