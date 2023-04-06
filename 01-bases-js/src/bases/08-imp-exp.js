import superHeroes from '../data/heroes'

export const getHeroById = (heroId) => superHeroes.find(hero => hero.id === heroId)
export const getHeroesByOwner = (owner) =>  superHeroes.filter(hero => hero.owner === owner)


/**
 *
 * LLamar funciones desde otro archivo
    import { getHeroById, getHeroesByOwner} from './bases/08-imp-exp'

    console.log(getHeroById(2))
    console.log(getHeroesByOwner("Marvel"))
 *
 */