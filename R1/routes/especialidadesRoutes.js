const express = require('express');
const router = express.Router();
const Especialidad = require('../models/especialidades');

// Obtener todas las especialidades
router.get('/', async (req, res) => {
    try {
        const especialidades = await Especialidad.find();
        res.json(especialidades);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Crear una nueva especialidad
router.post('/', async (req, res) => {
    const especialidad = new Especialidad({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion
    });

    try {
        const nuevaEspecialidad = await especialidad.save();
        res.status(201).json(nuevaEspecialidad);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Eliminar una especialidad por ID
router.delete('/:id', async (req, res) => {
    try {
        const especialidadEliminada = await Especialidad.findByIdAndDelete(req.params.id);
        if (!especialidadEliminada) {
            return res.status(404).json({ message: 'Especialidad no encontrada' });
        }
        res.json({ message: 'Especialidad eliminada correctamente', especialidad: especialidadEliminada });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Actualizar una especialidad por ID
router.put('/:id', async (req, res) => {
    try {
        const especialidadActualizada = await Especialidad.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!especialidadActualizada) {
            return res.status(404).json({ message: 'Especialidad no encontrada' });
        }
        res.json({ message: 'Especialidad actualizada correctamente', especialidad: especialidadActualizada });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


module.exports = router;
