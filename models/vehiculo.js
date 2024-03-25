const {Schema, model} = require('mongoose')

const VehiculoSchema = ({
    tipo_vehiculo:{
        type: String,
        unique:false,
        required:[true, 'El tipo de vehiculo es necesario']
    },

    puestos_vehiculo:{
        type: Number,
        unique: false,
        required:[true, 'El numero de puestos es requerido'],
    },

    placa_vehiculo: {
        type:String,
        unique: true,
        required:[true, 'La placa del vehículo es requerida'],
    },
    precio_dolar: {
        type: Number,
        unique: false,
        required:[true, 'El predio dolar es requerido']
    }

})


module.exports = model('Vehiculo', VehiculoSchema)