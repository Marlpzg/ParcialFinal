const midGoleador = {};
const mongoose = require('mongoose');
const Goleador = require('../models/Goleador');

midGoleador.add = async function (req, res, next) {


    let jugador = new Goleador({
        _id: new mongoose.Types.ObjectId(),
        jugador: req.body.jugador,
        anio: req.body.anio,
        goles: req.body.goles
    });

    jugador.save().then((result) => {
        console.log(result);
        return res.status(200).redirect('/');
    }).catch((err) => {
        return res.status(500).redirect('/');
    });
}

midGoleador.del = async function (req, res, next) {

    Goleador.findOneAndDelete({_id: mongoose.Types.ObjectId(req.params.id)}, (err, resultado) => {
        if(err){
            console.log(err);
            return res.status(500).redirect('/');
        }else{
            console.log(resultado);
            return res.status(200).redirect('/');
        }
    })
}

midGoleador.upd = async function (req, res, next) {
    let update = {};

    if(req.body.jugador){
        update.jugador = req.body.jugador;
    }

    if(req.body.anio){
        update.anio = req.body.anio;
    }

    if(req.body.goles){
        update.goles = req.body.goles;
    }

    Goleador.findOneAndUpdate({_id: mongoose.Types.ObjectId(req.params.id)}, update, (err, resultado) => {
        if(err){
            return res.status(500).redirect('/');
        }else{
            console.log(resultado);
            return res.status(200).redirect('/');
        }
    })
}

module.exports = midGoleador;