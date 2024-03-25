const {response} = require('express');
const participante = require('../models/participante');

Participante = require('../models/participante')

const getParticipante = async(req, res) => {
    const participantes = await Participante.find(); //Obtener todos los dococumentos de una coleccion
    res.json({
        msg: participantes
    })
}

const postParticipante = async(req, res) => {
    const datos = req.body //Capturar datos de la URL-postman
    let mensaje = 'Insercion exitosa'
    try {
        const participante = new Participante(datos) //Instanciar el objeto
        await participante.save()//Guardar en la base de dato  
        console.log(participante) 
    } catch(error) {
        mensaje = error
        console.log(error)
    }

    res.json({
        msg: mensaje
    })
}


const putParticipante = async(req, res) =>{
    const { _id, nombre_completo, edad, genero_biologico, tipo_documento, asistencia, Placa_vehiculo_personal, nro_documento } = req.body;
    try {
        const participante = await Participante.findByIdAndUpdate(
            _id, // Utiliza el ID del cuerpo de la solicitud
            { nombre_completo, edad, genero_biologico, tipo_documento, asistencia, Placa_vehiculo_personal, nro_documento},
            { new: true }
        );
        if (!participante) {
            return res.status(404).json({ error: 'Participante no encontrado' });
        }
        res.json({
            msg: 'Actualizacion exitosa',
            participante: participante
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al actualizar participante' });
    }
    
}

const deleteParticipante = async(req, res) =>{
    const { _id } = req.params; 
    let mensaje = '';
    try {
        const participante = await Participante.findOneAndDelete({ _id: _id }); // Utiliza el ID para eliminar
        mensaje = 'Eliminación exitosa';
        res.json({
            msg: mensaje,
            participante: participante // Devuelve el documento eliminado
        });
    } catch (error) {
        console.log(error);
        mensaje = 'Error al eliminar participante';
        res.status(500).json({ error: mensaje });
    }
    
}


module.exports = {
    getParticipante,
    postParticipante,
    putParticipante,
    deleteParticipante
}