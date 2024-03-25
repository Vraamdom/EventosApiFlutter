const {response} = require('express')

TP = require('../models/tipo_participante')

const getTP = async(req, res) => {
    const tipo_participantes = await TP.find(); //Obtener todos los dococumentos de una coleccion
    res.json({
        msg: tipo_participantes
    })
}

const postTP = async(req, res) => {
    const datos = req.body //Capturar datos de la URL-postman
    let mensaje = 'Insercion exitosa'
    try {
        const tipo_participante = new TP(datos) //Instanciar el objeto
        await tipo_participante.save()//Guardar en la base de dato  
        console.log(tipo_participante) 
    } catch(error) {
        mensaje = error
        console.log(error)
    }

    res.json({
        msg: mensaje
    })
}


const putTP = async(req, res) =>{
    const {tipo_ps, genero_biologico, edad_minima, edad_maxima, nro_tp} = req.body
    try {
        const tipo_participante = await TP.findOneAndUpdate({tipo_ps: tipo_ps},
            {genero_biologico:genero_biologico, edad_minima:edad_minima, edad_maxima:edad_maxima, nro_tp:nro_tp
            })
            mensaje = 'Actualizacion exitosa'
    } catch(error) {
        mensaje = error
    }
    res.json({
        msg:mensaje
    })
    
}

const deleteTP = async(req, res) =>{
    const {tipo_ps} = req.query //Desestructurar
    try {
        const tipo_participante = await TP.findOneAndDelete({tipo_ps: tipo_ps})
            mensaje = 'Eliminacion exitosa'
    } catch(error) {
        mensaje = error
    }
    res.json({
        msg:mensaje
    })
    
}


module.exports = {
    getTP,
    postTP,
    putTP,
    deleteTP
}