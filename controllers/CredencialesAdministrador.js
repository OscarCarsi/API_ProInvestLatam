const {response} = require('express');
const crypto = require('crypto');
const credencialesAdministradorDAO = require('../dao/CredencialesAdministradorDAO');
const {generarJWT} = require('../helpers/crear-jwt-administrador');

const hash = async (text) => {
    const hash = crypto.createHash('sha256');
    hash.update(text);
    return hash.digest('hex');
}

const credencialesAcceso = async (req, res = response) => {
    const {usuario, contrasena} = req.body;
    const constraseniaEncryptada = await hash(contrasena);
    try {
        const credenciales = await credencialesAdministradorDAO.encontrarCredencialesPorUsuarioContrasenia(usuario, constraseniaEncryptada);
        const token = await generarJWT(credenciales);
        res.status(200).json({
            usuario: credenciales.usuario,
            token
        })
    } catch (error) {
        console.error(error);
        res.status(404).json({message: "Verifica tus credenciales de acceso", error});
    }
}

module.exports = {
    credencialesAcceso
}