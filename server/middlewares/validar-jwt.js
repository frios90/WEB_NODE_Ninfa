const { response, request } = require('express');
const jwt                   = require('jsonwebtoken');
const { User }              = require('../models');

const validarJWT = async( req = request, res = response, next ) => {
    const token = req.query.token;
    if ( !token ) {
        res.redirect('login');
    }
    try {
        const userDb  = new User();
        const { uid } = jwt.verify( token, process.env.SECRETORPRIVATEKEY );
        const user    = await userDb.getId( uid );
        if( !user ) {
            res.redirect('login');
        }
        req.user = user;        
        next();
    } catch (error) {
        res.redirect('login')        
    }
}
module.exports = {
    validarJWT
}