import { Link } from 'react-router-dom';
import style from './landing.module.css';

const Landing = () => {
    return(
        <div className={style.container} >
            <div className={style.titleContainer} >
                <h1 className={style.title} > Welcome to API Pokemon  </h1>
            </div>
            <div className={style.titleContainer} >
                <p className={style.title} >EXPLORE POKEMONS WITH OUR API</p>
            </div>
            <Link to='/home'>
                <div className={style.buttonContainer} >
                    <button className={style.button} > ENTRAR </button>
                </div>
            </Link>
        </div>
    )
}

export default Landing