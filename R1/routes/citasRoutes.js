const express = require('express');
const router = express.Router();
const Cita = require('../models/citas');

// Obtener todas las citas
router.get('/', async (req, res) => {
    try {
        const citas = await Cita.find();
        res.json(citas);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Crear una nueva cita
router.post('/', async (req, res) => {
    const cita = new Cita({
        fecha: req.body.fecha,
        hora: req.body.hora,
        paciente: req.body.paciente,
        medico: req.body.medico,
        especialidad: req.body.especialidad,
        estado: req.body.estado
    });

    try {
        const nuevaCita = await cita.save();
        res.status(201).json(nuevaCita);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Otros endpoints para actualizar y eliminar citas...
// Eliminar una cita por ID
router.delete('/:id', async (req, res) => {
    try {
        const citaEliminada = await Cita.findByIdAndDelete(req.params.id);
        if (!citaEliminada) {
            return res.status(404).json({ message: 'Cita no encontrada' });
        }
        res.json({ message: 'Cita eliminada correctamente', cita: citaEliminada });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Actualizar una cita por ID
router.put('/:id', async (req, res) => {
    try {
        const citaActualizada = await Cita.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!citaActualizada) {
            return res.status(404).json({ message: 'Cita no encontrada' });
        }
        res.json({ message: 'Cita actualizada correctamente', cita: citaActualizada });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


module.exports = router;
