import { Link } from 'react-router-dom';
import style from './landing.module.css';

const Landing = () => {
    return(
        <div className={style.container} >
            <div className={style.titleContainer} >
                <h1 className={style.title} > Bienvenidos a mi API Pokemon </h1>
            </div>
            <div className={style.buttonContainer} >
                <Link to='/home'>
                    <button className={style.button} > ENTRAR </button>
                </Link>
            </div>
        </div>
    )
}

export default Landing