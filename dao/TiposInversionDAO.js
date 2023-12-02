const {TiposInversion} = require('../models');
class TiposInversionDAO {
    static async crearTipoInversion(tipoInversion) {
        return await TiposInversion.create(tipoInversion);
    }
    static async encontrarTiposInversion() {
        return await TiposInversion.findAll();
    }
    static async encontrarTipoInversionPorNombre(nombre) {
        return await TiposInversion.findOne({where: { nombre}});
    }
    static async editarTipoInversion(tipoInversion) {
        return await TiposInversion.update(tipoInversion, {where: {idTipo: tipoInversion.id}, returning: true, plain: true});
    }
}
module.exports = TiposInversionDAO;