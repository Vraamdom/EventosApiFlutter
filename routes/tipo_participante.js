const {Router} = require('express')

const route = Router()


//Listar todos los datos
//Importando el controlador
const { getTP, postTP, putTP, deleteTP } = require('../controllers/tipo_participante')

route.get('/', getTP)

route.post('/', postTP)

route.put('/', putTP)

route.delete('/', deleteTP)
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