# Real-Time Chat Application

A real-time chat application built using Node.js, Express, MongoDB, and WebSockets (Socket.io). This project allows users to register, log in, and chat in different rooms with real-time message updates.

## Features
- User authentication (JWT-based).
- Real-time messaging using WebSockets.
- MongoDB for data storage (User and Message data).
- Docker support for easy deployment.

## Tech Stack
- **Frontend**: React (for user interface, but not included here)
- **Backend**: Node.js, Express, Socket.io
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)
- **WebSocket**: Socket.io for real-time communication

---

## Setup Instructions

Follow these instructions to set up and run the application locally.

### 1. **Clone the Repository**
Clone this repository to your local machine using:
```bash
git clone https://github.com/Nuraj250/Real-Time-Chat-Application.git
```

### 2. **Install Dependencies**
Navigate to the server directory and install the required dependencies:
```bash
cd Real-Time-Chat-Application
npm install
```

### 3. **Configuration**
Create a `.env` file in the root of the project with the following environment variables:
```env
MONGO_URI=mongodb://localhost:27017/chatdb
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password
```
- **MONGO_URI**: The connection string for MongoDB. By default, it is set to `mongodb://localhost:27017/chatdb`, but you can change it based on your setup.
- **JWT_SECRET**: Secret key used for JWT-based authentication.
- **EMAIL_USER** and **EMAIL_PASS**: Credentials for sending emails (if applicable).

### 4. **Run the Application Locally**
After setting up the environment variables, you can run the server with:
```bash
npm start
```
This will start the server on `http://localhost:5000`.

### 5. **Access the API**
You can now interact with the following endpoints:
- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: Log in and receive a JWT token.
- `POST /api/messages/send`: Send a new message.
- `GET /api/messages/:chatRoomId`: Get messages from a specific chat room.
- `GET /api/users/:userId`: Get user profile information.

---

## Docker Configuration

Docker is used to containerize the application and MongoDB, making it easy to run the app and database in isolated environments.

### 1. **Dockerfile**
The `Dockerfile` in the project builds the Node.js application image, installs dependencies, and starts the server.

### 2. **docker-compose.yml**
The `docker-compose.yml` file defines services for both the Node.js application and MongoDB. It automatically links them, allowing the app to connect to MongoDB.

#### Docker Compose Configuration

```yaml
version: '3.8'

services:
  app:
    build: .
    container_name: real-time-chat-app
    ports:
      - "5000:5000"
    environment:
      - MONGO_URI=mongodb://mongo:27017/chatdb
      - JWT_SECRET=your_jwt_secret
      - EMAIL_USER=your_email@gmail.com
      - EMAIL_PASS=your_email_password
    depends_on:
      - mongo

  mongo:
    image: mongo:latest
    container_name: mongo-db
    volumes:
      - mongo-data:/data/db
    ports:
      - "27017:27017"

volumes:
  mongo-data:
```

- The `app` service is built from the Dockerfile, and it connects to MongoDB (via the `mongo` container).
- The `mongo` service uses the official MongoDB image, and its data is persisted in a volume named `mongo-data`.

### 3. **Build and Run with Docker**

#### Build Docker Images
To build the application image and MongoDB container, run the following command:
```bash
docker-compose build
```

#### Start the Application and Database Containers
After building the images, you can start the containers using:
```bash
docker-compose up
```

This will start the server and MongoDB container. The application will be accessible at `http://localhost:5000`.

#### Stop the Containers
To stop the containers, run:
```bash
docker-compose down
```

---

## API Endpoints

### **Authentication**
- `POST /api/auth/register`:  
  Register a new user by sending a JSON body with `username` and `password`.

- `POST /api/auth/login`:  
  Log in with `username` and `password` and receive a JWT token.

### **Messaging**
- `POST /api/messages/send`:  
  Send a message to a chat room. Requires authentication via a Bearer token.

- `GET /api/messages/:chatRoomId`:  
  Get all messages for a specific chat room.

### **User**
- `GET /api/users/:userId`:  
  Get the profile information of a user by their ID.

---

## Contributing

If you'd like to contribute to the project, follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.