const { v4: uuidv4 } = require('uuid');
const fs             = require('fs');
const path           = './db/chatMessages.json';
const data           = fs.readFileSync( path, { encoding: 'utf-8' });
const DB             = data ? JSON.parse( data ).chatMessages : [];
const functions      = require('../helpers/functions.js');

class ChatMessage {

    constructor(id, chat_id, user_type, message) {    
        this.id        = id;
        this.chat_id   = chat_id;
        this.user_type = user_type;
        this.message   = message;

        this.chatMessages = DB;
        this.path = path;
    }   

    // get usersArr() {
    //     return Object.values(this.users);
    // }

    getAll() {        
        return this.chatMessages;     
    }

    getForChatId(chat_id) {
        const messagesOfChat = this.chatMessages.length > 0 ? this.chatMessages.filter( (message) => {
            if (message.chat_id == chat_id) {
                return message
            }
        }) : {}

        return messagesOfChat;   
    }

    store(chat_id, message, type) {
        console.log("*Creando incio de chat")
        const data = {
            id: uuidv4(),
            chat_id,
            message,
            type,
            created_at : functions.getCurrentTimestamp(),
        };       
        this.chatMessages.push( data );
        fs.writeFileSync( this.path, JSON.stringify( { chatMessages: this.chatMessages } ) );
        return data;
    }

    // sendMessages(uid, name, message) {        
    //     this.messages.unshift(new  Message(uid, name, message));
    //     console.log(this.messages)
    // }

    // connectUser (user) {
    //     this.users[user.id] = user;
    // }

    // disconnectUser (id) {
    //     delete this.users[id];
    // } 
}

 module.exports = ChatMessage;