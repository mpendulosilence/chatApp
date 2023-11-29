const mpenduloSelectorBtn = document.querySelector('#Mpendulo-selector')
const mathuSelectorBtn = document.querySelector('#Mathu-selector')
const chatHeader =document.querySelector('.chat-header')
const chatMessages = document.querySelector('.chat-messages')
const chatInputForm = document.querySelector('.chat-input-form')
const chatInput = document.querySelector('.chat-input')
const clearChartBtn = document.querySelector('.clear-chat-button')

const messages = JSON.parse(localStorage.getItem('messages')) || []
const chatMessageElement =(message) => `
<div class="message ${message.sender === 'Mpendulo' ? 'blue-bg' : 'gray-bg'}">
<div class="message-sender">${message.sender}</div>
<div class="message-text">${message.text}</div>
<div class="message-timestamp">${message.timestamp}</div>
</div>
`

window.onload = () =>{
messages.forEach((message) => {

   chatMessages.innerHTML += chatMessageElement(message)
});

}
let messageSender ='Mpendulo'
const updateMessageSender =(name) =>{
messageSender=name
chatHeader.innerText = `${messageSender} chatting...`
chatInput.placeholder = `Type here, ${messageSender}...`

if(name === 'Mpendulo'){
   mpenduloSelectorBtn.classList.add('active-person')

   mathuSelectorBtn.classList.remove('active-person')
}
if(name === 'Mathu'){
   mathuSelectorBtn.classList.add('active-person')
   mpenduloSelectorBtn.classList.remove('active-person')
}

chatInput.focus()

}
mpenduloSelectorBtn.onclick = () => updateMessageSender('Mpendulo')
mathuSelectorBtn.onclick = () => updateMessageSender('Mathu')

const sendMessage =(e) =>{

    e.preventDefault()
    const timestamp = new Date().toLocaleDateString('en-US',{hour:'numeric',minute: 'numeric',hours12:true})
     const message ={

        sender:messageSender,
        text: chatInput.value,
        timestamp,
     }
     messages.push(message)
      localStorage.setItem('messages',JSON.stringify(messages))
     chatMessages.innerHTML += chatMessageElement(message)
     chatInputForm.reset()
     chatMessages.scrollTop = chatMessages.scrollHeight


}
chatInputForm.addEventListener('submit', sendMessage)
clearChartBtn.addEventListener('click', () => {

 localStorage.clear()
 chatMessages.innerHTML =''
})