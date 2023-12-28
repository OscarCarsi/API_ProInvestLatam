const {InformacionBancaria} = require('../models');
class InformacionBancariaDAO {
    static async crearInformacionBancaria(informacionBancaria) {
        return await InformacionBancaria.create(informacionBancaria);
    }
    static async encontrarInformacionBancariaFolio(folioInversion) {
        return await InformacionBancaria.findByPk(folioInversion);
    }
}
module.exports = InformacionBancariaDAO;