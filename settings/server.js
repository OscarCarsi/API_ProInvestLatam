const express = require ('express');
const cors = require('cors');
const xmlLoader = require('../utils/xmlLoader');
class Server {
    constructor (){
        this.app = express();
        this.port = process.env.PORT;
        this.middlewares();
        xmlLoader.cargarDatosDesdeXML();
        this.routes();
    }
    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }
    routes(){
        this.app.use('/apiproinvest/admin', require('../routes/Administrador'));
        this.app.use('/apiproinvest/inversionista', require('../routes/Inversionista'));
    }
    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}`)
        })
    }
}
module.exports = Server;