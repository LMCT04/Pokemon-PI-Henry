const { Router } = require('express')
const { 
    getTypeHandler,
} = require('../Handlers/typeHandler')


const typeRouter = Router()

typeRouter.get('/', getTypeHandler)

module.exports = typeRouter