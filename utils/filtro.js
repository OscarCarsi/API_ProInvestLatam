/**
 * Archivo para reducir la estructura del archivo direcciones.xml proporcionado por la Sepomex
 */
const fs = require('fs');
const xml2js = require('xml2js');
const path = require('path');

const xmlFilePath = path.join(__dirname, 'direcciones.xml');
const archivoEntrada = xmlFilePath;
const archivoSalida = 'direccionesMin.xml';

function procesarArchivoXML() {
  // Leer el archivo XML
  fs.readFile(archivoEntrada, 'utf-8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo XML:', err);
      return;
    }

    // Parsear el XML a un objeto JavaScript
    xml2js.parseString(data, (err, result) => {
      if (err) {
        console.error('Error al parsear el XML:', err);
        return;
      }
      console.log(result);

      // Filtrar los campos deseados
      const datosFiltrados = result?.NewDataSet?.table?.map(item => ({
        d_codigo: item.d_codigo[0],
        d_asenta: item.d_asenta[0],
        D_mnpio: item.D_mnpio[0],
        d_estado: item.d_estado[0],
      }));

      // Construir un nuevo objeto con la estructura deseada
      const nuevoObjeto = {
        NewDataSet: {
          Table: datosFiltrados.map(item => ({
            $: { xmlns: 'NewDataSet' },
            d_codigo: item.d_codigo,
            d_asenta: item.d_asenta,
            D_mnpio: item.D_mnpio,
            d_estado: item.d_estado,
          })),
        },
      };

      // Convertir el objeto a XML
      const builder = new xml2js.Builder();
      const nuevoXml = builder.buildObject(nuevoObjeto);

      // Escribir el nuevo archivo XML
      fs.writeFile(archivoSalida, nuevoXml, 'utf-8', err => {
        if (err) {
          console.error('Error al escribir el nuevo archivo XML:', err);
        } else {
          console.log('Nuevo archivo XML creado con éxito:', archivoSalida);
        }
      });
    });
  });
}

// Ejecutar la función de procesamiento
procesarArchivoXML();
