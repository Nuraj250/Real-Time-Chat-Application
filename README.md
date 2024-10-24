# Real-Time Chat Application

A real-time chat application built with Node.js, Express, Socket.io, and React. This app allows users to register, login, and engage in real-time conversations with other users.

## Features
- User registration and login using JSON Web Tokens (JWT)
- Real-time communication using Socket.io
- Group chat functionality with multiple rooms
- Typing indicators to show when a user is typing
- Display of online users and active chat rooms
- Persist chat history using MongoDB

## Tech Stack
- **Frontend**: React, Socket.io-client, Axios, TailwindCSS (for styling)
- **Backend**: Node.js, Express.js, Socket.io, Mongoose (for MongoDB)
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)

## Prerequisites
- Node.js and npm installed on your machine.
- MongoDB instance (local or cloud-based).

## Installation

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/real-time-chat-app.git
cd real-time-chat-app
```

### 2. Install dependencies for the backend
```bash
cd server
npm install
```

### 3. Create a `.env` file in the `server` directory
Set up the following environment variables in the `.env` file:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 4. Start the backend server
```bash
npm start
```

### 5. Install dependencies for the frontend
Open a new terminal window and run:
```bash
cd client
npm install
```

### 6. Create a `.env` file in the `client` directory
Set up the following environment variables in the `.env` file:
```
REACT_APP_BACKEND_URL=http://localhost:5000
```

### 7. Start the React frontend
```bash
npm start
```

The React app will run on `http://localhost:3000` by default, and the backend server will run on `http://localhost:5000`.

## Usage
1. Register a new user account.
2. Log in with the created account.
3. Join a chat room or start a new conversation.
4. Send messages and see them appear in real-time.
5. See which users are online and get typing indicators when others are typing.

## Project Structure
```
real-time-chat-app/
├── server/                 # Node.js/Express backend
│   ├── models/             # Mongoose models for User and Message
│   ├── routes/             # API routes for authentication and messaging
│   ├── socket/             # Socket.io event handling
│   ├── .env                # Environment variables for server
│   └── index.js            # Entry point for the server
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components (Chat, Login, Register, etc.)
│   │   ├── context/        # User and Auth context
│   │   ├── services/       # API calls and socket client setup
│   │   ├── .env            # Environment variables for client
│   │   └── App.js          # Main React component
│   └── public/
├── README.md               # Project documentation
```

## Contributing
1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- [Socket.io Documentation](https://socket.io/docs/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Mongoose Documentation](https://mongoosejs.com/docs/)
```
