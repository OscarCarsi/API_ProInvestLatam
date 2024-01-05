const {ExpedientesInversionistas} = require('../models');
class ExpedientesInversionistasDAO{
    static async crearExpedienteInversionista(expedienteInversionista){
        return await ExpedientesInversionistas.create(expedienteInversionista);
    }
    static async encontrarExpedientesInversionistasIdDocumentoIdInversionista(idDocumento,idInversionista){
        return await ExpedientesInversionistas.findOne({
            where: {
                idDocumento: idDocumento,
                idInversionista: idInversionista
            }
        });
    }
}
module.exports = ExpedientesInversionistasDAO;