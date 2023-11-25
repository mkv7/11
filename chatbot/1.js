document.addEventListener('DOMContentLoaded', function () {
  const chatLog = document.getElementById('chat-log');
  const userInput = document.getElementById('user-input');
  const sendButton = document.getElementById('send-button');
  const rateButton = document.getElementById('rate-button');

  sendButton.addEventListener('click', function () {
    const userMessage = userInput.value.trim();

    if (userMessage !== '') {
      // Display user message in the chat log
      displayMessage('You', userMessage);

      // Simulate the chatbot's response
      const botResponse = getBotResponse(userMessage);

      // Display the chatbot's response
      displayMessage('Chatbot', botResponse);

      // Clear the user input field
      userInput.value = '';
    }
  });

  rateButton.addEventListener('click', function () {
    const rating = document.querySelector('input[name="rating"]:checked')?.value;
    if (rating) {
      displayMessage('You', `Rated: ${rating}/5`);
      // Logic to handle the rating can be added here
    } else {
      alert("Please select a rating.");
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
    // Replace with your chatbot logic
    return `You said: ${userMessage}`;
  }
});
