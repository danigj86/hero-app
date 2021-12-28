import { heroes } from "../data/heroes";

//console.log(heroes)

export const getHeroesByPublisher = (publisher) =>{

    const validPublisher = ['Marvel Comics','DC Comics']
   
    if (!validPublisher.includes(publisher)) {
        throw new Error (`${publisher} no es correcto`)
    }else{
        return  heroes.filter( hero => hero.publisher === publisher );
    }
 
    
    }

  
