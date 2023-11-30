require('dotenv').config();
const Server = require('./settings/server');
const servidor = new Server();
servidor.listen();