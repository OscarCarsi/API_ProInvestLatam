const {ExpedientesInversionistas} = require('../models');
class ExpedientesInversionistasDAO{
    static async crearExpedienteInversionista(expedienteInversionista){
        return await ExpedientesInversionistas.create(expedienteInversionista);
    }
    static async encontrarExpedientesInversionistasIdDocumentoIdInversionista(idDocumento,idInversionista){
        return await ExpedientesInversionistas.findByPk(idDocumento,idInversionista);
    }
}
module.exports = ExpedientesInversionistasDAO;