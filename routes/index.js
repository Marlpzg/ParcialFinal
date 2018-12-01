var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Goleador = require('../models/Goleador');

/* GET home page. */
router.get('/', function(req, res, next) {
  Goleador.find({})
  .exec().then((resultado) => {
      console.log(resultado);
      res.render('index', { title: 'Administrador de Goleadores', resultados: resultado, mensaje: false});
  })
  
});

module.exports = router;
