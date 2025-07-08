const messageInput = document.getElementById("msg");
const btnSend = document.getElementById("send");
const chatBox = document.getElementById("chatbox");


const myWebSocket = new WebSocket("ws://localhost:4600");

myWebSocket.addEventListener("message", (serverMsg) =>{
    
    chatBox.innerHTML += '<div class="admin">'+ serverMsg.data + '<div>';
    chatBox.scrollTop = chatBox.scrollHeight;
})

const sendMessage = () =>{

    myWebSocket.send(messageInput.value);
   chatBox.innerHTML += '<div class="client">'+ messageInput.value + '<div>';
    chatBox.scrollTop = chatBox.scrollHeight;
    messageInput.value = "";

};

btnSend.addEventListener("click", sendMessage);

messageInput.addEventListener("keyup", (event) =>{
    if (event.key == "Enter") {
        sendMessage();
    }
})

