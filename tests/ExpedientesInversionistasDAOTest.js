const ExpedientesInversionistasDAO = require('../dao/ExpedientesInversionistasDAO');
const { ExpedientesInversionistas } = require('../models');

jest.mock('../models', () => {
    return {
        ExpedientesInversionistas: {
            create: jest.fn(),
            findOne: jest.fn(),
        }
    };
});

describe('ExpedientesInversionistasDAO', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('crear un expediente de inversionista', async () => {
        const mockExpediente = { idDocumento: 1, idInversionista: 1 };
        await ExpedientesInversionistasDAO.crearExpedienteInversionista(mockExpediente);
        expect(ExpedientesInversionistas.create).toHaveBeenCalledWith(mockExpediente);
    });

    it('encontrar un expediente de inversionista por idDocumento e idInversionista', async () => {
        const mockIdDocumento = 1;
        const mockIdInversionista = 1;
        await ExpedientesInversionistasDAO.encontrarExpedientesInversionistasIdDocumentoIdInversionista(mockIdDocumento, mockIdInversionista);
        expect(ExpedientesInversionistas.findOne).toHaveBeenCalledWith({
            where: {
                idDocumento: mockIdDocumento,
                idInversionista: mockIdInversionista
            }
        });
    });
});