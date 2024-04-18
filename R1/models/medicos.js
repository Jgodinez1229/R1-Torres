const mongoose = require('mongoose');

const medicoSchema = new mongoose.Schema({
    nombre: String,
    especialidades: String,
    horario: String,
    citas_maximas_por_dia: Number
});

const Medico = mongoose.model('Medico', medicoSchema);

module.exports = Medico;
