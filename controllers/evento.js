const {response} = require('express')

Evento = require('../models/evento')

const getEvento = async(req, res) => {
    const eventos = await Evento.find(); //Obtener todos los dococumentos de una coleccion
    res.json({
        msg: eventos
    })
}

const postEvento = async(req, res) => {
    const datos = req.body //Capturar datos de la URL-postman
    let mensaje = 'Insercion exitosa'
    try {
        const evento = new Evento(datos) //Instanciar el objeto
        await evento.save()//Guardar en la base de dato  
        console.log(evento) 
    } catch(error) {
        mensaje = error
        console.log(error)
    }

    res.json({
        msg: mensaje
    })
}


const putEvento = async(req, res) =>{
    const { _id,nombre_evento, hora_i, hora_f, encargado_f, encargado_e,encargado_e_t,nro_participantes,estado, valor} = req.body;
    try {
        const evento = await Evento.findByIdAndUpdate(
            _id,
            { nombre_evento, hora_i, hora_f, encargado_f,  encargado_e, encargado_e_t, nro_participantes, estado, valor},
            { new: true }
        );
        if (!evento) {
            return res.status(404).json({ error: 'Evento no encontrado' });
        }
        res.json({
            msg: 'Actualizacion exitosa',
            evento: evento
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al actualizar evento' });
    }
    
}

const deleteEvento = async(req, res) =>{
    const { _id } = req.params;
    let mensaje = '';
    try {
        const evento = await Evento.findOneAndDelete({ _id: _id }); 
        mensaje = 'Eliminación exitosa';
        res.json({
            msg: mensaje,
            evento: evento 
        });
    } catch (error) {
        console.log(error);
        mensaje = 'Error al eliminar el evento';
        res.status(500).json({ error: mensaje });
    }
    
}


module.exports = {
    getEvento,
    postEvento,
    putEvento,
    deleteEvento
}