import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getPokByName } from '../../redux/actions'


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
        <div>
            <form onSubmit={handlerSUBMIT} >
                <button type='submit' > SEARCH </button>
                <input
                    type='text'
                    placeholder='introduce un nombre'
                    onChange={handlerIMPUTchange}
                />
            </form>
        </div>
    )

}

export default SearchBar