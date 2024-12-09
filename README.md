# Chit-Chat
Project URL: https://roadmap.sh/projects/broadcast-server

Overview
The Broadcast Chat Application is a real-time messaging system built using socket.io for communication. Users can connect, set a username, broadcast messages to others, and seamlessly exit the chat.

Features
User Management: Users can connect with a unique username.
Real-time Messaging: Chat messages are instantly broadcasted to connected users.
Simple Commands: Users can interact with the app via commands (connect, chat, exit).
Graceful Exit: Disconnects the user safely and closes the application.
Requirements
Node.js (v14 or higher)
npm or yarn
A .env file with the following environment variables:
HOST=localhost
PORT=3000
Installation
Clone the repository:

git clone https://github.com/your-repo/broadcast-chat-app.git
cd broadcast-chat-app
Install dependencies:

npm install
Create a .env file and configure HOST and PORT as required.

Usage
Start the server:

node server.js
Run the client application:

node client.js
Follow the on-screen prompts:

Enter connect to set your username.
Enter chat to start messaging.
Type your message and press Enter to send.
Enter exit to disconnect and leave the chat.
Commands
Command	Description
connect	Sets a username to join the chat.
chat	Enters the chat mode to send messages.
exit	Disconnects and exits the application.
Example
Welcome to the chat application  
Enter an option (connect/chat/exit): connect  
Enter username: JohnDoe  

Chat mode on  
msg: Hello, everyone!  
[Server]: Welcome, JohnDoe!  
