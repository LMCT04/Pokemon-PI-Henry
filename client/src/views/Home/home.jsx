import CardContainer from "../../components/CardsContainer/CardsContainer"
import { useEffect } from "react"
import { useDispatch } from 'react-redux'
import { getPok, getTypes } from "../../redux/actions"

const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPok())
        dispatch(getTypes())
    },[dispatch])

    return(
        <div>
            <h1>API POKEMON</h1>
            <CardContainer/>
        </div>
    )
}

export default Home