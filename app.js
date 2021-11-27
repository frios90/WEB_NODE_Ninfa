require('dotenv').config();

// const express = require('express')
const hbs     = require('hbs');
// const app     = express()
// const port    = process.env.PORT;

hbs.registerPartials(`${__dirname}/views/partials/`);
hbs.registerPartials(`${__dirname}/views/modals/`);
hbs.registerPartials(`${__dirname}/views/chats/`);

// app.use(express.static('public'));


// app.get('*', (req, res) => {
//     // res.sendFile( `${__dirname}/public/404.html`)
// })

const Server = require('./server/config/server');

const server = new Server();

server.listen();