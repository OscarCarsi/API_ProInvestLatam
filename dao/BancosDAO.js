const {Bancos} = require('../models');
class BancosDAO {
    static async crearBanco(banco) {
        return await Bancos.create(banco);
    }
    static async encontrarBancos() {
        return await Bancos.findAll();
    }
}
module.exports = BancosDAO;