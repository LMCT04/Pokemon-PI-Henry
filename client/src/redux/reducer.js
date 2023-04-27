import { GET_POKEMONS } from "./actions"
import { POKEMON_DETAIL } from "./actions"
import { GET_TYPES } from "./actions"
import { GET_POKEMON_BY_NAME } from "./actions"
import { CLEAR_DETAIL } from "./actions"


const initialState = {
    pokemons: [],
    allPokemons: [],
    detail: [],
    types: [],
}

const rootReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload
            }
            
        case POKEMON_DETAIL:
            return {
                ...state,
                detail: action.payload
            }

        case GET_TYPES:
            return {
                ...state,
                types: action.payload
            }

        case GET_POKEMON_BY_NAME:
            return {
                ...state,
                pokemons: action.payload
            }

        case CLEAR_DETAIL:
            return { 
                ...state,
                detail: '' 
            }

        default: 
            return { ...state }
    }
}

export default rootReducer