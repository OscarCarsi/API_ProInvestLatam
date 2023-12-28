const xmlLoader = require('../utils/xmlLoader');
const todasLasColonias = xmlLoader.obtenerTodasLasColonias();
class DireccionesDAO{
    static obtenerColoniasPorCodigoPostal(codigoPostal){
        return todasLasColonias.filter(item => item.d_codigo === codigoPostal);
    }

    static obtenerColoniasPorEstado(estado){
        return todasLasColonias.filter(item => item.d_estado === estado);
    }

    static obtenerNombresColoniasPorCodigoPostal(codigoPostal){
        const colonias = todasLasColonias.filter(item => item.d_codigo === codigoPostal);
        return colonias.map(colonia => colonia.d_asenta);
    }

    static obtenerColoniasPorMunicipio(municipio){
        return todasLasColonias.filter(item => item.D_mnpio === municipio);
    }

    static obtenerMunicipiosPorEstado(estado){
        const colonias = todasLasColonias.filter(item => item.d_estado === estado);
        const municipiosConRepetidos = colonias.map(colonia => colonia.D_mnpio);
        const municipiosUnicos = municipiosConRepetidos.filter((nombre, index, array) => {
            return array.indexOf(nombre) === index;
        });
        return municipiosUnicos;
    }

    static obtenerEstados(){
        const nombresEstados = todasLasColonias.map(colonia => colonia.d_estado);
        const estadosUnicos = [...new Set(nombresEstados)];
        return estadosUnicos.sort();
    }

    static obtenerCodigoPostalPorColonia(colonia){
        return todasLasColonias.filter(item => item.d_asenta === colonia).map(resultado => resultado.d_codigo);
    }

}

module.exports = DireccionesDAO;
