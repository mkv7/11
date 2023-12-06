document.addEventListener('DOMContentLoaded', function () {
  // Login elements
  const loginContainer = document.getElementById('login-container');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const loginButton = document.getElementById('login-button');
  const loginError = document.getElementById('login-error');

  // Chat elements
  const chatContainer = document.getElementById('chat-container');
  const chatLog = document.getElementById('chat-log');
  const userInput = document.getElementById('user-input');
  const sendButton = document.getElementById('send-button');
  const rateButton = document.getElementById('rate-button');

  // Login button event listener
  loginButton.addEventListener('click', function () {
    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    if (username === 'admin' && password === '1234') {
      loginContainer.style.display = 'none';
      chatContainer.style.display = 'block';
    } else {
      loginError.style.display = 'block';
    }
  });

  // Send button event listener
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

  // Rate button event listener
  rateButton.addEventListener('click', function () {
    const rating = document.querySelector('input[name="rating"]:checked')?.value;
    if (rating) {
      displayMessage('You', `Rated: ${rating}/5`);
      // Logic to handle the rating can be added here
    } else {
      alert("Please select a rating.");
    }
  });
  function getBotResponse(userMessage) {
  userMessage = userMessage.toLowerCase();

  // Predefined responses
  const responses = {
    "hello": "Hello! How can I help you today?",
    "how are you": "I'm a bot, I'm always doing well. Thanks for asking!",
    "what is your name": "I'm ChatBot, your virtual assistant.",
    "bye": "Goodbye! Have a great day!"
  };

  // Default response if no match is found
  const defaultResponse = "I'm not sure how to respond to that. Can you ask something else?";

  // Find a response if one exists
  for (const key in responses) {
    if (userMessage.includes(key)) {
      return responses[key];
    }
  }

  // Return default response
  return defaultResponse;
}

  function displayMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatLog.appendChild(messageElement);

    // Scroll to the bottom of the chat log
    chatLog.scrollTop = chatLog.scrollHeight;
  }

  document.addEventListener('DOMContentLoaded', function () {
    // Login elements
    const loginContainer = document.getElementById('login-container');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginButton = document.getElementById('login-button');
    const loginError = document.getElementById('login-error');
  
    // Chat elements
    const chatContainer = document.getElementById('chat-container');
    const chatLog = document.getElementById('chat-log');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    const rateButton = document.getElementById('rate-button');
  
    // Login button event listener
    loginButton.addEventListener('click', function () {
      const username = usernameInput.value.trim();
      const password = passwordInput.value;
  
      if (username === 'admin' && password === '1234') {
        loginContainer.style.display = 'none';
        chatContainer.style.display = 'block';
      } else {
        loginError.style.display = 'block';
      }
    });
  
    // Send button event listener
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
  
    // Rate button event listener
    rateButton.addEventListener('click', function () {
      const rating = document.querySelector('input[name="rating"]:checked')?.value;
      if (rating) {
        displayMessage('You', `Rated: ${rating}/5`);
        // Logic to handle the rating can be added here
      } else {
        alert("Please select a rating.");
      }
    });
    function getBotResponse(userMessage) {
      userMessage = userMessage.toLowerCase();
    
      // Predefined responses
      const responses = {
        "hello": "Hello! How can I help you today?",
        "how are you": "I'm a bot, I'm always doing well. Thanks for asking!",
        "what is your name": "I'm ChatBot, your virtual assistant.",
        "bye": "Goodbye! Have a great day!"
      };
    
      // Default response if no match is found
      const defaultResponse = "I'm not sure how to respond to that. Can you ask something else?";
    
      // Find a response if one exists
      for (const key in responses) {
        if (userMessage.includes(key)) {
          return responses[key];
        }
      }
    
      // Return default response
      return defaultResponse;
    }
    
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
  
});
