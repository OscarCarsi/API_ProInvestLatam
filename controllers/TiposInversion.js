const {response} = require('express');
const tiposInversionDAO = require('../dao/TiposInversionDAO');

const añadirTipoInversion = async (req, res = response) => {
    const {nombre, descripcion, rendimiento} = req.body;
    const tipoInversion = {nombre, descripcion, rendimiento};
    try {
        const tipoInversioNuevo = await tiposInversionDAO.crearTipoInversion(tipoInversion);
        res.status(201).json(tipoInversioNuevo);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "No se pudo agregar el tipo de inversión", error});
    }
}
const obtenerTiposInversion = async (req, res = response) => {
    try {
        const tiposInversion = await tiposInversionDAO.encontrarTiposInversion();
        res.status(200).json(tiposInversion);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "No se pudo obtener los tipos de inversión", error});
    }
}

module.exports = {
    añadirTipoInversion,
    obtenerTiposInversion
}