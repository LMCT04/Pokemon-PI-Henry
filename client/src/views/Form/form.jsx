import { useEffect, useState } from "react"
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux"
import { getTypes } from '../../redux/actions'
import style from './form.module.css'


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


    const validate = (form) => {
        let errors = {};
        if (!form.name.trim()){
            errors.name = "These characters are required.";            
        } else if (!/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(form.name.trim())){
            errors.name = "This feature must contain only letters.";            
        }

        if (!form.image){
            errors.image = "These characters are required.";        
        }        
        
        if (!form.attack){
            errors.attack = "These characters are required.";
        }else if (/^\d*\.\d+$/.test(form.attack)){
            errors.attack = "Please enter a whole number.";
        }

        if (!form.defense){
            errors.defense = "These characters are required.";
        }else if (/^\d*\.\d+$/.test(form.defense)){
            errors.defense = "Please enter a whole number.";
        }

        if (!form.speed){
            errors.speed = "These characters are required.";
        }else if (/^\d*\.\d+$/.test(form.speed)){
            errors.speed = "Please enter a whole number.";
        }

        if (!form.hp){
            errors.hp = "These characters are required.";
        }else if (/^\d*\.\d+$/.test(form.hp)){
            errors.hp = "Please enter a whole number.";
        }

        if (!form.weight){
            errors.weight = "These characters are required.";
        }else if (/^\d*\.\d+$/.test(form.weight)){
            errors.weight = "Please enter a whole number.";
        }

        if (!form.height){
            errors.height = "These characters are required.";
        }else if (/^\d*\.\d+$/.test(form.height)){
            errors.height = "Please enter a whole number.";
        }
    
        return errors;
    }


    const HandlerChange = (event) => {
        const property = event.target.name
        const value = event.target.value
        setErrors(
            validate({
                ...form, [property]:value
            })
        )
        setForm({
            ...form,
            [property]:value
        })
    }


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
        <form className={style.form}  onSubmit={HandlerSubmit} >
            <div>
                <label> Name: </label>
                <input type="text" value={form.name} onChange={HandlerChange} name='name' />
                {errors.name && <span className={style.error}>{errors.name}</span>}
            </div>

            <div>
                <label> Image: </label>
                <input type="text" value={form.image} onChange={HandlerChange} name='image' />
                {errors.image && <span className={style.error}>{errors.image}</span>}
            </div>

            <div>
                <label> Attack: </label>
                <input type="text" value={form.attack} onChange={HandlerChange} name='attack' />
                {errors.attack && <span className={style.error}>{errors.attack}</span>}
            </div>

            <div>
                <label> Defense: </label>
                <input type="text" value={form.defense} onChange={HandlerChange} name='defense' />
                {errors.defense && <span className={style.error}>{errors.defense}</span>}
            </div>

            <div>
                <label> Speed: </label>
                <input type="text" value={form.speed} onChange={HandlerChange} name='speed' />
                {errors.speed && <span className={style.error}>{errors.speed}</span>}
            </div>

            <div>
                <label> Hp: </label>
                <input type="text" value={form.hp} onChange={HandlerChange} name='hp' />
                {errors.hp && <span className={style.error}>{errors.hp}</span>}
            </div>

            <div>
                <label> Weight: </label>
                <input type="text" value={form.weight} onChange={HandlerChange} name='weight' />
                {errors.weight && <span className={style.error}>{errors.weight}</span>}
            </div>

            <div>
                <label> Height: </label>
                <input type="text" value={form.height} onChange={HandlerChange} name='height' />
                {errors.height && <span className={style.error}>{errors.height}</span>}
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
            <div className={style.buttonContainer}>
                <button className={style.button} type="submit" > CREATE POKEMON </button>
            </div>
        </form>
    )
}

export default Form

