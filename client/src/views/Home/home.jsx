import CardContainer from "../../components/CardsContainer/CardsContainer"
import { useEffect } from "react"
import { useDispatch } from 'react-redux'
import { getPok, getTypes } from "../../redux/actions"
import style from './home.module.css'

const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPok())
        dispatch(getTypes())
    },[dispatch])

    return(
        <div className={style.homeContainer} >
            <CardContainer/>
        </div>
    )
}

export default Home