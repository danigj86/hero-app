import React from 'react'
import { HeroList } from '../hero/HeroList'

export const DcScreen = () => {
    return (
        <div>
            <h1>Héroes DC Comics</h1>
            <hr />
            <HeroList publisher='DC Comics' />
        </div>
    )
}
