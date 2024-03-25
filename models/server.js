const express = require('express')
const cors  = require('cors')
const bodyParser = require('body-parser')
const { dbConection } = require('../database/config')

class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.eventoPath = '/eventos' //Ruta de la API
        this.participantePath = '/participantes'
        this.tpPath = '/tipo_participantes'
        this.vehiculoPath = '/vehiculos_contratados'
        this.middlewares()
        this.routes()
        this.conectarDB()
    }

    listen(){
        this.app.listen(
            this.port, () => {
                console.log('Escuchando por el puerto '+this.port)
            } 
        )
    }
    routes(){
        this.app.use(this.eventoPath, require('../routes/evento'))
        this.app.use(this.participantePath, require('../routes/participante'))
        this.app.use(this.tpPath, require('../routes/tipo_participante'))
        this.app.use(this.vehiculoPath, require('../routes/vehiculo'))
    }

    middlewares(){//
        this.app.use( cors() ); //Indicar el uso de cors
        this.app.use( bodyParser.json()) //Parsear objetos a insertar en la db
    }

    async conectarDB(){
        await dbConection()
    }

}

module.exports = {Server} //Exportación de la clase