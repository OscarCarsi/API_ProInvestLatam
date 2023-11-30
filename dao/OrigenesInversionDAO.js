const {OrigenesInversion} = require('../models');   
class OrigenesInversionDAO {
    static async crearOrigenInversion(origenInversion) {
        return await OrigenesInversion.create(origenInversion);
    }
    static async encontrarOrigenesInversion() {
        return await OrigenesInversion.findAll();
    }
}
module.exports = OrigenesInversionDAO;