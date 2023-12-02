const {OrigenesInversion} = require('../models');   
class OrigenesInversionDAO {
    static async crearOrigenInversion(origenInversion) {
        return await OrigenesInversion.create(origenInversion);
    }
    static async encontrarOrigenesInversion() {
        return await OrigenesInversion.findAll();
    }
    static async encontrarOrigenesInversionPorNombre(nombre) {
        return await OrigenesInversion.findOne({where: {nombreOrigen: nombre}});
    }
    static async editarOrigenInversion(origenInversion) {
        return await OrigenesInversion.update(origenInversion, {where: {idOrigen: origenInversion.idOrigen}, returning: true, plain: true});
    }
    static async eliminarOrigenInversion(id) {
        return await OrigenesInversion.destroy({where: {idOrigen: id}});
    }
}
module.exports = OrigenesInversionDAO;