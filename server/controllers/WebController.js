const { response, request } = require('express');

const getindex = async (req = request, res = response) => {
    const params = {
        title: "Ninfa Natural",
        name: "ninfa sanacion"
    }
    res.render( `index`, params);
}

const getLogin = async (req = request, res = response) => {
    const params = {
        page: "Login de acceso",
    }
    res.render( `login`, params);
}

const getMessages = async (req = request, res = response) => {
    const params = {
        page: "Mensajes internos"
    }
    res.render( `messages`, params);
}


module.exports = {
    getindex,
    getLogin,
    getMessages
}
   