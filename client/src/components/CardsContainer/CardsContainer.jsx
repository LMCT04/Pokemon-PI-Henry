import { useSelector } from 'react-redux'
import Card from '../Card/Card.jsx'
import style from './CardsContainer.module.css'

const CardContainer = () => {

    const pokemons = useSelector(state => state.pokemons)

    return(
        <div className={style.CardsContainer} >
            {pokemons.map(pok => {
                return (<Card
                    key={pok.id}
                    id={pok.id}
                    name={pok.name}
                    image={pok.image}
                    types={pok.types}
                />)
            })}
        </div>
    )
}

export default CardContainer