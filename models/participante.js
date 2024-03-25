const {Schema, model, trusted} = require('mongoose')

const ParticipanteSchema = ({
    nombre_completo:{
        type: String,
        unique:false,
        required:[true, 'El nombre del participante es necesario']
    },

    edad:{
        type:String,
        unique: false,
        required:[true, 'La edad del participante es requerida'],
    },

    genero_biologico:{
        type:String,
        unique: false,
        required:[true, 'El genero del participante es requerido'],
    },

    tipo_documento:{
        type:String,
        unique: false,
        required:[true, 'El tipo documento del participante es requerido'],
    },

    asistencia:{
        type: Boolean,
        default: true
    },
    Placa_vehiculo_personal:{
        type:String,
        unique: true,
    },

    nro_documento: {
        type: Number,
        required:[true, 'El documento del participante es necesario'],
    }
})


module.exports = model('Participante', ParticipanteSchema)