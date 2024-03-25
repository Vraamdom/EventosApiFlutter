const {Schema, model} = require('mongoose')

const TPSchema = ({
    tipo_ps:{
        type: String,
        unique:false,
        required:[true, 'El tipo de participante es necesario']
    },

    genero_biologico:{
        type:String,
        unique: false,
        required:[true, 'El genero del tipo de participante es requerido'],
    },

    edad_minima: {
        type: Number,
        required:[true, 'la edad minima es requerida'],
    },

    edad_maxima: {
        type: Number,
        required: [true, 'la edad maxima es requerida']
    },

    nro_tp: {
        type:String,
        required: [true, 'el numero de participantes por tipo es necesario']
    }
})


module.exports = model('Tipo participante', TPSchema)