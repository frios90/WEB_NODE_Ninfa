const { response } = require('express');
const bcryptjs     = require('bcryptjs');
const { User }     = require('../models');

const { generarJWT } = require('../helpers/generar-jwt');


const login = async(req, res = response) => {
    const userDb = new User();
    const { email, password } = req.body;
    
    try {      
        const user = userDb.getMail(email);
       
        if ( user.length == 0 ) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - correo'
            });
        }

        
        const validPassword = bcryptjs.compareSync( password, user[0].password );
     
        if ( !validPassword ) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - password'
            });
        }

        console.log('antes de generar el jstoken')
        console.log(user[0].id)
        
        const token = await generarJWT( user[0].id );

        res.json({
            user,
            token
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }   

}



module.exports = {
    login
}
