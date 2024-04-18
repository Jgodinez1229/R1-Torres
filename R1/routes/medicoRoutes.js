const express = require('express');
const router = express.Router();
const Medico = require('../models/medicos');

// Obtener todos los médicos
router.get('/', async (req, res) => {
    try {
        const medicos = await Medico.find();
        res.json(medicos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Crear un nuevo médico
router.post('/', async (req, res) => {
    const medico = new Medico({
        nombre: req.body.nombre,
        especialidades: req.body.especialidades,
        horario: req.body.horario,
        citas_maximas_por_dia: req.body.citas_maximas_por_dia
    });

    try {
        const nuevoMedico = await medico.save();
        res.status(201).json(nuevoMedico);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


// Eliminar un médico por ID
router.delete('/:id', async (req, res) => {
    try {
        const medicoEliminado = await Medico.findByIdAndDelete(req.params.id);
        if (!medicoEliminado) {
            return res.status(404).json({ message: 'Médico no encontrado' });
        }
        res.json({ message: 'Médico eliminado correctamente', medico: medicoEliminado });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Actualizar un médico por ID
router.put('/:id', async (req, res) => {
    try {
        const medicoActualizado = await Medico.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!medicoActualizado) {
            return res.status(404).json({ message: 'Médico no encontrado' });
        }
        res.json({ message: 'Médico actualizado correctamente', medico: medicoActualizado });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



module.exports = router;
