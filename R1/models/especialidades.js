const mongoose = require('mongoose');

const especialidadSchema = new mongoose.Schema({
    nombre: String,
    descripcion: String
});

const Especialidad = mongoose.model('Especialidad', especialidadSchema);

module.exports = Especialidad;
