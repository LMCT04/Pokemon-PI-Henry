import { useEffect, useState } from "react"
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux"
import { getTypes } from '../../redux/actions'


const Form = () => {

    const dispatch = useDispatch()
    const types = useSelector(state => state.types)

    useEffect(() => {
        dispatch(getTypes())
    },[dispatch])

    const [form, setForm] = useState({
        name:'',
        image:'',
        attack:'',
        defense:'',
        speed:'',
        weight:'',
        height:'',
        hp:'',
        typeOne:'',
        typeTwo:'',

    })

    console.log(form)

    const [errors, setErrors] = useState({
        name:'',
        image:'',
        attack:'',
        defense:'',
        speed:'',
        weight:'',
        height:'',
        hp:'',
        typeOne:'',
        typeTwo:'',
    })

    const HandlerChange = (event) => {
        const property = event.target.name
        const value = event.target.value

        setForm({
            ...form,
            [property]:value
        })
    }

    //const validate = (form) => {}

    const HandlerSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3001/pokemons', form)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log('error en el form bobo');
        });
    }

    const handleTypeOne = (event) => {
        setForm({ ...form, typeOne: event.target.value })
    }
    
    const handleTypeTwo = (event) => {
        setForm({ ...form, typeTwo: event.target.value })
    }


    return(
        <form onSubmit={HandlerSubmit} >
            <div>
                <label> Name: </label>
                <input type="text" value={form.name} onChange={HandlerChange} name='name' />
            </div>

            <div>
                <label> Image: </label>
                <input type="text" value={form.image} onChange={HandlerChange} name='image' />
            </div>

            <div>
                <label> Attack: </label>
                <input type="text" value={form.attack} onChange={HandlerChange} name='attack' />
            </div>

            <div>
                <label> Defense: </label>
                <input type="text" value={form.defense} onChange={HandlerChange} name='defense' />
            </div>

            <div>
                <label> Speed: </label>
                <input type="text" value={form.speed} onChange={HandlerChange} name='speed' />
            </div>

            <div>
                <label> Hp: </label>
                <input type="text" value={form.hp} onChange={HandlerChange} name='hp' />
            </div>

            <div>
                <label> Weight: </label>
                <input type="text" value={form.weight} onChange={HandlerChange} name='weight' />
            </div>

            <div>
                <label> Height: </label>
                <input type="text" value={form.height} onChange={HandlerChange} name='height' />
            </div>

            <div>
                <label> Type One: </label>
                <select onChange={handleTypeOne} name='types' >
                    { types.map((type) => {
                        return (
                            <option key={type.id} value={type.name} > {type.name} </option>
                        )
                    })}
                </select>
            </div>

            <div>
                <label> Type Two: </label>
                <select onChange={handleTypeTwo} name='types' >
                    { types.map((type) => {
                        return (
                            <option key={type.id} value={type.name} > {type.name} </option>
                        )
                    })}
                </select>
            </div>

            <button type="submit" > SUBMIT </button>
        </form>
    )
}

export default Form

