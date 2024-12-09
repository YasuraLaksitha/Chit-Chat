# Chit-Chat
Project URL: https://roadmap.sh/projects/broadcast-server

**Overview**

The Chit-Chat Application is a real-time messaging system built using socket.io for communication. Users can connect, set a username, broadcast messages to others, and seamlessly exit the chat.

**Features**
- User Management: Users can connect with a unique username.
- Real-time Messaging: Chat messages are instantly broadcasted to connected users.
- Simple Commands: Users can interact with the app via commands (connect, chat, exit).
- Graceful Exit: Disconnects the user safely and closes the application.
  
**Requirements**

Node.js (v14 or higher)
npm or yarn
A .env file with the following environment variables:

- HOST=localhost
- PORT=3000

**Installation**

Clone the repository: 

```bash
  git clone https://github.com/your-repo/broadcast-chat-app.git
  cd chit-chat
```
  
