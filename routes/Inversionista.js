const {Router} = require('express');
const {
    anadirInformacionPersonalInversionista,
    anadirInformacionDomicilioInversionista
    } = require('../controllers/Inversionista');
const router = Router();
const {validarJWT} = require('../middlewares/validarJWT-inversionista');

router.post('/informacionPersonal', anadirInformacionPersonalInversionista);
router.put('/informacionDomicilio/:idInversionista', [validarJWT],anadirInformacionDomicilioInversionista);

module.exports = router;