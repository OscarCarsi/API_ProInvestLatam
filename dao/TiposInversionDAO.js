const {TiposInversion} = require('../models');
class TiposInversionDAO {
    static async crearTipoInversion(tipoInversion) {
        return await TiposInversion.create(tipoInversion);
    }
    static async encontrarTiposInversion() {
        return await TiposInversion.findAll();
    }
}
module.exports = TiposInversionDAO;