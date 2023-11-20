document.addEventListener('DOMContentLoaded', function () {
    const chatLog = document.getElementById('chat-log');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
  
    sendButton.addEventListener('click', function () {
      const userMessage = userInput.value.trim();
  
      if (userMessage !== '') {
        // Display user message in the chat log
        displayMessage('You', userMessage);
  
        // Simulate the chatbot's response (you can replace this with your own logic)
        const botResponse = getBotResponse(userMessage);
  
        // Display the chatbot's response
        displayMessage('Chatbot', botResponse);
  
        // Clear the user input field
        userInput.value = '';
      }
    });
  
    function displayMessage(sender, message) {
      const messageElement = document.createElement('div');
      messageElement.classList.add('message');
      messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
      chatLog.appendChild(messageElement);
  
      // Scroll to the bottom of the chat log
      chatLog.scrollTop = chatLog.scrollHeight;
    }
  
    function getBotResponse(userMessage) {
      // Replace this with your own chatbot logic
      // Here's a simple example that just echoes the user's message
      return `You said: ${userMessage}`;
    }
  });
  