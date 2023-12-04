const {Inversionistas } = require('../models');
class InversionistasDAO {
    static async añadirInformacionPersonalInversionista(inversionista) {
        return await Inversionistas.create(inversionista);
    }
    static async añadirInformacionDomiciliaria(inversionista) {
        return await Inversionistas.update(inversionista, {
            where: {
                idInversionista: inversionista.idInversionista
            }, returning: true, plain: true
        });
    }
    static async encontrarInversionistas() {
        return await Inversionistas.findAll();
    }
}
module.exports = InversionistasDAO;