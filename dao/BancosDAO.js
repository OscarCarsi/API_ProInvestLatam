const {Bancos} = require('../models');
class BancosDAO {
    static async crearBanco(banco) {
        return await Bancos.create(banco);
    }
    static async encontrarBancos() {
        return await Bancos.findAll();
    }
    static async encontrarBancoPorNombre(nombre) {
        return await Bancos.findOne({where: {banco: nombre}});
    }
    static async editarBanco(banco) {
        return await Bancos.update(banco, {where: {id: banco.id}});
    }
}
module.exports = BancosDAO;