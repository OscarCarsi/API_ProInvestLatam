const {ContratosInversion} = require('../models');
class ContratosInversionDAO {
    static async crearContratoInversion(contratoInversion) {
        return await ContratosInversion.create(contratoInversion);
    }
    static async encontrarContratosInversionFolio(folioInversion) {
        return await ContratosInversion.findByPk(folioInversion);
    }
}