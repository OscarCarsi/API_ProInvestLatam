const {Router} = require('express');
const {credencialesAcceso} = require('../controllers/CredencialesAdministrador');
const {
    anadirBanco,
    obtenerBancos,
    editarBanco
} = require('../controllers/Bancos');
const{
    anadirDocumentoExpedienteInversionista,
    obtenerDocumentosExpedienteInversionista,
    editarDocumentoExpedienteInversionista
} = require('../controllers/DocumentosExpedienteInversionista');
const {
    anadirOrigenesInversion,
    obtenerOrigenesInversion,
    editarOrigenesInversion
} = require('../controllers/OrigenesInversion');
const {
    anadirTipoInversion,
    obtenerTiposInversion,
    editarTipoInversion
} = require('../controllers/TipoInversion');
const {validarJWT} = require('../middlewares/validarJWT');
const router = express.Router();

router.post('/login', credencialesAcceso);
router.post('/bancos', [validarJWT], anadirBanco);
router.get('/bancos', [validarJWT], obtenerBancos);
router.put('/bancos/:id', [validarJWT], editarBanco);
router.post('/documentosExpediente', [validarJWT], anadirDocumentoExpedienteInversionista);
router.get('/documentosExpediente', [validarJWT], obtenerDocumentosExpedienteInversionista);
router.put('/documentosExpediente/:id', [validarJWT], editarDocumentoExpedienteInversionista);
router.post('/origenesInversion', [validarJWT], anadirOrigenesInversion);
router.get('/origenesInversion', [validarJWT], obtenerOrigenesInversion);
router.put('/origenesInversion/:id', [validarJWT], editarOrigenesInversion);
router.post('/tiposInversion', [validarJWT], anadirTipoInversion);
router.get('/tiposInversion', [validarJWT], obtenerTiposInversion);
router.put('/tiposInversion/:id', [validarJWT], editarTipoInversion);