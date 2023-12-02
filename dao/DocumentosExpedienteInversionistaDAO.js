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
        return await DocumentosExpedienteInversionista.update(documentoExpedienteInversionista, {where: {idDocumento: documentoExpedienteInversionista.idDocumento}, returning: true, plain: true});
    }
    static async eliminarDocumentoExpedienteInversionista(id) {
        return await DocumentosExpedienteInversionista.destroy({where: {idDocumento: id}});
    }
}
module.exports = DocumentosExpedienteInversionistaDAO;