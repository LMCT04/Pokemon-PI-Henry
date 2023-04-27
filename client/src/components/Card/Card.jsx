import { Link } from "react-router-dom"
import style from './Card.module.css'

//                <div>
//                    <p className={style.id} >Id: {props.id} </p>
//                </div>
const Card = (props) => {
    return(
        <div className={style.Card} >
            <Link className={style.link} to={`/detail/${props.id}`}  >

                <div>
                    <p className={style.name} >Name: {props.name} </p>
                </div>

                <div>
                    <img className={style.image} src={props.image} alt='Not found' width='150px' heigth='150px' />
                </div>

                <div>
                    <p className={style.types} >Types: {props.types} </p>
                </div>
                
            </Link>
        </div>
    )
}

export default Card