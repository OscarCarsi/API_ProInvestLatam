const { response } = require('express');
const origenesInversionDAO = require('../dao/OrigenesInversionDAO');
const {generarJWT} = require('../helpers/crear-jwt-inversionista');

const anadirOrigenInversion = async (req, res = response) => {
    const { nombre } = req.body;
    try {
        const origenInversionExiste = await origenesInversionDAO.encontrarOrigenesInversionPorNombre(nombre);
        if (origenInversionExiste) {
            return res.status(400).json({ message: "El origen de inversión ya existe" });
        }
        else {
            const origenInversion = await origenesInversionDAO.crearOrigenInversion({ nombreOrigen: nombre });
            res.status(201).json(origenInversion);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "No se pudo agregar el origen de inversión", error });
    }
}

const obtenerOrigenesInversion = async (req, res = response) => {
    try {
        const direccionIp = req.body;
        const origenesInversion = await origenesInversionDAO.encontrarOrigenesInversion();
        const token = await generarJWT(direccionIp);
        res.status(200).json({ origenesInversion, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "No se pudo obtener los origenes de inversión", error });
    }
}

const editarOrigenInversion = async (req, res = response) => {
    const { id } = req.params;
    const { nombre } = req.body;
    try {
        const origenInversionExiste = await origenesInversionDAO.encontrarOrigenesInversionPorNombre(nombre);
        const origenInversionEditar = { idOrigen: id, nombreOrigen: nombre };
        const origenInversionEditado = await origenesInversionDAO.editarOrigenInversion(origenInversionEditar);
        res.status(200).json(origenInversionEditado);


    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "No se pudo editar el origen de inversión", error });
    }
}

const eliminarOrigenInversion = async (req, res = response) => {
    const { id } = req.params;
    try {
        await origenesInversionDAO.eliminarOrigenInversion(id);
        res.status(200).json({ message: 'Origen de inversión eliminado' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "No se pudo eliminar el origen de inversión", error });
    }
}

module.exports = {
    anadirOrigenInversion,
    obtenerOrigenesInversion,
    editarOrigenInversion,
    eliminarOrigenInversion
}