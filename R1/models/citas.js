const mongoose = require('mongoose');

const citaSchema = new mongoose.Schema({
    fecha: String,
    hora: String,
    paciente: String,
    medico: String,
    especialidad: String,
    estado: String 
});

const Cita = mongoose.model('Cita', citaSchema);

module.exports = Cita;
