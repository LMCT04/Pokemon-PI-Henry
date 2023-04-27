const { Router } = require('express')
const { 
    getPokemonHandler,
    getByIdPokemonHandler,
    createPokemonHandler, 
} = require('../Handlers/pokemonHandler')


const pokemonRouter = Router()

pokemonRouter.get('/', getPokemonHandler)
pokemonRouter.get('/:id', getByIdPokemonHandler)
pokemonRouter.post('/', createPokemonHandler)

module.exports = pokemonRouter