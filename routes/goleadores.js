var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Goleador = require('../models/Goleador');

router.get('/', async function(req, res, next) {
  /*
    Goleador.find({})
    .exec().then((resultado) => {
        console.log(resultado);
        return res.status(200).json({resultados: resultado});
    })
*/
});

router.post('/add', function(req, res, next){
    let jugador = new Goleador({
        _id: new mongoose.Types.ObjectId(),
        jugador: req.body.jugador,
        anio: req.body.anio,
        goles: req.body.goles
    });

    jugador.save().then((result) => {
        console.log(result);
        return res.redirect('/');
    }).catch((err) => {
        console.log(err);
    });
});

module.exports = router;
