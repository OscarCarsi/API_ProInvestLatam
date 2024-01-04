const {response} = require('express');
const contratosInversionDAO = require('../dao/ContratosInversionDAO');
const {generarJWT} = require('../helpers/crear-jwt-inversionista');
const correo = require('../utils/emailSender');
const inversionistasDAO = require('../dao/InversionistasDAO');
const sha256 = require('js-sha256');

const crearContratoInversion = async (req, res = response) => {
    const {direccionIp, idInversionista, ultimaActualizacion} = req.body;
    try {
        const estado = "VERIFICACION";
        const contratoInversionNuevo = {direccionIp, idInversionista, estado, ultimaActualizacion};
        const contratoInversion = await contratosInversionDAO.crearContratoInversion(contratoInversionNuevo);
        res.status(201).json(contratoInversion);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "No se pudo crear el contrato de inversión", error});
    }
}

const editarInversionContratoInversion = async (req, res = response) => {
    const {idInversionista} = req.params;
    const {idTipo, idOrigen, importe, plazoAnios} = req.body;
    try {
        const contratoInversionNuevo = {idInversionista, idTipo, idOrigen, importe, plazoAnios};
        const contratoInversion = await contratosInversionDAO.editarContratoInversionista(contratoInversionNuevo);
        res.status(200).json({contratoActualizado: contratoInversion});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "No se pudo editar el contrato de inversión", error});
    }
}
const editarEstadoUltimaActualizacionContratoInversion = async (req, res = response) => {
    const {idInversionista} = req.params;
    const {estado, ultimaActualizacion} = req.body;
    try {
        const contratoInversionNuevo = {idInversionista, estado, ultimaActualizacion};
        const contratoInversion = await contratosInversionDAO.editarContratoInversionista(contratoInversionNuevo);
        res.status(200).json(contratoInversion);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "No se pudo editar el contrato de inversión", error});
    }
}
const agregarVerificacionesSms = async (req, res = response) => {
    const {idInversionista} = req.params;
    const {direccionIp} = req.body;
    try {
        const contratoInversion = await contratosInversionDAO.agregarVerificacionesSms(idInversionista);
        const token = await generarJWT(direccionIp);
        res.status(200).json({informacionContrato: contratoInversion, token});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "No se pudo agregar verificación de SMS", error});
    }
}
const agregarVerificacionesCorreo = async (req, res = response) => {
    const {idInversionista} = req.params;
    try {
        const contratoInversion = await contratosInversionDAO.agregarVerificacionesCorreo(idInversionista);
        res.status(200).json({message: "Se ha verificado correctamente su correo electrónico. Puede cerrar esta ventana y continuar su solicitud de inversión."});  
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "No se pudo agregar verificación de correo", error});
    }
}
const agregarContratoCompletoContratoInversion = async (req, res = response) => {  
    const {idInversionista} = req.params;
    const {contrato} = req.body;
    try {
        const contratoInversionNuevo = {idInversionista, contrato};
        const contratoInversion = await contratosInversionDAO.editarContratoInversionista(contratoInversionNuevo);
        res.status(200).json({contratoActualizado: contratoInversion});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "No se pudo agregar el contrato", error});
    }
}
const obtenerContratoPorIP = async (req, res = response) => {
    const {direccionIp} = req.body;
    try {
        const contratoInversion = await contratosInversionDAO.obtenerContratoInversionistaPorIP(direccionIp);
        const token = await generarJWT(direccionIp);
        res.status(200).json({informacionContrato: contratoInversion, token});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "No se pudo obtener el contrato", error});
    }
}

const obtenerContratosCompletos = async (req, res = response) => {
    try {
        const contratosInversion = await contratosInversionDAO.encontrarContratosInversion();
        res.status(200).json(contratosInversion);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "No se pudo obtener los contratos", error});
    }
}
const obtenerContratoPorFolio = async (req, res = response) => {
    const {folioInversion} = req.params;
    try {
        const contratoInversion = await contratosInversionDAO.encontrarContratosInversionFolio(folioInversion);
        res.status(200).json(contratoInversion);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "No se pudo obtener el contrato", error});
    }
}

const enviarCorreoVerificacion = async(req, res = response) => {
    const {idInversionista} = req.params;
    const {folioInversion} = req.body;
    const transporter = correo.iniciarCorreo();
    try{
        const inversionista = await inversionistasDAO.encontrarInversionistaPorIdInversionista(idInversionista);
        const contratoInversion = await contratosInversionDAO.encontrarContratosInversionFolio(folioInversion);
        if (inversionista != null && contratoInversion != null){
            var idHash = sha256(idInversionista);
            var message = {
                from: process.env.USER,
                to: inversionista.correoElectronico,
                subject: "Verifica tu dirección de correo electrónico",
                text: `Ingresa a la liga a continuación para verificar tu correo electrónico. ${process.env.CLIENT_PROINVEST}/verificarCorreo/${folioInversion}/${idHash}`,
                html: `<h2 style="font-family:Verdana,Helvetica,sans-serif;font-weight:normal;font-size:32px;line-height:48px">Verifica tu dirección de correo electrónico</h2>
                <p style="margin-top:24px;font-size:16px">Hola,</p>
                <p>Por favor confirma tu dirección de correo electrónico para tu solicitud de inversión de ProInvest Latinoamérica.</p>
                <p>Si no empezaste una solicitud de inversión, siéntete libre de hacer caso omiso a este correo.</p>
                <a href="${process.env.CLIENT_PROINVEST}/verificarCorreo/${folioInversion}/${idHash}" style="background:#131415;color:#fff;font-size:14px;border:0;border-radius:4px;display:inline-block;line-height:24px;margin:8px 0;min-height:20px;outline:0;padding:8px 20px;text-align:center;vertical-align:middle;white-space:nowrap;text-decoration:none">
                    Verificar correo electrónico
                </a>`
              };
            transporter.sendMail(message, function(err, data) {
                if (err) {
                  console.log("Error " + err);
                  throw err;
                } else {
                  res.status(200).json({message: "Correo electrónico enviado correctamente"});
                }
              });
        }
    } catch(error){
        console.error(error);
        res.status(500).json({message: "No se pudo enviar el correo de verificación", error});
    }
}
module.exports = {
    crearContratoInversion,
    editarInversionContratoInversion,
    editarEstadoUltimaActualizacionContratoInversion,
    agregarVerificacionesSms,
    agregarVerificacionesCorreo,
    agregarContratoCompletoContratoInversion,
    obtenerContratoPorIP,
    obtenerContratosCompletos,
    obtenerContratoPorFolio,
    enviarCorreoVerificacion
}   