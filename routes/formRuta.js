const {Router} = require('express');
const { getpersona, postpersona } = require('../Controller/personaController');

const router = Router();

router.get('/mostar', getpersona);

router.post('/agregar', postpersona);

module.exports = router;