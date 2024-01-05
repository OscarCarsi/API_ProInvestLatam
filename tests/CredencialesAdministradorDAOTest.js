const CredencialesAdministradorDAO = require('../dao/CredencialesAdministradorDAO');
const { CredencialesAdministrador } = require('../models');

jest.mock('../models', () => {
    return {
        CredencialesAdministrador: {
            findOne: jest.fn(),
        }
    };
});

describe('CredencialesAdministradorDAO', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('encontrar credenciales por usuario y contraseña', async () => {
        const mockUsuario = 'usuarioPrueba';
        const mockContrasena = 'contrasenaPrueba';
        await CredencialesAdministradorDAO.encontrarCredencialesPorUsuarioContrasenia(mockUsuario, mockContrasena);
        expect(CredencialesAdministrador.findOne).toHaveBeenCalledWith({
            where: {
                usuario: mockUsuario,
                contrasena: mockContrasena
            }
        });
    });
});