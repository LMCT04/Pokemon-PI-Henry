const {
    getAllPokemons,
    searchPokemonByName,
    getPokemonById,
    createPokemon
} = require('../Controllers/pokemonController')


const getPokemonHandler = async (req, res) => {
    const { name } = req.query

    try {
        const results =
            name
            ? await searchPokemonByName(name)
            : await getAllPokemons()
        res.status(200).json(results)
    } catch(error) {
        res.status(400).send({ error: error.message })
    }
}


const getByIdPokemonHandler = async (req, res) => {
    const { id } = req.params
    const source = isNaN(id)? "bdd" : "api"

    try{
        const pokemon = await getPokemonById(id, source)
        res.status(200).json(pokemon)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


const createPokemonHandler = async (req, res) => {
    const { name, image, attack, defense, speed, weight, hp, height, typeOne, typeTwo } = req.body
    
    try {      
        const newPokemon = await createPokemon( name, image, attack, defense, speed, weight, hp, height, typeOne, typeTwo )
        res.status(200).json(newPokemon)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


module.exports = {
    getPokemonHandler,
    getByIdPokemonHandler,
    createPokemonHandler
}