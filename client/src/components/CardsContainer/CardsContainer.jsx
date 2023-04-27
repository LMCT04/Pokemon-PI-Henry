import { useDispatch, useSelector } from 'react-redux'
import { useState } from "react";
import Card from '../Card/Card.jsx'
import style from './CardsContainer.module.css'
import Paginated from '../Paginated/paginated.jsx'
import { filterCreated, filterTypes, orderByName} from "../../redux/actions"
import { useHistory } from "react-router-dom"


const CardContainer = () => {

    const pokemons = useSelector(state => state.pokemons)
    const types = useSelector(state => state.types)

    const [page, setPage] = useState(1);
    const showPerPage = 12;
    const lastOnPage = page * showPerPage;
    const firstOnPage = lastOnPage - showPerPage;
    const shownPokemons = pokemons.slice(firstOnPage, lastOnPage);
    const history = useHistory()
    const dispatch = useDispatch()


    const paginate = (pageNumber) => {
        setPage(pageNumber);
    };

    const handlerFilterTypes = (event) => {
        dispatch(filterTypes(event.target.value));
        setPage(1);
        history.replace("/home")       
    };

    const handlerFilterCreated = (event) => {
        dispatch(filterCreated(event.target.value));
        setPage(1);   
        history.replace("/home")     
    };

    const handlerSort = (event) => {
        dispatch(orderByName(event.target.value));
        setPage(1); 
        history.replace("/home")       
    };

    return(
        <div>
            <select onChange={handlerSort}>
                <option value="asc">ORDER A - Z</option>
                <option value="des">ORDER Z - A</option>
            </select>

            <select onChange={handlerFilterTypes}>
                <option value="All" hidden>TYPES</option>                        
                {types.map(type => (
                    <option key={type.id} value={type.name}>
                    {type.name.charAt(0).toUpperCase() + type.name.substring(1)}
                    </option>
            ))}
            </select>

            <select onChange={handlerFilterCreated} >
                <option value="created">CREATED</option>
                <option value="existing">EXISTING</option>              
            </select>    

            <Paginated showPerPage={showPerPage} pokemons={pokemons.length} paginate={paginate} page={page} />
            <div className={style.CardsContainer} >
                {shownPokemons.map(pok => {
                    return (<Card
                        key={pok.id}
                        id={pok.id}
                        name={pok.name}
                        image={pok.image}
                        types={pok.types}
                    />)
                })}
            </div>
            <Paginated showPerPage={showPerPage} pokemons={pokemons.length} paginate={paginate} page={page} />
        </div>
    )
}

export default CardContainer