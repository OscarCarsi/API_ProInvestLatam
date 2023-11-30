const {response} = require('express');
const tiposInversionDAO = require('../dao/TiposInversionDAO');

const añadirTipoInversion = async (req, res = response) => {
    const {nombre, descripcion, rendimiento} = req.body;
    const tipoInversion = {nombre, descripcion, rendimiento};
    try {
        const tipoInversionExiste = await tiposInversionDAO.encontrarTipoInversionPorNombre(tipoInversion.nombre);
        if(tipoInversionExiste){
            return res.status(400).json({message: "El tipo de inversión ya existe"});
        }
        else{
            const tipoInversionNuevo = await tiposInversionDAO.crearTipoInversion(tipoInversion);
            res.status(201).json(tipoInversionNuevo);
        }
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

const editarTipoInversion = async (req, res = response) => {
    const {idTipoInversion} = req.params;
    const {nombreTipoInversion, descripcionTipoInversion, rendimientoTipoInversion} = req.body;
    try {
        const tipoInversionEditar = {idTipoInversion, nombreTipoInversion, descripcionTipoInversion, rendimientoTipoInversion};
        const tipoInversionEditado = await tiposInversionDAO.editarTipoInversion(tipoInversionEditar);
        res.status(200).json(tipoInversionEditado);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "No se pudo editar el tipo de inversión", error});
    }
}

module.exports = {
    añadirTipoInversion,
    obtenerTiposInversion
}