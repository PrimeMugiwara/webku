function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();
    if (message) {
        addMessage(message, 'user-message');
        userInput.value = '';
        setTimeout(() => {
            addMessage(generateResponse(message), 'bot-message');
        }, 500);
    }
}

function addMessage(text, className) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.className = 'message ' + className;
    messageElement.innerText = text;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function generateResponse(message) {
    // Simple AI response logic
    const lowerCaseMessage = message.toLowerCase();
    if (lowerCaseMessage.includes('halo')) {
        return 'Halo! Bagaimana saya bisa membantu Anda?';
    } else if (lowerCaseMessage.includes('nama')) {
        return 'Nama saya Chatbot AI!';
    } else if (lowerCaseMessage.includes('cuaca')) {
        return 'Saya tidak bisa melihat cuaca, tapi semoga hari Anda cerah!';
    } else {
        return 'Maaf, saya tidak mengerti. Bisa coba lagi?';
    }
}
