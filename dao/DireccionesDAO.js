const xmlLoader = require('../utils/xmlLoader');
const todasLasColonias = xmlLoader.obtenerTodasLasColonias();
class DireccionesDAO{
    static obtenerColoniasPorCodigoPostal(codigoPostal){
        return todasLasColonias.filter(item => item.CodigoPostal === codigoPostal);
    }

    static obtenerColoniasPorEstado(estado){
        return todasLasColonias.filter(item => item.Estado === estado);
    }

    static obtenerNombresColoniasPorCodigoPostal(codigoPostal){
        const colonias = todasLasColonias.filter(item => item.CodigoPostal === codigoPostal);
        return colonias.map(colonia => colonia.Colonia);
    }

    static obtenerColoniasPorMunicipio(municipio){
        return todasLasColonias.filter(item => item.Municipio === municipio);
    }

    static obtenerMunicipiosPorEstado(estado){
        const colonias = todasLasColonias.filter(item => item.Estado === estado);
        const municipiosConRepetidos = colonias.map(colonia => colonia.Municipio);
        const municipiosUnicos = municipiosConRepetidos.filter((nombre, index, array) => {
            return array.indexOf(nombre) === index;
        });
        return municipiosUnicos;
    }

    static obtenerEstados(){
        const nombresEstados = todasLasColonias.map(colonia => colonia.Estado);
        const estadosUnicos = [...new Set(nombresEstados)];
        return estadosUnicos.sort();
    }

    static obtenerCodigoPostalPorColonia(colonia){
        return todasLasColonias.filter(item => item.Colonia === colonia).map(resultado => resultado.CodigoPostal);
    }

}

module.exports = DireccionesDAO;
