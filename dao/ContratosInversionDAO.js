const {ContratosInversion} = require('../models');
class ContratosInversionDAO {
    static async crearContratoInversion(contratoInversion) {
        return await ContratosInversion.create(contratoInversion);
    }
    static async editarContratoInversionista(contratoInversion) {
        return await ContratosInversion.update(contratoInversion, {where: { idInversionista: contratoInversion.idInversionista }, returning: true, plain: true});
    }
    static async obtenerContratoInversionistaPorIP(direccionIp) {
        return await ContratosInversion.findOne({ where: { direccionIp: direccionIp } });
    }
    
    static async agregarVerificacionesSms( idInversionista) {
        return await ContratosInversion.update({ smsVerificacion: true }, { where: { idInversionista: idInversionista }, returning: true, plain: true });
    }
    static async agregarVerificacionesCorreo( idInversionista) {
        return await ContratosInversion.update({ correoVerificacion: true }, { where: { idInversionista: idInversionista }, returning: true, plain: true });
    }
    static async encontrarContratosInversionFolio(folioInversion) {
        return await ContratosInversion.findByPk(folioInversion);
    }
    static async encontrarContratosInversion() {
        return await ContratosInversion.findAll({where: { estado: "CONCLUIDO" }});
    }
}
module.exports = ContratosInversionDAO;