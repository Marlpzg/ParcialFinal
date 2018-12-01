const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Goleador = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    jugador: {type: String, required: true},
    anio: {type: mongoose.Schema.Types.Number, required: true},
    goles: {type: mongoose.Schema.Types.Number, required: true}
});

module.exports = mongoose.model('Goleador', Goleador);