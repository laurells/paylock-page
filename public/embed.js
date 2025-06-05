(function() {
    // Create widget container
    const widget = document.createElement('div');
    widget.id = 'paylock-chat-widget';
    widget.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 9999;
      font-family: system-ui, -apple-system, sans-serif;
    `;
  
    // Create chat button
    const button = document.createElement('button');
    button.innerHTML = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" fill="currentColor"/>
      </svg>
    `;
    button.style.cssText = `
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: #0070f3;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      box-shadow: 0 2px 12px rgba(0,0,0,0.1);
      transition: transform 0.2s;
    `;
    button.onmouseover = () => button.style.transform = 'scale(1.1)';
    button.onmouseout = () => button.style.transform = 'scale(1)';
  
    // Create chat window
    const chatWindow = document.createElement('div');
    chatWindow.style.cssText = `
      position: fixed;
      bottom: 80px;
      right: 20px;
      width: 350px;
      height: 500px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 5px 40px rgba(0,0,0,0.16);
      display: none;
      flex-direction: column;
      overflow: hidden;
    `;
  
    // Create chat header
    const header = document.createElement('div');
    header.style.cssText = `
      padding: 16px;
      background: #0070f3;
      color: white;
      font-weight: 600;
      display: flex;
      justify-content: space-between;
      align-items: center;
    `;
    header.innerHTML = `
      <span>PayLock Support</span>
      <button id="close-chat" style="background: none; border: none; color: white; cursor: pointer; padding: 4px;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
      </button>
    `;
  
    // Create messages container
    const messagesContainer = document.createElement('div');
    messagesContainer.style.cssText = `
      flex: 1;
      overflow-y: auto;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    `;
  
    // Create input container
    const inputContainer = document.createElement('div');
    inputContainer.style.cssText = `
      padding: 16px;
      border-top: 1px solid #eee;
      display: flex;
      gap: 8px;
    `;
  
    // Create input field
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Type your message...';
    input.style.cssText = `
      flex: 1;
      padding: 8px 12px;
      border: 1px solid #ddd;
      border-radius: 6px;
      outline: none;
    `;
  
    // Create send button
    const sendButton = document.createElement('button');
    sendButton.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z"/>
      </svg>
    `;
    sendButton.style.cssText = `
      background: #0070f3;
      border: none;
      border-radius: 6px;
      color: white;
      padding: 8px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    `;
  
    // Assemble the widget
    inputContainer.appendChild(input);
    inputContainer.appendChild(sendButton);
    chatWindow.appendChild(header);
    chatWindow.appendChild(messagesContainer);
    chatWindow.appendChild(inputContainer);
    widget.appendChild(button);
    widget.appendChild(chatWindow);
    document.body.appendChild(widget);
  
    // Add message to chat
    function addMessage(content, isUser = false) {
      const message = document.createElement('div');
      message.style.cssText = `
        max-width: 80%;
        padding: 8px 12px;
        border-radius: 12px;
        ${isUser ? `
          background: #0070f3;
          color: white;
          align-self: flex-end;
        ` : `
          background: #f5f5f5;
          color: #333;
          align-self: flex-start;
        `}
      `;
      message.textContent = content;
      messagesContainer.appendChild(message);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  
    // Handle send message
    async function sendMessage() {
      const message = input.value.trim();
      if (!message) return;
  
      addMessage(message, true);
      input.value = '';
  
      try {
        const response = await fetch('/api/widget', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message })
        });
  
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';
  
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
                if (data.type === 'text') {
                  addMessage(data.value);
                }
              } catch (e) {
                console.error('Error parsing message:', e);
              }
            }
          }
        }
      } catch (error) {
        console.error('Error sending message:', error);
        addMessage('Sorry, there was an error sending your message.');
      }
    }
  
    // Event listeners
    button.onclick = () => {
      chatWindow.style.display = 'flex';
      button.style.display = 'none';
    };
  
    document.getElementById('close-chat').onclick = () => {
      chatWindow.style.display = 'none';
      button.style.display = 'flex';
    };
  
    sendButton.onclick = sendMessage;
    input.onkeypress = (e) => {
      if (e.key === 'Enter') sendMessage();
    };
  })(); 