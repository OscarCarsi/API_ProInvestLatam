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
router.get('/contratosInversion', [validarJWT], obtenerContratoPorIP);
router.get('/contratosInversion/:folioInversion', [validarJWT], obtenerContratoPorFolio);
router.get('/bancos', [validarJWT], obtenerBancos);
router.get('/documentosExpediente/:idInversionista', [validarJWT], encontrarDocumentosExpedienteInversionista);
router.post('/expedientesInversionistas', [validarJWT], subirExpedienteInversionista);
router.post('/informacionBancaria', [validarJWT], crearInformacionBancaria);
router.get('/origenesInversion', [validarJWT], obtenerOrigenesInversion);
router.get('/tiposInversion', [validarJWT], obtenerTiposInversion);

module.exports = router;