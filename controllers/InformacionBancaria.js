const {response} = require('express');
const informacionBancariaDAO = require('../dao/InformacionBancariaDAO');

const crearInformacionBancaria = async (req, res = response) => {
    const {folioInversion} = req.params;
    const {idBanco, cuenta, clabeInterbancaria} = req.body;
    try {
        const informacionBancariaNuevo = {folioInversion, idBanco, cuenta, clabeInterbancaria};
        const informacionBancaria = await informacionBancariaDAO.crearInformacionBancaria(informacionBancariaNuevo);
        res.status(201).json(informacionBancaria);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "No se pudo crear la información bancaria", error});
    }
}

const encontrarInformacionBancariaFolioInversion = async (req, res = response) => {
    const {folioInversion} = req.params;
    try {
        const informacionBancaria = await informacionBancariaDAO.encontrarInformacionBancariaFolio(folioInversion);
        res.status(200).json(informacionBancaria);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "No se pudo obtener la información bancaria", error});
    }
}
module.exports = {
    crearInformacionBancaria,
    encontrarInformacionBancariaFolioInversion
}