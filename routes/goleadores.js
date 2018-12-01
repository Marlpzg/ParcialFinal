var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Goleador = require('../models/Goleador');
const midGoleador = require('../controllers/controllerGoleador');

router.get('/:id', async function(req, res, next) {

    Goleador.findOne({_id: mongoose.Types.ObjectId(req.params.id)})
    .exec().then((resultado) => {
        console.log(resultado);
        return res.render('goleador', { title: 'Datos del goleador', resultados: resultado});
    })

});

router.post('/:id/del', midGoleador.del);

router.post('/:id/upd', midGoleador.upd);

router.post('/', midGoleador.add);

module.exports = router;
