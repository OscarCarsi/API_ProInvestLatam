const DireccionesDAO = require('../dao/DireccionesDAO');
const xmlLoader = require('../utils/xmlLoader');

jest.mock('../utils/xmlLoader', () => {
    return {
        obtenerTodasLasColonias: jest.fn(() => [
            { CodigoPostal: '12345', Estado: 'Estado1', Colonia: 'Colonia1', Municipio: 'Municipio1' },
            { CodigoPostal: '12345', Estado: 'Estado1', Colonia: 'Colonia2', Municipio: 'Municipio1' },
            { CodigoPostal: '67890', Estado: 'Estado2', Colonia: 'Colonia3', Municipio: 'Municipio2' },
        ]),
    };
});

describe('DireccionesDAO', () => {
    it('obtener colonias por código postal', () => {
        const colonias = DireccionesDAO.obtenerColoniasPorCodigoPostal('12345');
        expect(colonias).toEqual([
            { CodigoPostal: '12345', Estado: 'Estado1', Colonia: 'Colonia1', Municipio: 'Municipio1' },
            { CodigoPostal: '12345', Estado: 'Estado1', Colonia: 'Colonia2', Municipio: 'Municipio1' },
        ]);
    });

    it('obtener colonias por estado', () => {
        const colonias = DireccionesDAO.obtenerColoniasPorEstado('Estado1');
        expect(colonias).toEqual([
            { CodigoPostal: '12345', Estado: 'Estado1', Colonia: 'Colonia1', Municipio: 'Municipio1' },
            { CodigoPostal: '12345', Estado: 'Estado1', Colonia: 'Colonia2', Municipio: 'Municipio1' },
        ]);
    });

    it('obtener nombres de colonias por código postal', () => {
        const nombresColonias = DireccionesDAO.obtenerNombresColoniasPorCodigoPostal('12345');
        expect(nombresColonias).toEqual(['Colonia1', 'Colonia2']);
    });

    it('obtener colonias por municipio', () => {
        const colonias = DireccionesDAO.obtenerColoniasPorMunicipio('Municipio1');
        expect(colonias).toEqual([
            { CodigoPostal: '12345', Estado: 'Estado1', Colonia: 'Colonia1', Municipio: 'Municipio1' },
            { CodigoPostal: '12345', Estado: 'Estado1', Colonia: 'Colonia2', Municipio: 'Municipio1' },
        ]);
    });

    it('obtener municipios por estado', () => {
        const municipios = DireccionesDAO.obtenerMunicipiosPorEstado('Estado1');
        expect(municipios).toEqual(['Municipio1']);
    });

    it('obtener estados', () => {
        const estados = DireccionesDAO.obtenerEstados();
        expect(estados).toEqual(['Estado1', 'Estado2']);
    });

    it('obtener código postal por colonia', () => {
        const codigosPostales = DireccionesDAO.obtenerCodigoPostalPorColonia('Colonia1');
        expect(codigosPostales).toEqual(['12345']);
    });
});