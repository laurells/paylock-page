(function () {
  // Dynamically load DOMPurify if not already loaded
  if (typeof window.DOMPurify === 'undefined') {
    var purifyScript = document.createElement('script');
    purifyScript.src = '/purify.min.js';
    purifyScript.async = false;
    document.head.appendChild(purifyScript);
  }
  // Prevent multiple instances
  if (window.RenvueWidgetLoaded) return;
  window.RenvueWidgetLoaded = true;

  // Widget state
  let isOpen = false;
  let isTyping = false;
  let messageHistory = [];
  let requestCount = 0;
  const MAX_REQUESTS = 10;
  const SUPPORT_MESSAGE = 'You have reached the maximum number of free requests. For further assistance, please message +1234567890 for human support.';
  // Create widget container
  const widget = document.createElement("div");
  widget.id = "Renvue-chat-widget";
  widget.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 9999;
      // z-index: 10000;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    `;

  // Create chat button
  // const button = document.createElement("button");
  // button.innerHTML = `
  //     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  //       <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" fill="currentColor"/>
  //     </svg>
  //   `;
  // button.style.cssText = `
  //     width: 50px;
  //     height: 50px;
  //     border-radius: 50%;
  //     background: #0070f3;
  //     border: none;
  //     cursor: pointer;
  //     display: flex;
  //     align-items: center;
  //     justify-content: center;
  //     color: white;
  //     box-shadow: 0 2px 12px rgba(0,0,0,0.1);
  //     transition: transform 0.2s;
  //   `;
  // button.onmouseover = () => (button.style.transform = "scale(1.1)");
  // button.onmouseout = () => (button.style.transform = "scale(1)");

  const button = document.createElement('button');
    button.innerHTML = `
      <div style="position: relative;">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" fill="currentColor"/>
        </svg>
        <div id="notification-badge" style="
          position: absolute;
          top: -4px;
          right: -4px;
          width: 12px;
          height: 12px;
          background: #ff4444;
          border-radius: 50%;
          display: none;
          animation: pulse 2s infinite;
        "></div>
      </div>
    `;
    button.style.cssText = `
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      box-shadow: 0 4px 20px rgba(0,0,0,0.15);
      transition: all 0.3s ease;
      position: relative;
    `;

    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes pulse {
        0% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.2); opacity: 0.7; }
        100% { transform: scale(1); opacity: 1; }
      }
      @keyframes slideUp {
        from { transform: translateY(20px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
      @keyframes typing {
        0%, 60%, 100% { transform: translateY(0); }
        30% { transform: translateY(-10px); }
      }
      .typing-indicator {
        display: flex;
        gap: 4px;
        padding: 12px 16px;
      }
      .typing-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #999;
        animation: typing 1.4s infinite;
      }
      .typing-dot:nth-child(2) { animation-delay: 0.2s; }
      .typing-dot:nth-child(3) { animation-delay: 0.4s; }
      .message-fade-in {
        animation: slideUp 0.3s ease-out;
      }
    `;
    document.head.appendChild(style);

    button.onmouseover = () => {
      button.style.transform = 'scale(1.1)';
      button.style.boxShadow = '0 6px 25px rgba(0,0,0,0.2)';
    };
    button.onmouseout = () => {
      button.style.transform = 'scale(1)';
      button.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
    };


  // Create chat window
  const chatWindow = document.createElement("div");
  chatWindow.style.cssText = `
      position: fixed;
      bottom: 90px;
      right: 20px;
      width: 90vw;
      max-width: 380px;
      height: 70vh;
      max-height: 500px;
      background: white;
      border-radius: 16px;
      box-shadow: 0 10px 50px rgba(0,0,0,0.15);
      display: none;
      flex-direction: column;
      overflow: hidden;
      border: 1px solid #e1e5e9;
      animation: slideUp 0.3s ease-out;
      z-index: 9999;
    `;

  // Create chat header
  // const header = document.createElement("div");
  // header.style.cssText = `
  //     padding: 16px;
  //     background: #0070f3;
  //     color: white;
  //     font-weight: 600;
  //     display: flex;
  //     justify-content: space-between;
  //     align-items: center;
  //   `;
  // header.innerHTML = `
  //     <span>Renvue Support</span>
  //     <button id="close-chat" style="background: none; border: none; color: white; cursor: pointer; padding: 4px;">
  //       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  //         <path d="M18 6L6 18M6 6l12 12"/>
  //       </svg>
  //     </button>
  //   `;
      // Create chat header
      const header = document.createElement('div');
      header.style.cssText = `
        padding: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
      `;
      header.innerHTML = `
        <div>
          <div style="font-weight: 600; font-size: 16px; margin-bottom: 4px;">Renvue Support</div>
          <div style="font-size: 12px; opacity: 0.9; display: flex; align-items: center;">
            <div style="width: 8px; height: 8px; background: #4ade80; border-radius: 50%; margin-right: 6px;"></div>
            Typically replies in a few minutes
          </div>
        </div>
        <button id="close-chat" style="
          background: rgba(255,255,255,0.2);
          border: none;
          color: white;
          cursor: pointer;
          padding: 8px;
          border-radius: 8px;
          transition: background 0.2s;
        ">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `;


  // Create messages container
  const messagesContainer = document.createElement("div");
  messagesContainer.style.cssText = `
      flex: 1;
      overflow-y: auto;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      background: #fafbfc;
    `;


  // Create input container
  const inputContainer = document.createElement("div");
  inputContainer.style.cssText = `
  padding: 16px 20px 20px;
  border-top: 1px solid #e1e5e9;
  background: white;
`;

// Create input wrapper
const inputWrapper = document.createElement('div');
inputWrapper.style.cssText = `
  display: flex;
  gap: 8px;
  align-items: flex-end;
  background: #f8f9fa;
  border-radius: 12px;
  padding: 8px;
  border: 1px solid #e1e5e9;
  transition: border-color 0.2s;
`;

  // Create input field
  // const input = document.createElement("input");
  // input.type = "text";
  // input.placeholder = "Type your message...";
  // input.style.cssText = `
  //     flex: 1;
  //     padding: 8px 12px;
  //     border: 1px solid #ddd;
  //     border-radius: 6px;
  //     outline: none;
  //   `;
  const input = document.createElement('textarea');
  input.placeholder = 'Type your message...';
  input.rows = 1;
  input.style.cssText = `
    flex: 1;
    border: none;
    background: transparent;
    outline: none;
    resize: none;
    font-family: inherit;
    font-size: 14px;
    line-height: 1.4;
    padding: 8px;
    max-height: 100px;
  `;

   // Auto-resize textarea
   input.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = Math.min(this.scrollHeight, 100) + 'px';
  });

  // Create send button
  // const sendButton = document.createElement("button");
  // sendButton.innerHTML = `
  //     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  //       <path d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z"/>
  //     </svg>
  //   `;
  // sendButton.style.cssText = `
  //     background: #0070f3;
  //     border: none;
  //     border-radius: 6px;
  //     color: white;
  //     padding: 8px;
  //     cursor: pointer;
  //     display: flex;
  //     align-items: center;
  //     justify-content: center;
  //   `;

  const sendButton = document.createElement('button');
  sendButton.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z"/>
    </svg>
  `;
  sendButton.style.cssText = `
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border: none;
    border-radius: 8px;
    color: white;
    padding: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
    opacity: 0.7;
  `;

  // Enable/disable send button based on input
  input.addEventListener('input', () => {
    const hasText = input.value.trim().length > 0;
    sendButton.style.opacity = hasText ? '1' : '0.7';
    sendButton.style.cursor = hasText ? 'pointer' : 'not-allowed';
  });

  // Create quick actions
  const quickActions = document.createElement('div');
  quickActions.style.cssText = `
    display: flex;
    gap: 8px;
    margin-top: 12px;
    flex-wrap: wrap;
  `;

  const quickActionButtons = [
    'How does escrow work?',
    'API documentation',
    'Pricing information',
    'Integration help'
  ];

  quickActionButtons.forEach(action => {
    const btn = document.createElement('button');
    btn.textContent = action;
    btn.style.cssText = `
      background: white;
      border: 1px solid #e1e5e9;
      border-radius: 20px;
      padding: 8px 12px;
      font-size: 12px;
      cursor: pointer;
      transition: all 0.2s;
      color: #64748b;
    `;
    btn.onmouseover = () => {
      btn.style.background = '#f1f5f9';
      btn.style.borderColor = '#cbd5e1';
    };
    btn.onmouseout = () => {
      btn.style.background = 'white';
      btn.style.borderColor = '#e1e5e9';
    };
    btn.onclick = () => {
      input.value = action;
      sendMessage();
    };
    quickActions.appendChild(btn);
  });

  // Assemble the widget
  // inputContainer.appendChild(input);
  // inputContainer.appendChild(sendButton);
  // chatWindow.appendChild(header);
  // chatWindow.appendChild(messagesContainer);
  // chatWindow.appendChild(inputContainer);
  // widget.appendChild(button);
  // widget.appendChild(chatWindow);
  // document.body.appendChild(widget);
  inputWrapper.appendChild(input);
    inputWrapper.appendChild(sendButton);
    inputContainer.appendChild(inputWrapper);
    inputContainer.appendChild(quickActions);
    chatWindow.appendChild(header);
    chatWindow.appendChild(messagesContainer);
    chatWindow.appendChild(inputContainer);
    widget.appendChild(button);
    widget.appendChild(chatWindow);
    document.body.appendChild(widget);

     // Add welcome message
     function showWelcomeMessage() {
      setTimeout(() => {
        addMessage("👋 Hi! I'm here to help you with Renvue. How can I assist you today?", false);
      }, 500);
    }

    function hideQuickActions() {
      quickActions.style.display = 'none';
    }

  // Add message to chat
  function addMessage(content, isUser = false, isStreaming = false) {
    // Hide quick actions after user sends a message
    if (isUser) {
      hideQuickActions();
    }
    const messageWrapper = document.createElement('div');
    messageWrapper.style.cssText = `
      display: flex;
      ${isUser ? 'justify-content: flex-end;' : 'justify-content: flex-start;'}
      margin-bottom: 8px;
    `;

    const message = document.createElement('div');
    message.className = 'message-fade-in';
    message.style.cssText = `
      max-width: 80%;
      padding: 12px 16px;
      border-radius: 16px;
      font-size: 14px;
      line-height: 1.4;
      word-wrap: break-word;
      ${isUser ? `
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border-bottom-right-radius: 4px;
      ` : `
        background: white;
        color: #374151;
        border: 1px solid #e5e7eb;
        border-bottom-left-radius: 4px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      `}
    `;

    if (isStreaming) {
      message.id = 'streaming-message';
    }

    if (isUser) {
      message.textContent = content;
    } else {
      // Sanitize AI/assistant messages
      if (window.DOMPurify) {
        message.innerHTML = window.DOMPurify.sanitize(content);
      } else {
        message.textContent = content; // fallback if DOMPurify not loaded yet
      }
    }
    messageWrapper.appendChild(message);
    messagesContainer.appendChild(messageWrapper);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    if (!isUser) {
      messageHistory.push(content);
    }

    return message;
  }

  // Show typing indicator
  function showTypingIndicator() {
    if (isTyping) return;
    isTyping = true;

    const typingWrapper = document.createElement('div');
    typingWrapper.id = 'typing-indicator';
    typingWrapper.style.cssText = `
      display: flex;
      justify-content: flex-start;
      margin-bottom: 8px;
    `;

    const typingMessage = document.createElement('div');
    typingMessage.className = 'typing-indicator';
    typingMessage.style.cssText = `
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 16px;
      border-bottom-left-radius: 4px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    `;

    typingMessage.innerHTML = `
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
    `;

    typingWrapper.appendChild(typingMessage);
    messagesContainer.appendChild(typingWrapper);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  // Hide typing indicator
  function hideTypingIndicator() {
    const indicator = document.getElementById('typing-indicator');
    if (indicator) {
      indicator.remove();
    }
    isTyping = false;
  }

  // Add typing animation
  function addTypingAnimation() {
    const typingMessage = document.getElementById('streaming-message');
    if (!typingMessage) return;

    typingMessage.classList.add('typing-animation');
    setTimeout(() => {
      typingMessage.classList.remove('typing-animation');
    }, 1000);
  }

   // Handle send message
   async function sendMessage() {
    if (requestCount >= MAX_REQUESTS) {
      addMessage(SUPPORT_MESSAGE, false);
      return;
    }
    const message = input.value.trim();
    if (!message) return;

    hideQuickActions();
    addMessage(message, true);
    input.value = '';
    input.style.height = 'auto';

    // Update send button state
    sendButton.style.opacity = '0.7';
    sendButton.style.cursor = 'not-allowed';

    showTypingIndicator();

    try {
      const response = await fetch('/api/widget', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'text/event-stream'
        },
        body: JSON.stringify({ message })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      hideTypingIndicator();
      
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';
      let streamingMessage = null;
      let fullResponse = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            try {
              const data = JSON.parse(line.slice(6));
              
              if (data.type === 'text-delta' && data.textDelta) {
                if (!streamingMessage) {
                  streamingMessage = addMessage('', false, true);
                }
                // Remove all '**' from the response
                const cleanDelta = data.textDelta.replace(/\*\*/g, '');
                fullResponse += cleanDelta;
                if (window.DOMPurify) {
                  streamingMessage.innerHTML = window.DOMPurify.sanitize(fullResponse);
                } else {
                  streamingMessage.textContent = fullResponse;
                }
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
              }
            } catch (e) {
              console.error('Error parsing streaming data:', e);
            }
          }
        }
      }

      if (streamingMessage) {
        streamingMessage.id = '';
      }
      requestCount++;
    } catch (error) {
      console.error('Error sending message:', error);
      hideTypingIndicator();
      addMessage('Sorry, I encountered an error. Please try again or contact support if the issue persists.', false);
    }
  }


  // Event listeners
  button.onclick = () => {
    // Hide notification badge when clicked
    const badge = document.getElementById('notification-badge');
    if (badge) {
      badge.style.display = 'none';
    }
    
    if (!isOpen) {
      chatWindow.style.display = 'flex';
      button.style.display = 'none';
      isOpen = true;
      
      // Show welcome message if first time opening
      if (messageHistory.length === 0) {
        showWelcomeMessage();
      }
      
      // Focus input
      setTimeout(() => input.focus(), 100);
    }
  };

  header.querySelector('#close-chat').onclick = () => {
    chatWindow.style.display = 'none';
    button.style.display = 'flex';
    isOpen = false;
  };

  sendButton.onclick = (e) => {
    e.preventDefault();
    if (input.value.trim()) {
      sendMessage();
    }
  };
  // Input events
  input.onkeydown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (input.value.trim()) {
        sendMessage();
      }
    }
  };

  // Focus events for input wrapper
  input.onfocus = () => {
    inputWrapper.style.borderColor = '#667eea';
    inputWrapper.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
  };

  input.onblur = () => {
    inputWrapper.style.borderColor = '#e1e5e9';
    inputWrapper.style.boxShadow = 'none';
  };

  // Close chat when clicking outside
  document.addEventListener('click', (e) => {
    if (isOpen && !widget.contains(e.target)) {
      chatWindow.style.display = 'none';
      button.style.display = 'flex';
      isOpen = false;
    }
  });

  // Show notification badge after some time if not opened
  setTimeout(() => {
    if (!isOpen && messageHistory.length === 0) {
      const badge = document.getElementById('notification-badge');
      if (badge) {
        badge.style.display = 'block';
      }
    }
  }, 10000); // Show after 10 seconds


  console.log('Renvue chat widget loaded successfully');
})();
