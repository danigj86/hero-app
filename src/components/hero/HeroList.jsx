import React, { useMemo } from 'react'
import { HeroCard } from './HeroCard';

import { getHeroesByPublisher } from '../../selectors/getHeroByPublisher'

export const HeroList = ({publisher}) => {

    const heroes =  useMemo(() => getHeroesByPublisher(publisher),[publisher]) ;

    return (
        <div className='animate__animated animate__fadeIn row row-cols-1 row-cols-md-2'> 
                {
                    heroes.map(hero =>{
                        return  <HeroCard key={hero.id} {...hero}/> 
                    })
                }          
        </div>
    )
}
