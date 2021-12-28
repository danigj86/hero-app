import React, { useEffect, useState } from 'react'
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { useForm } from '../../selectors/useForm';
import { HeroCard } from '../hero/HeroCard';

export const SearchScreen = () => {

    const initialForm = {
        searchText: ''
    };
  

    const [formState, cambiaInput] = useForm(initialForm);

    const { searchText } = formState;

    const handleSearch = (e) => {
        e.preventDefault();

        if (searchText == '') {
            alert('escribe algo');
            return false;
        }
    }

   

    const heroes = getHeroesByName(searchText);

  

    console.log(heroes)

    useEffect(() => {
        console.log('hey')
    }, [formState])



      //----------------------------------------------------------------
      const [ superheroes , setSuperheroes] = useState('');

      console.log(superheroes)
  
      const superr = getHeroesByName(superheroes);

      console.log(superr)

      const supp = () =>{
          setSuperheroes('superman')
      }

      const batt = () =>{
        setSuperheroes('ba')
    }
  
      //----------------------------------------------------------

    return (
        <>
            <h1>Search</h1>
            <hr />
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <h3>Search Form</h3>
                        <hr />

                        <form onSubmit={handleSearch}>

                            <input type="text"
                                placeholder='Search hero...'
                                name='searchText'
                                className="text form-control"
                                value={searchText}
                                onChange={cambiaInput} />

                            <button onClick={handleSearch} className='btn btn-outline-dark mt-3' type="submit">Search...</button>

                        </form>

                        {/*
                        <button  onClick={supp} className='btn btn-outline-dark mt-3' >Superman...</button>
                        <button  onClick={batt} className='btn btn-outline-dark mt-3' >Batman...</button> 
                        */}
                    </div>
                    <div className="col-7">
                        <h3>Results</h3>
                        <hr />
                        {

                            searchText == '' ?

                                <p className='alert alert-danger text-center'>No hay héroes</p>

                                :

                                heroes.map(hero => {
                                    return <HeroCard
                                        key={hero.id}
                                        {...hero} />
                                })
                        }
                    </div>

                  {/*   <hr />

                    {
                        superr.map(supper => {
                            return <p key={supper.id} >{supper.superhero}</p>
                        } )
                    } */
                    }
                </div>
            </div>
        </>
    )
}
