const Matematica = require('./a');
const pow = require('./b');
const express = require('express');
const router = express.Router();
router.get('/pow',pow);
const {somar,subtrair} = new Matematica();
router.get('/sum', somar);
router.get('/diff', subtrair);


module.exports = router;
