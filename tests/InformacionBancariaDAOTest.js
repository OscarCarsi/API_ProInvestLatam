const InformacionBancariaDAO = require('../dao/InformacionBancariaDAO');
const { InformacionBancaria } = require('../models');

jest.mock('../models', () => {
    return {
        InformacionBancaria: {
            create: jest.fn(),
            findByPk: jest.fn(),
        }
    };
});

describe('InformacionBancariaDAO', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('crear información bancaria', async () => {
        const mockInformacionBancaria = { folioInversion: 1, banco: 'Banco1', cuenta: 'Cuenta1' };
        await InformacionBancariaDAO.crearInformacionBancaria(mockInformacionBancaria);
        expect(InformacionBancaria.create).toHaveBeenCalledWith(mockInformacionBancaria);
    });

    it('encontrar información bancaria por folio', async () => {
        const mockFolio = 1;
        await InformacionBancariaDAO.encontrarInformacionBancariaFolio(mockFolio);
        expect(InformacionBancaria.findByPk).toHaveBeenCalledWith(mockFolio);
    });
});