const {response} = require('express');
const origenesInversionDAO = require('../dao/OrigenesInversionDAO');

const añadirOrigenInversion = async (req, res = response) => {
    const {nombre} = req.body;
    try {
        const origenInversionExiste = await origenesInversionDAO.encontrarOrigenInversionPorNombre(nombre);
        if(origenInversionExiste){
            return res.status(400).json({message: "El origen de inversión ya existe"});
        }
        else{
            const origenInversion = await origenesInversionDAO.crearOrigenInversion({nombre});
            res.status(201).json(origenInversion);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "No se pudo agregar el origen de inversión", error});
    }
}

const obtenerOrigenesInversion = async (req, res = response) => {
    try {
        const origenesInversion = await origenesInversionDAO.encontrarOrigenesInversion();
        res.status(200).json(origenesInversion);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "No se pudo obtener los origenes de inversión", error});
    }
}

const editarOrigenInversion = async (req, res = response) => {
    const {idOrigen} = req.params;
    const {nombreOrigen} = req.body;
    try {
        const origenInversionEditar = {idOrigen, nombreOrigen};
        const origenInversionEditado = await origenesInversionDAO.editarOrigenInversion(origenInversionEditar);
        res.status(200).json(origenInversionEditado);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "No se pudo editar el origen de inversión", error});
    }
}

module.exports = {
    añadirOrigenInversion,
    obtenerOrigenesInversion,
    editarOrigenInversion
}