const { Router }     = require('express');
const { check }      = require('express-validator');
const router         = Router();
const { validarJWT } = require('../middlewares');
const WebController  = require('../controllers/WebController');

router.get('/', WebController.getindex);
router.get('/internal/login', WebController.getLogin);
router.get('/internal/messages', [validarJWT], WebController.getMessages);

module.exports=router;