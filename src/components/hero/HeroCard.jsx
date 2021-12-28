import React from 'react'
import { Link } from 'react-router-dom';

export const HeroCard = ({ id, superhero, publisher,
    alter_ego, first_appearance, characters }) => {


    const imgPath = `${process.env.PUBLIC_URL}/assets/${id}.jpg`;

    return (


        <div className="card animate__animated animate__fadeIn mt-3 " >
            <div className="row">


                <div className="col-4">
                    <img className="img-thumbnail" src={imgPath} alt="Card image cap" />
                </div>

                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">{superhero}</h5>
                        <p className="card-text">Alter ego: {alter_ego}</p>
                        <Link className='btn btn-dark' to={`/hero/${id}`}>
                        Más...</Link>
                        {
                            (alter_ego != characters) && <p className='text-muted'>{characters}</p>
                        }
                    </div>
                </div>
            </div>
        </div>


    )
}
