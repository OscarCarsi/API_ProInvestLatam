const TiposInversionDAO = require('../dao/TiposInversionDAO');
const { TiposInversion, sequelize } = require('../models');

jest.mock('../models', () => {
    return {
        TiposInversion: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            destroy: jest.fn(),
        },
        sequelize: {
            query: jest.fn(),
        }
    };
});

describe('TiposInversionDAO', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('crear un tipo de inversión', async () => {
        const mockTipoInversion = { idTipo: 1, nombre: 'Tipo1' };
        await TiposInversionDAO.crearTipoInversion(mockTipoInversion);
        expect(TiposInversion.create).toHaveBeenCalledWith(mockTipoInversion);
    });

    it('encontrar todos los tipos de inversión', async () => {
        await TiposInversionDAO.encontrarTiposInversion();
        expect(sequelize.query).toHaveBeenCalledWith('EXEC BorrarContratos');
        expect(TiposInversion.findAll).toHaveBeenCalled();
    });

    it('encontrar un tipo de inversión por nombre', async () => {
        const mockNombre = 'Tipo1';
        await TiposInversionDAO.encontrarTipoInversionPorNombre(mockNombre);
        expect(TiposInversion.findOne).toHaveBeenCalledWith({ where: { nombre: mockNombre } });
    });

    it('editar un tipo de inversión', async () => {
        const mockTipoInversion = { idTipo: 1, nombre: 'Tipo1' };
        await TiposInversionDAO.editarTipoInversion(mockTipoInversion);
        expect(TiposInversion.update).toHaveBeenCalledWith(mockTipoInversion, { where: { idTipo: mockTipoInversion.idTipo }, returning: true, plain: true });
    });

    it('eliminar un tipo de inversión', async () => {
        const mockId = 1;
        await TiposInversionDAO.eliminarTipoInversion(mockId);
        expect(TiposInversion.destroy).toHaveBeenCalledWith({ where: { idTipo: mockId } });
    });

    it('encontrar un tipo de inversión', async () => {
        const mockTipoInversion = { idTipo: 1, nombre: 'Tipo1' };
        await TiposInversionDAO.encontrarTipoInversion(mockTipoInversion);
        expect(TiposInversion.findOne).toHaveBeenCalledWith(mockTipoInversion);
    });
});