const DocumentosExpedienteInversionistaDAO = require('../dao/DocumentosExpedienteInversionistaDAO');
const { DocumentosExpedienteInversionista } = require('../models');

jest.mock('../models', () => {
    return {
        DocumentosExpedienteInversionista: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            destroy: jest.fn(),
        }
    };
});

describe('DocumentosExpedienteInversionistaDAO', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('crear un expediente de inversionista', async () => {
        const mockDocumento = { idDocumento: 1, nombreDocumento: 'Documento1' };
        await DocumentosExpedienteInversionistaDAO.crearDocumentoExpedienteInversionista(mockDocumento);
        expect(DocumentosExpedienteInversionista.create).toHaveBeenCalledWith(mockDocumento);
    });

    it('encontrar todos los expediente de inversionista', async () => {
        await DocumentosExpedienteInversionistaDAO.encontrarDocumentosExpedienteInversionista();
        expect(DocumentosExpedienteInversionista.findAll).toHaveBeenCalled();
    });

    it('encontrar un expediente de inversionista por nombre', async () => {
        const mockNombre = 'Documento1';
        await DocumentosExpedienteInversionistaDAO.encontrarDocumentoExpedienteInversionistaPorNombre(mockNombre);
        expect(DocumentosExpedienteInversionista.findOne).toHaveBeenCalledWith({ where: { nombreDocumento: mockNombre } });
    });

    it('editar un expediente de inversionista', async () => {
        const mockDocumento = { idDocumento: 1, nombreDocumento: 'Documento1' };
        await DocumentosExpedienteInversionistaDAO.editarDocumentoExpedienteInversionista(mockDocumento);
        expect(DocumentosExpedienteInversionista.update).toHaveBeenCalledWith(mockDocumento, { where: { idDocumento: mockDocumento.idDocumento }, returning: true, plain: true });
    });

    it('eliminar un expediente de inversionista', async () => {
        const mockId = 1;
        await DocumentosExpedienteInversionistaDAO.eliminarDocumentoExpedienteInversionista(mockId);
        expect(DocumentosExpedienteInversionista.destroy).toHaveBeenCalledWith({ where: { idDocumento: mockId } });
    });
});