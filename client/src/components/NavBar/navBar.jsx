import { Link } from "react-router-dom"
import SearchBar from "../SearchBar/searchBar"
import style from './navBar.module.css'

const NavBar = () => {
    return(
        <div className={style.NavBarContainer} >
            <Link to='/home'>
                <button className={style.button} > HOME </button>
            </Link>
            <Link to='/form' >
                <button className={style.button} > FORM </button>
            </Link>
            <SearchBar/>
        </div>
    )
}

export default NavBar