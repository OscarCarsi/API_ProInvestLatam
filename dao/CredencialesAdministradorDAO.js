const {CredencialesAdministrador} = require('../models');
class CredencialesAdministradorDAO {
    static async encontrarCredencialesPorUsuarioContrasenia(usuarioAcceso, contrasenaAcceso) {
        return await CredencialesAdministrador.findOne({
            where: {
                usuario: usuarioAcceso,
                contrasena: contrasenaAcceso
            }
        });
    }
}
module.exports = CredencialesAdministradorDAO;