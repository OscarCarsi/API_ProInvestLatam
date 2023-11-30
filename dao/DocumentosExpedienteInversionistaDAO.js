const {DocumentosExpedienteInversionista} = require('../models');
class DocumentosExpedienteInversionistaDAO {
    static async crearDocumentoExpedienteInversionista(documentoExpedienteInversionista) {
        return await DocumentosExpedienteInversionista.create(documentoExpedienteInversionista);
    }
    static async encontrarDocumentosExpedienteInversionista() {
        return await DocumentosExpedienteInversionista.findAll();
    }
}
module.exports = DocumentosExpedienteInversionistaDAO;