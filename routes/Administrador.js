const {Router} = require('express');
const {credencialesAcceso} = require('../controllers/CredencialesAdministrador');
const {
    anadirBanco,
    obtenerBancos,
    editarBanco,
    eliminarBanco
} = require('../controllers/Bancos');
const{
    anadirDocumentoExpedienteInversionista,
    encontrarDocumentosExpedienteInversionista,
    editarDocumentoExpedienteInversionista,
    eliminarDocumentoExpedienteInversionista
} = require('../controllers/DocumentosExpedienteInversionistas');
const {
    anadirOrigenInversion,
    obtenerOrigenesInversion,
    editarOrigenInversion,
    eliminarOrigenInversion
} = require('../controllers/OrigenesInversion');
const {
    anadirTipoInversion,
    obtenerTiposInversion,
    editarTipoInversion,
    eliminarTipoInversion
} = require('../controllers/TiposInversion');
const {validarJWT} = require('../middlewares/validarJWT');
const router = Router();

router.post('/login', credencialesAcceso);
router.post('/bancos', [validarJWT], anadirBanco);
router.get('/bancos', [validarJWT], obtenerBancos);
router.put('/bancos/:id', [validarJWT], editarBanco);
router.delete('/bancos/:id', [validarJWT], eliminarBanco);
router.post('/documentosExpediente', [validarJWT], anadirDocumentoExpedienteInversionista);
router.get('/documentosExpediente', [validarJWT], encontrarDocumentosExpedienteInversionista);
router.put('/documentosExpediente/:id', [validarJWT], editarDocumentoExpedienteInversionista);
router.delete('/documentosExpediente/:id', [validarJWT], eliminarDocumentoExpedienteInversionista);
router.post('/origenesInversion', [validarJWT], anadirOrigenInversion);
router.get('/origenesInversion', [validarJWT], obtenerOrigenesInversion);
router.put('/origenesInversion/:id', [validarJWT], editarOrigenInversion);
router.delete('/origenesInversion/:id', [validarJWT], eliminarOrigenInversion);
router.post('/tiposInversion', [validarJWT], anadirTipoInversion);
router.get('/tiposInversion', [validarJWT], obtenerTiposInversion);
router.put('/tiposInversion/:id', [validarJWT], editarTipoInversion);
router.delete('/tiposInversion/:id', [validarJWT], eliminarTipoInversion);
module.exports = router;