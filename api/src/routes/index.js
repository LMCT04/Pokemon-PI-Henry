const { Router } = require('express');
const pokemonRouter = require('./pokemonRoute')
const typeRouter = require('./typeRoute')


const router = Router();

router.use('/pokemons', pokemonRouter)
router.use('/type', typeRouter)


module.exports = router;
