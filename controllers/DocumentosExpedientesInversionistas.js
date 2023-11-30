const {response} = require('express');
const documentosExpedienteInversionistaDAO = require('../dao/DocumentosExpedienteInversionistaDAO');

const añadirDocumentoExpedienteInversionista = async (req, res = response) => {
    const {nombre} = req.body;
    try {
        const documentoExpedienteInversionista = await documentosExpedienteInversionistaDAO.crearDocumentoExpedienteInversionista({nombre});
        res.status(201).json(documentoExpedienteInversionista);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "No se pudo agregar el documento para el expediente del inversionista", error});
    }
}

const encontrarDocumentosExpedienteInversionista = async (req, res = response) => {
    try {
        const documentosExpedienteInversionista = await documentosExpedienteInversionistaDAO.encontrarDocumentosExpedienteInversionista();
        res.status(200).json(documentosExpedienteInversionista);
    } catch (error) {
        console.error(error);
        res.status(404).json({message: "No se pudieron encontrar los documentos para el expediente del inversionista", error});
    }
}

module.exports = {
    añadirDocumentoExpedienteInversionista,
    encontrarDocumentosExpedienteInversionista
}