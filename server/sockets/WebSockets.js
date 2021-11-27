const { Socket }                  = require("socket.io");
const { Chat, ChatMessage, User } = require('../models');
const WebSocket = async(socket = new Socket(), io) => {
    // var user = new User();    
    // user.storeInitUser();
    socket.on('_onlineStatus', (data) => {      
        const chat = new Chat();
        chat.updateOnline(data.chatId, data.online);
    })
    socket.on('_openChat', () => {
        const chat        = new Chat();
        const chatMessage = new ChatMessage();
        const chatStore   = chat.store();        
        const initMessage = '<p><span style="font-weight: 600">Hola, ¿Como podemos ayudarte?</span></p>';    
        chatMessage.store(chatStore.id, initMessage, 'ADMIN');
        const messagesOfChat = chatMessage.getForChatId(chatStore.id);
        const data = {
            chat:     chatStore,
            messages: messagesOfChat
        }
        socket.emit('_showMessages', data);        
    })
    socket.on('_reOpenChat', (data) => {
        const chat        = new Chat();
        const chatMessage = new ChatMessage();
        const messagesOfChat = chatMessage.getForChatId(data.chat_id);
        const send = {
            messages: messagesOfChat
        }      
        socket.emit('_showMessages', send);        
    })
    socket.on('_postMessage', (data) => {
        const chat            = new Chat();
        const chatMessage     = new ChatMessage();        
        const type            = data.type === "ADMIN" ? "ADMIN" : "CLIENT";
        const newMessage      = `${data.message}`;
        const storeNewMessage = chatMessage.store(data.chart_id, newMessage, type);
        const updateDateChat  = chat.updateDate(data.chart_id, data.type)
        const send            = {         
            chats    : chat.getAll(), 
            messages : chatMessage.getForChatId(data.chart_id)
        }        
        socket.join(data.chart_id);        
        socket.emit('_showMessages', send);
        socket.broadcast.to(data.chart_id).emit('_showMessages', send);
        socket.emit('_updateChatMessage', updateMessage(data.chart_id, storeNewMessage));
        socket.broadcast.emit('_updateChatMessage', updateMessage(data.chart_id, storeNewMessage))
    })
    socket.on('_changeAlias', async (data) => {
        const chat = new Chat();
        await chat.updateAlias(data.chartId, data.alias);
        socket.emit('_internalChat', initInternalChat()); 
    })
    socket.on('_deleteChat', async (data) => {
        const chat  = new Chat();
        await chat.deleteChat(data.chatId);
        socket.broadcast.emit('_internalChat', initInternalChat())  

    })  
    /**Mensajes para la mensajeria interna de la aplicacion */    
    socket.emit('_internalChat', initInternalChat())   
}


const initInternalChat = () => {
    const chat        = new Chat();
    const chatMessage = new ChatMessage();
    const data        = {
        chats    : chat.getAll(),
        messages : chatMessage.getAll()
    }
    console.log(data)
    return data;
}

const updateMessage = (chatId, newMessage) => {
    const chat = new Chat();
    const data = {
        chatId, 
        newMessage,
        chats: chat.getAll()
    }
    return data;
}

module.exports = {
    WebSocket
}