const {response} = require('express');
const origenesInversionDAO = require('../dao/OrigenesInversionDAO');

const añadirOrigenInversion = async (req, res = response) => {
    const {nombre} = req.body;
    try {
        const origenInversion = await origenesInversionDAO.crearOrigenInversion({nombre});
        res.status(201).json(origenInversion);
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

module.exports = {
    añadirOrigenInversion,
    obtenerOrigenesInversion
}