import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getPokByName } from '../../redux/actions'
import style from './searchBar.module.css'


const SearchBar = () => {

    const dispatch = useDispatch()
    const [name, setName] = useState('')

    const handlerIMPUTchange = (event) => {
        setName(event.target.value)
    }

    const handlerSUBMIT = (event) => {
        event.preventDefault()
        dispatch(getPokByName(name))
    }

    return(
        <div className={style.searchBar}>
            <form onSubmit={handlerSUBMIT} >
                <button className={style.button}  type='submit' > SEARCH </button>
                <input
                    type='text'
                    placeholder='enter name...'
                    onChange={handlerIMPUTchange}
                    className={style.input}
                />
            </form>
        </div>
    )

}

export default SearchBar