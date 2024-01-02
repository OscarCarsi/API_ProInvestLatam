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
        return await TiposInversion.update(tipoInversion, {where: {idTipo: tipoInversion.idTipo}, returning: true, plain: true});
    }
    static async eliminarTipoInversion(id) {
        return await TiposInversion.destroy({where: {idTipo: id}});
    }
    static async encontrarTipoInversion(tipoInversion) {
        return await TiposInversion.findOne(tipoInversion);
    }
}
module.exports = TiposInversionDAO;