const { v4: uuidv4 } = require('uuid');
const fs             = require('fs');
const path           = './db/users.json';
const data           = fs.readFileSync( path, { encoding: 'utf-8' });
const functions      = require('../helpers/functions.js');
const DB             = data ? JSON.parse( data ).users : [];
const bcryptjs       = require('bcryptjs');

class User {

    constructor() {    
        this.users = DB;
        this.path  = path;       
    } 
    
    getId(user_id) {
        const user =  this.users.filter( user => user.id == user_id);
        return user;   
    } 

    getMail(user_email) {
        const user = this.users.filter( user => user.email == user_email);
        return user;   
    }
    
    storeInitUser() {
        const data = {
            id         : uuidv4(),
            name       : "Jazmín Mireya Soto Muñoz",
            email      : "jazsoto1998@gmail.com",
            password   : bcryptjs.hashSync( "JazSoto1998.1234", bcryptjs.genSaltSync() ),
            created_at : functions.getCurrentTimestamp(),
            updated_at : functions.getCurrentTimestamp(),
        }
        this.users.unshift( data )        
        fs.writeFileSync( this.path, JSON.stringify( { users: this.users } ) );
        return data;
    }
}

module.exports = User;