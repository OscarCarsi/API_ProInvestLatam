const {Router} = require('express');
const {credencialesAcceso} = require('../controllers/CredencialesAdministrador');
const {
    anadirBanco,
    obtenerBancos,
    editarBanco
} = require('../controllers/Bancos');
const{
    anadirDocumentoExpedienteInversionista,
    encontrarDocumentosExpedienteInversionista,
    editarDocumentoExpedienteInversionista
} = require('../controllers/DocumentosExpedienteInversionistas');
const {
    anadirOrigenInversion,
    obtenerOrigenesInversion,
    editarOrigenInversion
} = require('../controllers/OrigenesInversion');
const {
    anadirTipoInversion,
    obtenerTiposInversion,
    editarTipoInversion
} = require('../controllers/TiposInversion');
const {validarJWT} = require('../middlewares/validarJWT');
const router = Router();

router.post('/login', credencialesAcceso);
router.post('/bancos', [validarJWT], anadirBanco);
router.get('/bancos', [validarJWT], obtenerBancos);
router.put('/bancos/:id', [validarJWT], editarBanco);
router.post('/documentosExpediente', [validarJWT], anadirDocumentoExpedienteInversionista);
router.get('/documentosExpediente', [validarJWT], encontrarDocumentosExpedienteInversionista);
router.put('/documentosExpediente/:id', [validarJWT], editarDocumentoExpedienteInversionista);
router.post('/origenesInversion', [validarJWT], anadirOrigenInversion);
router.get('/origenesInversion', [validarJWT], obtenerOrigenesInversion);
router.put('/origenesInversion/:id', [validarJWT], editarOrigenInversion);
router.post('/tiposInversion', [validarJWT], anadirTipoInversion);
router.get('/tiposInversion', [validarJWT], obtenerTiposInversion);
router.put('/tiposInversion/:id', [validarJWT], editarTipoInversion);
module.exports = router;