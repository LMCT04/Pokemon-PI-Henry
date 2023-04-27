import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { clearDetail, getDetailPok } from '../../redux/actions'
import style from './detail.module.css'

const Detail = () => {

    const { id } = useParams()
    const dispatch = useDispatch()
    const pokemon = useSelector(state => state.detail)

    useEffect(() => {
        dispatch(clearDetail())
        dispatch(getDetailPok(id))
    }, [dispatch, id])

    return (
        <div>
            {Array.isArray(pokemon) && pokemon.length > 0 ?
            <div>
                <h1> {pokemon[0].name} </h1>
                <img
                    src={pokemon[0].image}
                    alt='not found'
                />
                <form>
                    <label> Types: </label>
                    <h2> {pokemon[0].types} </h2>

                    <label> Attack: </label>
                    <h2> {pokemon[0].attack} </h2>

                    <label> Defense: </label>
                    <h2> {pokemon[0].defense} </h2>

                    <label> Speed: </label>
                    <h2> {pokemon[0].speed} </h2>
                </form>
            </div>
            : <p className={style.loading}></p>
        }
        </div>
    )
}

export default Detail