import { useState } from "react"
import axios from 'axios'

const Form = () => {

    const [form, setForm] = useState({
        Name:'',
        Image:'',
        Attack:'',
        Defense:'',
        Speed:'',
        Weight:'',
        Height:'',
        TypeOne:'',
        TypeTwo:'',

    })

    const [errors, setErrors] = useState({
        Name:'',
        Image:'',
        Attack:'',
        Defense:'',
        Speed:'',
        TypeOne:'',
        TypeTwo:'',
    })

    const HandlerChange = (event) => {
        const prop = event.target.name
        const value = event.target.value

        setForm({
            ...form,
            [prop]:value
        })
    }

    //const validate = (form) => {}

    const HandlerSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3001/pokemons', form)

    }


    return(
        <form onSubmit={HandlerSubmit} >
            <div>
                <label> Name: </label>
                <input type="text" value={form.Name} onChange={HandlerChange} name='Name' />
            </div>

            <div>
                <label> Image: </label>
                <input type="text" value={form.Image} onChange={HandlerChange} name='Image' />
            </div>

            <div>
                <label> Attack: </label>
                <input type="text" value={form.Attack} onChange={HandlerChange} name='Attack' />
            </div>

            <div>
                <label> Defense: </label>
                <input type="text" value={form.Defense} onChange={HandlerChange} name='Defense' />
            </div>

            <div>
                <label> Speed: </label>
                <input type="text" value={form.Speed} onChange={HandlerChange} name='Speed' />
            </div>

            <div>
                <label> Weight: </label>
                <input type="text" value={form.Weight} onChange={HandlerChange} name='Weight' />
            </div>

            <div>
                <label> Height: </label>
                <input type="text" value={form.Height} onChange={HandlerChange} name='Height' />
            </div>

            <div>
                <label> Type One: </label>
                <input type="text" value={form.TypeOne} onChange={HandlerChange} name='TypeOne' />
            </div>
            <div>
                <label> Type Two: </label>
                <input type="text" value={form.TypeTwo} onChange={HandlerChange} name='TypeTwo' />
            </div>
            <button type="submit" > SUBMIT </button>
        </form>
    )
}

export default Form