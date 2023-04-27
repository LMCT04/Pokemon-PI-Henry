import { 
    GET_POKEMONS, 
    POKEMON_DETAIL,    
    GET_TYPES,
    GET_POKEMON_BY_NAME,
    CLEAR_DETAIL,
    FILTER_TYPES,
    FILTER_CREATED, 
    ORDER_BY_NAME,
} from "./actions"


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

        case FILTER_TYPES:
            const allPokemons = state.allPokemons;
            let typesFiltered

            if(action.payload === 'All'){
                typesFiltered = allPokemons
            } else{
                typesFiltered = allPokemons.filter(pokemon => {
                    const types = pokemon.types.split(', ')

                    return types.map(type => type.toLowerCase()).includes(action.payload.toLowerCase())
                })
            }
            return {
                ...state,
                pokemons: typesFiltered
            }

        case FILTER_CREATED:

            const allPokemons1 = state.allPokemons;
            let createdFilter;

            if (action.payload === "created") {
                createdFilter = allPokemons1.filter((pokemon) => pokemon.created);
            } else if (action.payload === "existing") {
                createdFilter = allPokemons1.filter((pokemon) => !pokemon.created);
            }
            return{
                ...state,
                pokemons: createdFilter || allPokemons1
            }

        case ORDER_BY_NAME:

            const pokemons = state.pokemons.slice()
            const isAscending = action.payload === 'asc'
            pokemons.sort((a, b) => {
                const nameA = a.name.toLowerCase();
                const nameB = b.name.toLowerCase();
                return isAscending ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
            });
            return {
                ...state,
                pokemons,
            }

        default: 
            return { ...state }
    }
}

export default rootReducer