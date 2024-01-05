const ContratosInversionDAO = require('../dao/ContratosInversionDAO');
const { ContratosInversion } = require('../models');
const { Op } = require("sequelize");

jest.mock('../models', () => {
    return {
        ContratosInversion: {
            create: jest.fn(),
            update: jest.fn(),
            findOne: jest.fn(),
            findByPk: jest.fn(),
            findAll: jest.fn(),
        }
    };
});

describe('ContratosInversionDAO', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('crear un contrato de inversión', async () => {
        const mockContrato = { idInversionista: 1, monto: 1000 };
        await ContratosInversionDAO.crearContratoInversion(mockContrato);
        expect(ContratosInversion.create).toHaveBeenCalledWith(mockContrato);
    });

    it('editar un contrato de inversión', async () => {
        const mockContrato = { idInversionista: 1, monto: 2000 };
        await ContratosInversionDAO.editarContratoInversionista(mockContrato);
        expect(ContratosInversion.update).toHaveBeenCalledWith(mockContrato, { where: { idInversionista: mockContrato.idInversionista }, returning: true, plain: true });
    });

    it('obtener un contrato de inversión por IP', async () => {
        const mockIp = '192.168.0.1';
        await ContratosInversionDAO.obtenerContratoInversionistaPorIP(mockIp);
        expect(ContratosInversion.findOne).toHaveBeenCalledWith({ where: { direccionIp: mockIp, estado: { [Op.ne]: 'FINALIZADO' } } });
    });

    it('agregar verificaciones SMS', async () => {
        const mockId = 1;
        await ContratosInversionDAO.agregarVerificacionesSms(mockId);
        expect(ContratosInversion.update).toHaveBeenCalledWith({ smsVerificacion: true }, { where: { idInversionista: mockId }, returning: true, plain: true });
    });

    it('agregar verificaciones de correo', async () => {
        const mockId = 1;
        await ContratosInversionDAO.agregarVerificacionesCorreo(mockId);
        expect(ContratosInversion.update).toHaveBeenCalledWith({ correoVerificacion: true }, { where: { idInversionista: mockId }, returning: true, plain: true });
    });

    it('encontrar contratos de inversión por folio', async () => {
        const mockFolio = '123ABC';
        await ContratosInversionDAO.encontrarContratosInversionFolio(mockFolio);
        expect(ContratosInversion.findByPk).toHaveBeenCalledWith(mockFolio);
    });

    it('encontrar contratos de inversión finalizados', async () => {
        await ContratosInversionDAO.encontrarContratosInversion();
        expect(ContratosInversion.findAll).toHaveBeenCalledWith({ where: { estado: "FINALIZADO" } });
    });
});