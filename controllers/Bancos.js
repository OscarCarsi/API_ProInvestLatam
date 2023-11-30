const {response} = require('express');
const bancosDAO = require('../dao/BancosDAO');

const añadirBanco = async (req, res = response) => {
    const {nombre} = req.body;
    try {
        const banco = await bancosDAO.crearBanco({nombre});
        res.status(201).json(banco);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "No se pudo agregar el banco", error});
    }
}

const obtenerBancos = async (req, res = response) => {
    try {
        const bancos = await bancosDAO.encontrarBancos();
        res.status(200).json(bancos);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "No se pudo obtener los bancos", error});
    }
}

module.exports = {
    añadirBanco,
    obtenerBancos
}