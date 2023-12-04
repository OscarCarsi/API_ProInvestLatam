const {response} = require('express');
const inversionistasDAO = require('../dao/InversionistasDAO');
const {generarJWT, generarRefreshToken} = require('../helpers/crear-jwt-inversionista');

const anadirInformacionPersonalInversionista = async (req, res = response) => {
    const {nombre, apellidoPaterno, apellidoMaterno, correoElectronico, telefonoCelular, fechaNacimiento, rfc, empresaTrabajo, gradoAcademico, profesion} = req.body;
    const inversionista = {nombre, apellidoPaterno, apellidoMaterno, correoElectronico, telefonoCelular, fechaNacimiento, rfc, empresaTrabajo, gradoAcademico, profesion};
    try {
        const inversionistaNuevo = await inversionistasDAO.añadirInformacionPersonalInversionista(inversionista);
        const token = await generarJWT(inversionistaNuevo.rfc);
        const tokenRefresco = await generarRefreshToken(inversionistaNuevo.rfc);
        res.status(201).json({inversionista: inversionistaNuevo, token, tokenRefresco});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error});
    }
}
const anadirInformacionDomicilioInversionista = async (req, res = response) => {
    const {idInversionista} = req.params;
    const {calle, colonia, codigoPostal, estado, municipio, numeroExterior, numeroInterior} = req.body;
    const inversionista = {calle, colonia, codigoPostal, estado, municipio, numeroExterior, numeroInterior, idInversionista};
    try {
        const inversionistaNuevo = await inversionistasDAO.añadirInformacionDomiciliaria(inversionista);
        res.status(200).json(inversionistaNuevo);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error});
    }
}
const obtenerInversionistas = async (req, res = response) => {
    try {
        const inversionistas = await inversionistasDAO.encontrarInversionistas();
        res.status(200).json(inversionistas);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error});
    }
}

module.exports = {
    anadirInformacionPersonalInversionista,
    anadirInformacionDomicilioInversionista,
    obtenerInversionistas
}