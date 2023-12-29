const {response} = require('express');
const contratosInversionDAO = require('../dao/ContratosInversionDAO');
const {generarJWT} = require('../helpers/crear-jwt-inversionista');

const crearContratoInversion = async (req, res = response) => {
    const {direccionIp, idInversionista, ultimaActualizacion} = req.body;
    try {
        const estado = "VERIFICACION";
        const contratoInversionNuevo = {direccionIp, idInversionista, estado, ultimaActualizacion};
        const contratoInversion = await contratosInversionDAO.crearContratoInversion(contratoInversionNuevo);
        res.status(201).json(contratoInversion);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "No se pudo crear el contrato de inversión", error});
    }
}

const editarInversionContratoInversion = async (req, res = response) => {
    const {idInversionista} = req.params;
    const {idTipo, idOrigen, importe, plazoAnios} = req.body;
    try {
        const contratoInversionNuevo = {idInversionista, idTipo, idOrigen, importe, plazoAnios};
        const contratoInversion = await contratosInversionDAO.editarContratoInversionista(contratoInversionNuevo);
        res.status(200).json(contratoInversion);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "No se pudo editar el contrato de inversión", error});
    }
}
const editarEstadoUltimaActualizacionContratoInversion = async (req, res = response) => {
    const {idInversionista} = req.params;
    const {estado, ultimaActualizacion} = req.body;
    try {
        const contratoInversionNuevo = {idInversionista, estado, ultimaActualizacion};
        const contratoInversion = await contratosInversionDAO.editarContratoInversionista(contratoInversionNuevo);
        res.status(200).json(contratoInversion);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "No se pudo editar el contrato de inversión", error});
    }
}
const agregarVerificacionesSms = async (req, res = response) => {
    const {idInversionista} = req.params;
    const {direccionIp} = req.body;
    try {
        const contratoInversion = await contratosInversionDAO.agregarVerificacionesSms(idInversionista);
        const token = await generarJWT(direccionIp);
        res.status(200).json({informacionContrato: contratoInversion, token});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "No se pudo agregar verificación de SMS", error});
    }
}
const agregarVerificacionesCorreo = async (req, res = response) => {
    const {idInversionista} = req.params;
    const {direccionIp} = req.body;
    try {
        const contratoInversion = await contratosInversionDAO.agregarVerificacionesCorreo(idInversionista);
        const token = await generarJWT(direccionIp);
        res.status(200).json({informacionContrato: contratoInversion, token});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "No se pudo agregar verificación de correo", error});
    }
}
const agregarContratoCompletoContratoInversion = async (req, res = response) => {  
    const {idInversionista} = req.params;
    const {contrato} = req.body;
    try {
        const contratoInversionNuevo = {idInversionista, contrato};
        const contratoInversion = await contratosInversionDAO.editarContratoInversionista(contratoInversionNuevo);
        res.status(200).json(contratoInversion);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "No se pudo agregar el contrato", error});
    }
}
const obtenerContratoPorIP = async (req, res = response) => {
    const {direccionIp} = req.body;
    try {
        const contratoInversion = await contratosInversionDAO.obtenerContratoInversionistaPorIP(direccionIp);
        const token = await generarJWT(direccionIp);
        res.status(200).json({informacionContrato: contratoInversion, token});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "No se pudo obtener el contrato", error});
    }
}

const obtenerContratosCompletos = async (req, res = response) => {
    try {
        const contratosInversion = await contratosInversionDAO.encontrarContratosInversion();
        res.status(200).json(contratosInversion);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "No se pudo obtener los contratos", error});
    }
}
const obtenerContratoPorFolio = async (req, res = response) => {
    const {folioInversion} = req.params;
    try {
        const contratoInversion = await contratosInversionDAO.encontrarContratosInversionFolio(folioInversion);
        res.status(200).json(contratoInversion);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "No se pudo obtener el contrato", error});
    }
}
module.exports = {
    crearContratoInversion,
    editarInversionContratoInversion,
    editarEstadoUltimaActualizacionContratoInversion,
    agregarVerificacionesSms,
    agregarVerificacionesCorreo,
    agregarContratoCompletoContratoInversion,
    obtenerContratoPorIP,
    obtenerContratosCompletos,
    obtenerContratoPorFolio
}   