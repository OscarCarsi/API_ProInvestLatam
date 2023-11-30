const {Inversionistas } = require('../models');
class InversionistasDAO {
    static async crearInversionista(inversionista) {
        return await Inversionistas.create(inversionista);
    }
    static async encontrarInversionistas() {
        return await Inversionistas.findAll();
    }
}
module.exports = InversionistasDAO;