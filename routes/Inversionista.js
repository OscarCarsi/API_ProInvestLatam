const {Router} = require('express');
const {
    anadirInformacionPersonalInversionista,
    anadirInformacionDomicilioInversionista
    } = require('../controllers/Inversionista');
const {
    crearContratoInversion,
    editarInversionContratoInversion,
    editarEstadoUltimaActualizacionContratoInversion,
    agregarVerificacionesSms,
    agregarVerificacionesCorreo,
    agregarContratoCompletoContratoInversion,
    obtenerContratoPorIP,
    obtenerContratoPorFolio
}  = require('../controllers/ContratosInversion');
const {
    obtenerTodasLasColonias,
    obtenerColoniasPorCodigoPostal,
    obtenerNombresColoniasPorCodigoPostal,
    obtenerEstados, 
    obtenerCodigoPostalPorColonia
    } = require('../controllers/Direcciones');
const {obtenerBancos} = require('../controllers/Bancos');
const {encontrarDocumentosExpedienteInversionista} = require('../controllers/DocumentosExpedienteInversionistas');
const {subirExpedienteInversionista} = require('../controllers/ExpedientesInversionistas');
const {crearInformacionBancaria} = require('../controllers/InformacionBancaria');
const {obtenerOrigenesInversion} = require('../controllers/OrigenesInversion');
const {obtenerTiposInversion} = require('../controllers/TiposInversion');
const router = Router();
const {validarJWT} = require('../middlewares/validarJWT-inversionista');

router.post('/informacionPersonal', anadirInformacionPersonalInversionista);
router.put('/informacionDomicilio/:idInversionista', [validarJWT],anadirInformacionDomicilioInversionista);
router.post('/contratosInversion', crearContratoInversion);
router.put('/contratosInversion/:idInversionista', [validarJWT], editarInversionContratoInversion);
router.put('/contratosInversion/estado/:idInversionista', [validarJWT], editarEstadoUltimaActualizacionContratoInversion);
router.put('/contratosInversion/sms/:idInversionista', [validarJWT], agregarVerificacionesSms);
router.put('/contratosInversion/correo/:idInversionista', [validarJWT], agregarVerificacionesCorreo);
router.put('/contratosInversion/contrato/:idInversionista', [validarJWT], agregarContratoCompletoContratoInversion);
router.post('/contratosInversion/obtenerIp', obtenerContratoPorIP);
router.get('/contratosInversion/:folioInversion',  obtenerContratoPorFolio);
router.get('/bancos', [validarJWT], obtenerBancos);
router.get('/documentosExpediente', [validarJWT], encontrarDocumentosExpedienteInversionista);
router.post('/expedientesInversionistas/:idDocumento/:idInversionista', [validarJWT], subirExpedienteInversionista);
router.post('/informacionBancaria/:folioInversion', [validarJWT], crearInformacionBancaria);
router.post('/origenesInversion', obtenerOrigenesInversion);
router.get('/tiposInversion', [validarJWT], obtenerTiposInversion);


router.get('/colonias', obtenerTodasLasColonias);
router.post('/colonia/:cp', obtenerColoniasPorCodigoPostal);
router.get('/nombresColonia/:cp', obtenerNombresColoniasPorCodigoPostal);
router.get('/estados', obtenerEstados);
router.get('/codigoPostal/:colonia', obtenerCodigoPostalPorColonia);
module.exports = router;