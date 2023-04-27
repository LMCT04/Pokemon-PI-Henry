const { Pokemon, Type } = require('../db')
const axios = require('axios')


const clearArr = (arr) => 
    arr.map((pok) => {
        return {
            id: pok.data.id,
            name: pok.data.name,
            image: pok.data.sprites.front_default,
            hp: pok.data.stats[0].base_stat,
            attack: pok.data.stats[1].base_stat,
            defense: pok.data.stats[2].base_stat,
            speed: pok.data.stats[5].base_stat,
            height: pok.data.height,
            weight: pok.data.weight,
            types: pok.data.types.map((ele) => ele.type.name).flat().sort().join(", "),
            created: false,
        }
    })

    const cleanArr1 = (arr) =>
    arr.map((pok) => {   
        return {
            id: pok.id,
            name: pok.name,
            image: pok.sprites.front_default,
            hp: pok.stats[0].base_stat,
            attack: pok.stats[1].base_stat,
            defense: pok.stats[2].base_stat,
            speed: pok.stats[5].base_stat,
            height: pok.height,
            weight: pok.weight,
            types: pok.types? pok.types.map((ele) => ele.type.name).flat().sort().join(", "): undefined,
            created: false,
        }
    })


const getAllPokemons = async () => {
    const database = await Pokemon.findAll({
        include: {
            model: Type,
            attributes: ['name'],
            as: 'types'
        }
    })

    const databasePokemons = database.map((pokemon) => ({
        ...pokemon.toJSON(),
        types: pokemon.types.map((type) => type.name).flat().sort().join(', ')
    }))

    const apiURL = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=50')
    const response = apiURL.data.results?.map(e => axios.get(e.url))

    const responseAPI = await axios.all(response)
    const apiPokemons = clearArr(responseAPI)

    return [...databasePokemons, ...apiPokemons]
}

const searchNameDb = async (name) => {

    const nameSearch = name.trim().toLowerCase();
    const database = await Pokemon.findAll({
        where: { 
            name: nameSearch 
        },
        include: { 
            model: Type, 
            attributes: ["name"], 
            as: "types",
        },
    })

    const dataPokemon = database.map((pokemon) => ({
        ...pokemon.toJSON(), types: pokemon.types.map((type) => type.name).flat().sort().join(", ")
    }))
    
    console.log(dataPokemon)
    
    return dataPokemon
};

const searchNameApi = async (name) => {

    try {
        const pokemonRaw = (
            await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.trim().toLowerCase()}`)).data
            return await cleanArr1([pokemonRaw])
            
        } catch(error) {
            return []
        }
}

const searchPokemonByName = async (name) => {

    const pokeApi = await searchNameApi(name)
    const pokeDb = await searchNameDb(name)

    if(!pokeApi.length && !pokeDb.length)
    throw new Error(`The pokemon ${name} not exist`)

    return [...pokeDb, ...pokeApi];
};

const getPokemonById = async (id, source) => {

    if (source === "bdd") {        
        const database = await Pokemon.findByPk(id, {
            include: { 
                model: Type, 
                attributes: ["name"], 
                as: "types", 
        }
        })
        const databasePokemon = {
            ...database.toJSON(), 
            types: database.types.map((type) => type.name).flat().sort().join(", ")
        }
        return [databasePokemon]
    }  

    if (source === "api") {
        const pokemonRaw = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data
        const apiPokemon = cleanArr1([pokemonRaw])
        return apiPokemon
    }
}

const createPokemon = async ( name, image, attack, defense, speed, weight, hp, height, typeOne, typeTwo ) => {

    const newPokemon = await Pokemon.create({ name,image, attack, defense, speed, weight,hp, height })
    const types = [ typeOne, typeTwo === null || typeTwo === undefined ? '' : typeTwo ]

    for (const type of types) {
        const eachType = await Type.findOne({
            where: {name: type}
        })
    
    await newPokemon.addType(eachType)
    }
    return newPokemon
}

module.exports = {
    getAllPokemons,
    searchPokemonByName,
    getPokemonById,
    createPokemon
}

