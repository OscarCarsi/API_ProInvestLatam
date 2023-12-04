const { request, response } = require('express');
const jwt = require('jsonwebtoken');
const { generarJWT, generarRefreshToken } = require('../helpers/crear-jwt-inversionista');

const validarJWT = async (req = request, res = response, next) => {
    const token = req.header('token');
    const refreshToken = req.header('refreshToken');

    if (!token) {
        return res.status(401).json({ msg: 'No existe el token en la petición' });
    }

    try {
        const { rfc } = jwt.verify(token, process.env.LLAVEPRIVADA);
        req.usuario = rfc;
        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError' && refreshToken) {
            try {
                const newToken = jwt.verify(refreshToken, process.env.LLAVEPRIVADA);
                req.usuario = newToken.rfc;
                const newJWT = await generarJWT(newToken.rfc);
                const newRefreshToken = await generarRefreshToken(newToken.rfc);
                res.status(200).json({
                    msg: 'Token renovado exitosamente',
                    token: newJWT,
                    refreshToken: newRefreshToken
                });
            } catch (error) {
                console.log(error);
                res.status(401).json({
                    msg: 'Token no válido'
                });
            }
        } else {
            console.log(error);
            res.status(401).json({
                msg: 'Token no válido'
            });
        }
    }
};
module.exports = {
    validarJWT
}