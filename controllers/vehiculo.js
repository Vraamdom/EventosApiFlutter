const {response} = require('express')

Vehiculo = require('../models/vehiculo')

const getVehiculo = async(req, res) => {
    const vehiculos = await Vehiculo.find(); //Obtener todos los dococumentos de una coleccion
    res.json({
        msg: vehiculos
    })
}

const postVehiculo = async(req, res) => {
    const datos = req.body //Capturar datos de la URL-postman
    let mensaje = 'Insercion exitosa'
    try {
        const vehiculo = new Vehiculo(datos) //Instanciar el objeto
        await vehiculo.save()//Guardar en la base de dato  
        console.log(vehiculo) 
    } catch(error) {
        mensaje = error
        console.log(error)
    }

    res.json({
        msg: mensaje
    })
}


const putVehiculo = async(req, res) =>{
    const {tipo_vehiculo, puestos_vehiculo, placa_vehiculo, precio_dolar} = req.body
    try {
        const vehiculo = await Vehiculo.findOneAndUpdate({placa_vehiculo: placa_vehiculo},
            {puestos_vehiculo:puestos_vehiculo, tipo_vehiculo:tipo_vehiculo, precio_dolar:precio_dolar
            })
            mensaje = 'Actualizacion exitosa'
    } catch(error) {
        mensaje = error
    } 
    res.json({
        msg:mensaje
    })
    
}

const deleteVehiculo = async(req, res) =>{
    const {placa_vehiculo} = req.query //Desestructurar
    let mensaje = ''
    try {
        const vehiculo = await Vehiculo.findOneAndDelete({placa_vehiculo: placa_vehiculo})
            mensaje = 'Eliminacion exitosa'
    } catch(error) {
        mensaje = error
    }
    res.json({
        msg:mensaje
    })
    
}


module.exports = {
    getVehiculo,
    postVehiculo,
    putVehiculo,
    deleteVehiculo
}