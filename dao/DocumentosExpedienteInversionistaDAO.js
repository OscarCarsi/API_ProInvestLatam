const {DocumentosExpedienteInversionista} = require('../models');
class DocumentosExpedienteInversionistaDAO {
    static async crearDocumentoExpedienteInversionista(documentoExpedienteInversionista) {
        return await DocumentosExpedienteInversionista.create(documentoExpedienteInversionista);
    }
    static async encontrarDocumentosExpedienteInversionista() {
        return await DocumentosExpedienteInversionista.findAll();
    }
    static async encontrarDocumentoExpedienteInversionistaPorNombre(nombre) {
        return await DocumentosExpedienteInversionista.findOne({where: {nombreDocumento: nombre}});
    }
    static async editarDocumentoExpedienteInversionista(documentoExpedienteInversionista) {
        return await DocumentosExpedienteInversionista.update(documentoExpedienteInversionista, {where: {id: documentoExpedienteInversionista.id}});
    }
}
module.exports = DocumentosExpedienteInversionistaDAO;