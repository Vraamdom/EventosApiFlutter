const {Router} = require('express')

const route = Router()


//Listar todos los datos
//Importando el controlador
const { getParticipante, postParticipante, putParticipante, deleteParticipante } = require('../controllers/participante')


route.get('/', getParticipante)

route.post('/', postParticipante)

route.put('/:_id', putParticipante)

route.delete('/:_id', deleteParticipante)
// //Consultar un dato
// route.get('/consultarUsuario', (req, res) => {
//     res.json({
//         msg: 'Lista Datos'
//     })
// })

// //Metodo para agregar datos
// route.post('/', (req, res) => {
//     res.json({
//         msg: 'Insercion exitosa'
//     })
// })


module.exports = route 