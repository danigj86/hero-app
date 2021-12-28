import { heroes } from "../data/heroes";

//console.log(heroes)

export const getHeroById = (id = '') =>{

  
    return heroes.find( hero => hero.id == id);

}