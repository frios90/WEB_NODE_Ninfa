require('dotenv').config();

const express       = require('express');
const cors          = require('cors');
const port          = process.env.PORT;
const { WebSocket } = require('../sockets/WebSockets');

class Server {

    constructor() {
        this.app    = express();
        this.port   = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io     = require('socket.io')(this.server);
        this.app.set('view engine', 'hbs');
        this.paths  = {
            web  : '/',
            auth : '/api/auth'
        };    
        this.middlewares();
        this.routes();
        this.sockets();
    }

    middlewares() {
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.static('public') );        
    }

    routes () {
        this.app.use( this.paths.auth, require('../routes/auth'));
        this.app.use( this.paths.web, require('../routes/WebRoute')); 
    }

    sockets () {
        this.io.on("connection", WebSocket );
    }

    listen () {
        this.server.listen(this.port, () => {
            console.log(`Init: Servidor corriendo en el puerto : ${this.port}`)
        })
    }
}

module.exports = Server;