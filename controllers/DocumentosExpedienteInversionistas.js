const { response } = require('express');
const documentosExpedienteInversionistaDAO = require('../dao/DocumentosExpedienteInversionistaDAO');

const anadirDocumentoExpedienteInversionista = async (req, res = response) => {
    const { nombre } = req.body;
    try {
        const documentoExpedienteInversionistaExiste = await documentosExpedienteInversionistaDAO.encontrarDocumentoExpedienteInversionistaPorNombre(nombre);
        if (documentoExpedienteInversionistaExiste) {
            return res.status(400).json({ message: "El documento para el expediente del inversionista ya existe" });
        }
        else {
            const documentoExpedienteInversionista = await documentosExpedienteInversionistaDAO.crearDocumentoExpedienteInversionista({ nombreDocumento: nombre });
            res.status(201).json(documentoExpedienteInversionista);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "No se pudo agregar el documento para el expediente del inversionista", error });
    }
}

const encontrarDocumentosExpedienteInversionista = async (req, res = response) => {
    try {
        const documentosExpedienteInversionista = await documentosExpedienteInversionistaDAO.encontrarDocumentosExpedienteInversionista();
        res.status(200).json(documentosExpedienteInversionista);
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: "No se pudieron encontrar los documentos para el expediente del inversionista", error });
    }
}

const editarDocumentoExpedienteInversionista = async (req, res = response) => {
    const { id } = req.params;
    const { nombre } = req.body;
    try {
        const documentoExpedienteInversionistaExiste = await documentosExpedienteInversionistaDAO.encontrarDocumentoExpedienteInversionistaPorNombre(nombre);

        const documentoExpedienteInversionistaEditar = { idDocumento: id, nombreDocumento: nombre };
        const documentoExpedienteInversionistaEditado = await documentosExpedienteInversionistaDAO.editarDocumentoExpedienteInversionista(documentoExpedienteInversionistaEditar);
        res.status(200).json(documentoExpedienteInversionistaEditado);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "No se pudo editar el documento para el expediente del inversionista", error });
    }
}
const eliminarDocumentoExpedienteInversionista = async (req, res = response) => {
    const { id } = req.params;
    try {
        await documentosExpedienteInversionistaDAO.eliminarDocumentoExpedienteInversionista(id);
        res.status(200).json({ message: 'Documento eliminado' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "No se pudo eliminar el documento para el expediente del inversionista", error });
    }
}

module.exports = {
    anadirDocumentoExpedienteInversionista,
    encontrarDocumentosExpedienteInversionista,
    editarDocumentoExpedienteInversionista,
    eliminarDocumentoExpedienteInversionista
}