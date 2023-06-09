import axios from 'axios'

export const GET_POKEMONS = 'GET_POKEMONS'
export const POKEMON_DETAIL = 'POKEMON_DETAIL'
export const GET_TYPES = 'GET_TYPES'
export const GET_POKEMON_BY_NAME = 'GET_POKEMON_BY_NAME'
export const CLEAR_DETAIL = 'CLEAR_DETAIL'
export const FILTER_TYPES = 'FILTER_TYPES'
export const FILTER_CREATED = 'FILTER_CREATED'
export const ORDER_BY_NAME = 'ORDER_BY_NAME'

const urlDbase = 'http://localhost:3001'

export const getPok = () => {
    return async function(dispatch) {
        try{
            const APIdata = await axios.get(`${urlDbase}/pokemons`)
            const pokemons = APIdata.data
            dispatch({
                type: GET_POKEMONS,
                payload: pokemons,
            })
        } catch(error){
            return console.log('Error getPokemons')
        }
    }
}

export const getDetailPok = (id) => {
    return async function (dispatch) {
        try{
            const APIdata = await axios.get(`${urlDbase}/pokemons/${id}`)
            const byId = APIdata.data
            return dispatch({
                type: POKEMON_DETAIL,
                payload: byId
            })
        } catch(error) {
            return console.log('Error getDetailPokemons')
        }
    }
}

export const getTypes = () => {
    return async function (dispatch) {
        try{
            const APItypes = await axios.get(`${urlDbase}/type`)
            const types = APItypes.data

            dispatch({
                type: GET_TYPES,
                payload: types
            })
        } catch(error) {
            return console.log('Error getTypes')
        }
    }
}

export const getPokByName = (name) => {
    return async function (dispatch) {
        try{
            const APIdata = await axios.get(`${urlDbase}/pokemons?name=${name}`)
            const byName = APIdata.data
            return dispatch({
                type: GET_POKEMON_BY_NAME,
                payload: byName
            })
        } catch (error) {
            return console.log('Error getByNamePokemon')
        }
    }
}

export const clearDetail = () => {
    return {
        type: CLEAR_DETAIL,
    };
}

export const filterTypes = (payload) => {
    return {
        type: FILTER_TYPES, payload
    }
}

export const filterCreated = (payload) => {
    return {
        type: FILTER_CREATED, payload,
    }
}

export const orderByName = (payload) => {
    return {
        type: ORDER_BY_NAME, payload,
    }
}

