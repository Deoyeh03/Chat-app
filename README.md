# iChat - Real-Time WebSocket Chat App

## Overview

**iChat** is a simple real-time chat application built with Node.js, Socket.IO, and vanilla JavaScript. Users can join the chat, send messages, and see when others are typing. The UI is styled with CSS and Font Awesome icons.

## Features

- Real-time messaging using WebSockets (Socket.IO)
- Display total connected clients
- "User is typing..." feedback
- Customizable username
- Message timestamps (using Moment.js)
- Notification sound on new messages

## Project Structure

```
web_socket/
├── public/
│   ├── index.html      # Main chat UI
│   ├── style.css       # Stylesheet
│   ├── main.js         # Client-side JS logic
│   └── tone.mp3        # Notification sound
├── server.js           # Node.js server (not shown here)
├── package.json        # Project dependencies
```

## Getting Started

1. **Install dependencies:**
   ```
   npm install
   ```

2. **Start the server:**
   ```
   node server.js
   ```

3. **Open your browser:**
   - Go to `http://localhost:3000` (or your configured port).

## Usage

- Enter your name in the input field.
- Type a message and press "Send".
- See messages from all connected users in real time.
- Watch for "is typing..." feedback when others are composing messages.

## Technologies Used

- [Node.js](https://nodejs.org/)
- [Socket.IO](https://socket.io/)
- [Moment.js](https://momentjs.com/)
- [Font Awesome](https://fontawesome.com/)

## License

This project is for educational purposes.
