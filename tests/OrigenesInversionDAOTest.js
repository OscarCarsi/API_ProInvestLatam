const OrigenesInversionDAO = require('../dao/OrigenesInversionDAO');
const { OrigenesInversion } = require('../models');

jest.mock('../models', () => {
    return {
        OrigenesInversion: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            destroy: jest.fn(),
        }
    };
});

describe('OrigenesInversionDAO', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('crear un origen de inversión', async () => {
        const mockOrigen = { idOrigen: 1, nombreOrigen: 'Origen1' };
        await OrigenesInversionDAO.crearOrigenInversion(mockOrigen);
        expect(OrigenesInversion.create).toHaveBeenCalledWith(mockOrigen);
    });

    it('encontrar todos los orígenes de inversión', async () => {
        await OrigenesInversionDAO.encontrarOrigenesInversion();
        expect(OrigenesInversion.findAll).toHaveBeenCalled();
    });

    it('encontrar un origen de inversión por nombre', async () => {
        const mockNombre = 'Origen1';
        await OrigenesInversionDAO.encontrarOrigenesInversionPorNombre(mockNombre);
        expect(OrigenesInversion.findOne).toHaveBeenCalledWith({ where: { nombreOrigen: mockNombre } });
    });

    it('editar un origen de inversión', async () => {
        const mockOrigen = { idOrigen: 1, nombreOrigen: 'Origen1' };
        await OrigenesInversionDAO.editarOrigenInversion(mockOrigen);
        expect(OrigenesInversion.update).toHaveBeenCalledWith(mockOrigen, { where: { idOrigen: mockOrigen.idOrigen }, returning: true, plain: true });
    });

    it('eliminar un origen de inversión', async () => {
        const mockId = 1;
        await OrigenesInversionDAO.eliminarOrigenInversion(mockId);
        expect(OrigenesInversion.destroy).toHaveBeenCalledWith({ where: { idOrigen: mockId } });
    });
});