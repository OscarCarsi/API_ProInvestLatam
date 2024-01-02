const { response } = require('express');
const bancosDAO = require('../dao/BancosDAO');

const anadirBanco = async (req, res = response) => {
    const { nombre } = req.body;
    try {
        const bancoExiste = await bancosDAO.encontrarBancoPorNombre(nombre);
        if (bancoExiste) {
            return res.status(400).json({ message: "El banco ya existe" });
        }
        else {
            const banco = await bancosDAO.crearBanco({ banco: nombre });
            res.status(201).json(banco);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "No se pudo agregar el banco", error });
    }
}

const obtenerBancos = async (req, res = response) => {
    try {
        const bancos = await bancosDAO.encontrarBancos();
        res.status(200).json(bancos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "No se pudo obtener los bancos", error });
    }
}

const editarBanco = async (req, res = response) => {
    const { id } = req.params;
    const { nombre } = req.body;
    try {
        const bancoExiste = await bancosDAO.encontrarBancoPorNombre(nombre);
        const bancoEditar = { id, banco: nombre };
        const bancoEditado = await bancosDAO.editarBanco(bancoEditar);
        res.status(200).json(bancoEditado);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "No se pudo editar el banco", error });
    }
}
const eliminarBanco = async (req, res = response) => {
    const { id } = req.params;
    try {
        await bancosDAO.eliminarBanco(id);
        res.status(200).json({ message: 'Banco eliminado' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "No se pudo eliminar el banco", error });
    }
}



module.exports = {
    anadirBanco,
    obtenerBancos,
    editarBanco,
    eliminarBanco
}