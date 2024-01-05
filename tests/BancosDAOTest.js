const BancosDAO = require('../dao/BancosDAO');
jest.mock('../models', () => {
    return {
      Bancos: {
        create: jest.fn(),
        findAll: jest.fn(),
        findOne: jest.fn(),
        update: jest.fn(),
        destroy: jest.fn(),
      }
    };
  });
  
  const Bancos = require('../models').Bancos;
let bancoMock = {
    idBanco: 1,
    banco: 'Banco de Prueba'
};

describe('BancosDAO', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it('crear un banco', async () => {
        Bancos.create.mockResolvedValue(bancoMock);
        const resultado = await BancosDAO.crearBanco(bancoMock);
        expect(resultado).toEqual(bancoMock);
        expect(Bancos.create).toHaveBeenCalledWith(bancoMock);
    });

    it('encontrar todos los bancos', async () => {
        Bancos.findAll.mockResolvedValue([bancoMock]);
        const resultado = await BancosDAO.encontrarBancos();
        expect(resultado).toEqual([bancoMock]);
        expect(Bancos.findAll).toHaveBeenCalled();
    });

    it('encontrar un banco por nombre', async () => {
        Bancos.findOne.mockResolvedValue(bancoMock);
        const resultado = await BancosDAO.encontrarBancoPorNombre(bancoMock.banco);
        expect(resultado).toEqual(bancoMock);
        expect(Bancos.findOne).toHaveBeenCalledWith({where: {banco: bancoMock.banco}});
    });

    it('editar un banco', async () => {
        Bancos.update.mockResolvedValue([1, [bancoMock]]);
        const resultado = await BancosDAO.editarBanco(bancoMock);
        expect(resultado).toEqual([1, [bancoMock]]);
        expect(Bancos.update).toHaveBeenCalledWith(bancoMock, {where: {idBanco: bancoMock.id}, returning: true, plain: true});
    });

    it('eliminar un banco', async () => {
        Bancos.destroy.mockResolvedValue(1);
        const resultado = await BancosDAO.eliminarBanco(bancoMock.idBanco);
        expect(resultado).toEqual(1);
        expect(Bancos.destroy).toHaveBeenCalledWith({where: {idBanco: bancoMock.idBanco}});
    });
});