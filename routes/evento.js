const {Router} = require('express')

const route = Router()

const { getEvento, postEvento, putEvento, deleteEvento } = require('../controllers/evento')

route.get('/', getEvento)

route.post('/', postEvento)

route.put('/:_id', putEvento)

route.delete('/:_id', deleteEvento)



module.exports = route 