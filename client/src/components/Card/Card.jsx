import { Link } from "react-router-dom"
import style from './Card.module.css'

const Card = (props) => {
    return(
        <div className={style.Card} >
            <Link className={style.link} to={`/detail/${props.id}`}  >
                <div>
                    <p>Id: {props.id} </p>
                </div>

                <div>
                    <p>Name: {props.name} </p>
                </div>

                <div>
                    <img src={props.image} alt='Not found' width='150px' heigth='150px' />
                </div>

                <div>
                    <p>Types: {props.types} </p>
                </div>
                
            </Link>
        </div>
    )
}

export default Card