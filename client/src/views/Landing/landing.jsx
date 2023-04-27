import { Link } from 'react-router-dom';
import style from './landing.module.css';

const Landing = () => {
    return(
        <div className={style.container} >
            <div className={style.titleContainer} >
                <h1 className={style.title} > Bienvenidos a mi API Pokemon </h1>
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