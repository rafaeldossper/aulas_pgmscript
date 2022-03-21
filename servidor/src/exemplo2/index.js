const {mes,dia} = require('./c');
const router = require('express').Router();
router.get('/mes',(req,res) => res.send(mes));
router.get('/dia',(req,res) => res.send(dia));

module.exports = router;
