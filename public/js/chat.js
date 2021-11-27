document.querySelector(".openChatBtn").addEventListener("click", openForm);

function openForm() {
    document.querySelector(".openChat").style.display = "block";
}

function closeForm() {
    document.querySelector(".openChat").style.display = "none";
}

let socket = null;
var advanceChat = 0;
var msgsHtml = ""; 

const frontValidateJWT = async () => {
    await conectSocket();
}

const conectSocket = async () => {
    socket = io({
        'extraHeaders': {
            "web" : 'desde la web'
        }
    });
    socket.on('_showMessages', (data) => {       
        if (data.chat && data.messages) {
            localStorage.setItem('chat', JSON.stringify(data.chat));
            localStorage.setItem('messages', JSON.stringify(data.messages));           
        } 
        const audio = new Audio('../audio/new-ticket.mp3');  
        audio.play();
        listMsgs(data.messages);
    });
    $("#openChatBtn").on('click', () => {
        if (!localStorage.getItem('chat')) {
            socket.emit('_openChat');
        } else {
            const chat = JSON.parse(localStorage.getItem('chat'));
            const data = {
                chat_id: chat.id
            }
            socket.emit('_reOpenChat', data);
            listMsgs(JSON.parse(localStorage.getItem('messages')))
        }
    })
    $("#btnSendMessage").on('click', () => {
        sendMessage();
    })
    $("#messageToSend").on('keyup', (val) => {
        if (val.keyCode === 13) {
            sendMessage();
        }
    })
}


const sendMessage = () => {
    const data = {
        chart_id: JSON.parse(localStorage.getItem('chat')).id,
        message: $("#messageToSend").val(),
        type: 'CLIENT'
    }
    socket.emit('_postMessage', data);
    $("#messageToSend").val('');
}

const listMsgs = (messages = []) => {
    var html = "";
    // messages.forEach((val) => {
    //     html += `<div class="cloud-message ${ val.type == "ADMIN" ? "cloud-admin" : "cloud-client" }">`;
    //     html += `<p><span>${val.message}</span></p>`;
    //     html += '</div>';
    // })

    messages.forEach((val) => {
        console.log(val)
        if (val.type != "ADMIN") {
            html += `<div class="d-flex justify-content-start mb-4">`
            html += 	`<div class="img_cont_msg">`
            html += 		`<img src="../images/banners/logo-ninfa.png" class="rounded-circle user_img_msg">`
            html += 	`</div>`
            html += 	`<div class="msg_cotainer">`
            html += 		`${val.message}`
            html += 		`<span class="msg_time">${val.created_at}</span>`
            html += 	`</div>`
            html += `</div>`
        } else {
            html += `<div class="d-flex justify-content-end mb-4">`
            html += 	`<div class="msg_cotainer_send">`
            html += 		`${val.message}`
            html += 		`<span class="msg_time_send">${val.created_at}</span>`
            html += 	`</div>`
            html += 	`<div class="img_cont_msg">`
            html += 		`<img src="../images/banners/fotojaz.png" class="rounded-circle user_img_msg">`
            html += 	`</div>`
            html += `</div>`
        }			
    })
    $('#messagesChatDiv').html(html);
    $('#messagesChatDiv').scrollTop($('#messagesChatDiv').prop('scrollHeight'));
}

const main = async () => {
    await frontValidateJWT();
}

main();
