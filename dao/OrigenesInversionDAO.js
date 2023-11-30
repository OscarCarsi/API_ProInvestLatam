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
        return await OrigenesInversion.update(origenInversion, {where: {id: origenInversion.id}});
    }
}
module.exports = OrigenesInversionDAO;