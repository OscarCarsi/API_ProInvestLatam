const express = require ('express');
const cors = require('cors');

class Server {
    constructor (){
        this.app = express();
        this.port = process.env.PORT;
        this.middlewares();
        this.routes();
    }
}