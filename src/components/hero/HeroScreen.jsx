import React, { useMemo } from 'react'
import { Button, Card } from 'react-bootstrap';
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = () => {
    
    const navigate = useNavigate();
    
    const { heroeId } = useParams();
    
    //recupera la imagen
    const imgPath = `${process.env.PUBLIC_URL}/assets/${heroeId}.jpg`;
    //recupera el heroe
    const hero = useMemo( () =>  getHeroById(heroeId), [heroeId]) //getHeroById(heroeId);
    
    if (!hero) {
        return <Navigate to='/' />
    }
    
    //VUELVE A LA PAGINA ANTERIOR CON -1 COMO PARAMETRO
    const handleReturn = () => {
      navigate(-1);
    }

    return (

        <div className="row justify-content-center animate__animated animate__fadeIn">
            <Card style={{ width: '18rem' }} variant="mt-5">
                <Card.Img variant="top" src={imgPath}  className='img-thumbnail'/>
                <Card.Body>
                    <Card.Title>{hero.superhero}</Card.Title>
                    <Card.Text>
                       Alter ego: {hero.alter_ego}
                       Publisher: {hero.publisher}
                       First appearance: {hero.first_appearance}
                    </Card.Text>
                    <Button variant="dark" onClick={handleReturn}>Back</Button>
                </Card.Body>
            </Card>

        </div>


    )
}
