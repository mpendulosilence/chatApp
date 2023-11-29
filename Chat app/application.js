const mpenduloSelectorBtn = document.querySelector('Mpendulo-selector')
const mathuSelectorBtn = document.querySelector('Mathu-selector')
const chatHeader =document.querySelector('.chat-header')
const chatMessage = document.querySelector('.chat-message')
const chatInputForm = document.querySelector('.chat-input-form')
const chatInput = document.querySelector('.chat-input')
const clearChartBtn = document.querySelector('.clear-chat-button')

const chatMessageElement =(message) => `
<div class="message ${message.sender === 'Mpendulo' ? 'blue-bg' : 'gray-bg'}">
<div class="message-text">${message.sender}</div>
<div class="message-timestamp">${message.timestamp}</div>
</div>
`
let messageSender ='Mpendulo'
const updateMessageSender =(name) =>{
messageSender=name
chatHeader.innerText = `${messageSender} chatting...`
chatInput.placeholder = `Type here, ${messageSender}`
}
mpenduloSelectorBtn.oclick =() => updateMessageSender('Mpendulo')
mathuSelectorBtn.oclick =() => updateMessageSender('Mathu')
const sendMessage =(e) =>{

    e.preventDefault()
    const timestamp = new Date().toLocaleDateString('en-US',{hour:'numeric',minute: 'numeric',hours12:true})
     const message ={

        sender:'',
        text: chatInput.value,
        timestamp,
     }

}
