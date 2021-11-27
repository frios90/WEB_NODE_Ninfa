const { v4: uuidv4 } = require('uuid');
const fs             = require('fs');
const path           = './db/chats.json';
const data           = fs.readFileSync( path, { encoding: 'utf-8' });
const functions      = require('../helpers/functions.js');
const DB             = data ? JSON.parse( data ).chats : [];

class Chat {

    constructor() {    
        this.chats = DB;
        this.path  = path;       
    } 
    
    getId(chat_id) {
        const chat = this.chats.filter( chat => chat.id == chat_id);
        return chat;   
    }

    getAll() {       
        this.chats.sort((a, b) => {
            if (a.updated_at > b.updated_at) {
                return -1;
            } else if (a.updated_at < b.updated_at) {
                return 1;
            } else {
                return 0;
            }
        }) 
        return this.chats;     
    }

    store() {
        const data = {
            id         : uuidv4(),
            user_id    : 1,
            alias      : false,
            active     : false,
            created_at : functions.getCurrentTimestamp(),
            updated_at : functions.getCurrentTimestamp(),
            online     : false,
            status     : 'NEW' /** {status: ['NEW', 'RESPONSE']} */
        }
        this.chats.unshift( data )
        this.chats.sort((a, b) => {
            if (a.updated_at > b.updated_at) {
                return -1;
            } else if (a.updated_at < b.updated_at) {
                return 1;
            } else {
                return 0;
            }
        })
        fs.writeFileSync( this.path, JSON.stringify( { chats: this.chats } ) );
        return data;
    }

    updateDate(id, typeMessage) {
        const self = this;
        this.chats.forEach(function(ch, index) {
            if(ch.id === id){
                self.chats[index].updated_at = functions.getCurrentTimestamp();
                if ( typeMessage == "ADMIN" ) {
                    self.chats[index].status = "RESPONSE";
                } else {
                    self.chats[index].status = "NEW"; 
                }
            }
        });
        this.chats.sort((a, b) => {
            if (a.updated_at > b.updated_at) {
                return -1;
            } else if (a.updated_at < b.updated_at) {
                return 1;
            } else {
                return 0;
            }
        })
        fs.writeFileSync( this.path, JSON.stringify( { chats: this.chats } ) );   
      
        return this.chats;
    }

    updateOnline(id, online) {
        const self = this;
        this.chats.forEach(function(ch, index) {
            if(ch.id === id){
                self.chats[index].online = online
            }
        });
        fs.writeFileSync( this.path, JSON.stringify( { chats: this.chats } ) );        
        return this.chats;
    }

    updateAlias(id, alias) {
        const self = this;
        console.log('acutualizando en elias');
        this.chats.forEach(function(ch, index) {
            if(ch.id === id){
                console.log(self.chats[index].alias)
                self.chats[index].alias = alias
                console.log(self.chats[index].alias)
            }
        });
        fs.writeFileSync( this.path, JSON.stringify( { chats: this.chats } ) );        
        return this.chats;
    }

    deleteChat (chatId) {
        const chats = this.chats.filter(chat => chat.id != chatId);
        fs.writeFileSync( this.path, JSON.stringify( { chats } ) );        
        return chats;
    }


}

module.exports = Chat;