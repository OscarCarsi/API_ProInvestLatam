const {response} = require('express');
const expedientesInversionistasDAO = require('../dao/ExpedientesInversionistasDAO');

const subirExpedienteInversionista = async (req, res = response) => {
    const {idDocumento, idInversionista} = req.params;
    const {nombreArchivo, enlaceBucket} = req.body;
    try {
        const expedienteInversionistaNuevo = {idDocumento, idInversionista, nombreArchivo, enlaceBucket};
        const expedienteInversionista = await expedientesInversionistasDAO.crearExpedienteInversionista(expedienteInversionistaNuevo);
        res.status(201).json(expedienteInversionista);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "No se pudo subir el expediente del inversionista", error});
    }
}

const obtenerExpedientesInversionistasIdDocumentoIdInversionista = async (req, res = response) => {
    const {idDocumento, idInversionista} = req.params;
    try {
        const expedienteInversionista = await expedientesInversionistasDAO.encontrarExpedientesInversionistasIdDocumentoIdInversionista(idDocumento,idInversionista);
        res.status(200).json(expedienteInversionista);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "No se pudo obtener el expediente del inversionista", error});
    }
}

module.exports = {
    subirExpedienteInversionista,
    obtenerExpedientesInversionistasIdDocumentoIdInversionista
}