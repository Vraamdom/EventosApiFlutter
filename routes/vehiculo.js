const {Router} = require('express')

const route = Router()


//Listar todos los datos
//Importando el controlador
const { getVehiculo, postVehiculo, putVehiculo, deleteVehiculo } = require('../controllers/vehiculo')


route.get('/', getVehiculo)

route.post('/', postVehiculo)

route.put('/', putVehiculo)

route.delete('/', deleteVehiculo)
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