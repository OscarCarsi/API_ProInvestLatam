const fs = require('fs');
const path = require('path');
const xml2js = require('xml2js');

let datosEnMemoria = [];
const xmlFilePath = path.join(__dirname, 'direccionesMin.xml');

function cargarDatosDesdeXML() {
  const xmlData = fs.readFileSync(xmlFilePath, 'utf-8');

  xml2js.parseString(xmlData, { explicitArray: false }, (err, result) => {
    if (err) {
      console.error('Error al parsear el XML:', err);
      return;
    }

    // Asegurarse de que datosEnMemoria es un array incluso si hay un solo elemento
    datosEnMemoria = Array.isArray(result.NewDataSet.Table)
      ? result.NewDataSet.Table
      : [result.NewDataSet.Table];

    console.log('Datos cargados en memoria.');
  });
}

function obtenerTodasLasColonias() {
  return datosEnMemoria;
}

module.exports = {
  cargarDatosDesdeXML,
  obtenerTodasLasColonias,
};
